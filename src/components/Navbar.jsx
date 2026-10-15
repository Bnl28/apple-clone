import { navLists } from "../constants";

const navigationUrls = {
  Store: "/store",
  Mac: "/mac",
  iPhone: "/",
  Support: "/support",
};

const Navbar = ({ activePage = "iPhone" }) => {
  return (
    <header className="site-header bg-black">
        <nav className="site-nav screen-max-width" aria-label="Main navigation">
          <a className="store-brand" href="/" aria-label="Apple Clone showcase home">Apple Clone</a>
          <div className="nav-tabs">
            {navLists.map((item) => (
              <a
                key={item}
                className="nav-tab"
                href={navigationUrls[item]}
                aria-current={item === activePage ? "page" : undefined}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
    </header>
  );
};

export default Navbar;
