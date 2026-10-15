import { useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("iPhone");

  return (
    <header className="site-header bg-black">
        <nav className="site-nav screen-max-width" aria-label="Main navigation">
          <img src={appleImg} alt="Apple" width={14} height={18} />
          <div className="nav-tabs">
            {navLists.map((item) => (
              <button
                key={item}
                type="button"
                className="nav-tab"
                aria-pressed={activeItem === item}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="nav-icons">
            <img src={searchImg} alt="Search" width={18} height={18} />
            <img src={bagImg} alt="Bag" width={18} height={18} />
          </div>
        </nav>
    </header>
  );
};

export default Navbar;
