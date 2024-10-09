import Nav from "./Nav";
import useCart from "../../hooks/useCart";
import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../index.css";

const Header = ({ viewCart, setViewCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/cart") {
      setViewCart(true);
    } else if (location.pathname === "/products" || location.pathname === "/") {
      setViewCart(false);
    }
  }, [location.pathname, setViewCart]);

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

  const { totalItems, totalPrice } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const content = (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
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
          <h1 className="header__logo">TickPro</h1>
          <div className="header__price-box">
            <p>Total Items: {totalItems}</p>
            <p>
              <span className="total_amt">Amount:</span> {totalPrice}
            </p>
          </div>
        </div>
        <Nav
          viewCart={viewCart}
          setViewCart={setViewCart}
          scrolled={scrolled}
        />
      </header>
    </>
  );

  return content;
};

export default Header;
