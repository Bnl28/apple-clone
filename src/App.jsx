import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Store from "./components/Store";

function App() {
  const isStore = window.location.pathname.replace(/\/$/, "") === "/store";

  return (
    <main className="bg-black">
      <Navbar isStore={isStore} />
      {isStore ? <Store /> : <><Hero /><Highlights /></>}
    </main>
  );
}

export default App;
