"use strict";

const finishNames = { glacier: "Glacier", midnight: "Midnight", violet: "Violet", coral: "Coral" };
const storageSizes = ["128", "256", "512"];
let finish = "glacier";
let storage = "128";
const visual = document.querySelector(".config-visual");
const dialog = document.querySelector("#preview-dialog");
const saveStatus = document.querySelector("#save-status");
const navigation = document.querySelector("#navigation");
const menuToggle = document.querySelector(".menu-toggle");

function updateConfiguration() {
  visual.dataset.finish = finish;
  visual.setAttribute("aria-label", `BNL One concept phone in ${finishNames[finish]} finish`);
  document.querySelector("#finish-name").textContent = finishNames[finish];
  document.querySelector("#selection-summary").textContent = `${finishNames[finish]} / ${storage} GB`;
  document.querySelectorAll("[data-finish].swatch").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.finish === finish));
  });
  document.querySelectorAll("[data-storage]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.storage === storage));
  });
  saveStatus.textContent = "";
}

document.querySelectorAll(".swatch").forEach((button) => {
  button.addEventListener("click", () => {
    finish = button.dataset.finish;
    updateConfiguration();
  });
});

document.querySelectorAll("[data-storage]").forEach((button) => {
  button.addEventListener("click", () => {
    storage = button.dataset.storage;
    updateConfiguration();
  });
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(expanded));
  navigation.classList.toggle("is-open", expanded);
});

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelector("#preview-button").addEventListener("click", () => {
  document.querySelector("#preview-selection").textContent = `BNL One — ${finishNames[finish]} / ${storage} GB`;
  saveStatus.textContent = "";
  dialog.showModal();
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

document.querySelector("#save-button").addEventListener("click", () => {
  try {
    localStorage.setItem("bnl-one-configuration", JSON.stringify({ finish, storage }));
    saveStatus.textContent = "Saved on this browser. Your selection will be here when you return.";
  } catch (error) {
    console.error("Unable to save the BNL One configuration:", error);
    saveStatus.textContent = "Couldn't save your selection. Browser storage may be disabled.";
  }
});

try {
  const saved = localStorage.getItem("bnl-one-configuration");
  if (saved) {
    const configuration = JSON.parse(saved);
    if (configuration && Object.hasOwn(finishNames, configuration.finish) && storageSizes.includes(configuration.storage)) {
      finish = configuration.finish;
      storage = configuration.storage;
    } else {
      console.warn("Saved BNL One configuration is invalid; using the initial selection.");
    }
  }
} catch (error) {
  console.warn("Unable to restore the BNL One configuration:", error);
}
updateConfiguration();
document.querySelector("#year").textContent = String(new Date().getFullYear());
