import "../../index.css";
import { Link, useNavigate } from "react-router-dom";

const NavLinks = ({ scrolled, menuOpen, setMenuOpen, closeMenu }) => {
  const navigate = useNavigate();

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    setMenuOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollToAbout: true } });
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const content = (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
        <div className="nav__head">
          <h2 className="nav__icon">TickPro</h2>
          <button type="button" className="close-menu" onClick={closeMenu}>
            &times;
          </button>
        </div>

        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <a href="#about" onClick={handleScrollToAbout}>
              About
            </a>
          </li>
        </ul>
      </nav>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );

  return content;
};

export default NavLinks;
