import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const navigationUrls = {
  Store: "https://www.apple.com/store",
  Mac: "https://www.apple.com/mac/",
  iPhone: "https://www.apple.com/iphone/",
  Support: "https://support.apple.com/",
};

const Navbar = () => {
  return (
    <header className="site-header bg-black">
        <nav className="site-nav screen-max-width" aria-label="Main navigation">
          <img src={appleImg} alt="Apple" width={14} height={18} />
          <div className="nav-tabs">
            {navLists.map((item) => (
              <a
                key={item}
                className="nav-tab"
                href={navigationUrls[item]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item} on Apple's official website (opens in a new tab)`}
              >
                {item}
              </a>
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
