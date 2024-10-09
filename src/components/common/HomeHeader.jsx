import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

const HomeHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".nav") &&
        !event.target.closest(".hamburger-menu")
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const content = (
    <>
      <header
        className={`header ${scrolled ? "scrolled" : ""}`}
        id="home__header"
      >
        <div className="header__title-bar">
          <button
            type="button"
            className={`hamburger-menu ${scrolled ? "scrolled" : ""}`}
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <NavLinks
            scrolled={scrolled}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            closeMenu={closeMenu}
          />
          <h1 className="header__logo home__head__logo">TickPro</h1>
        </div>
      </header>
    </>
  );
  
  return content;
};

export default HomeHeader;
