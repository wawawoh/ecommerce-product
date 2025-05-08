import { useState, useEffect } from "react";

function Nav() {
  const [mobileView, setMobileView] = useState(true);
  const [displayMenu, setDisplayMenu] = useState(false);
  useEffect(() => {
    if (screen.width > 1000) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  }, []);

  return (
    <>
      {/* // mobile */}
      <div className={mobileView ? "active" : "hidden"}>
        <img
          src="/images/icon-menu.svg"
          alt="menu"
          onClick={() => setDisplayMenu(true)}
        />
        <nav className="mobile-menu">
          <ul
            className={
              displayMenu ? "mobile-list active" : "mobile-list hidden"
            }
          >
            <li>
              <img
                className="go-back"
                src="/images/icon-close.svg"
                alt="back"
                onClick={() => setDisplayMenu(false)}
              />
            </li>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      {/* // desktop */}
      <div
        className={mobileView ? "desktop-list hidden" : "desktop-list active"}
      >
        <ul className="desktop-menu">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
