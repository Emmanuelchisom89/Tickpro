import { useNavigate } from "react-router-dom";
import "../../index.css";

const Nav = ({ viewCart, setViewCart, scrolled }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (viewCart) {
      navigate("/products");
    } else {
      navigate("/cart");
    }
    setViewCart(!viewCart);
  };

  const button = viewCart ? (
    <button type="button" onClick={handleButtonClick}>
      View Products
    </button>
  ) : (
    <button type="button" onClick={handleButtonClick}>
      View Cart
    </button>
  );

  const content = (
    <nav className={`nav__btn ${scrolled ? "scrolled" : ""}`}>{button}</nav>
  );

  return content;
};

export default Nav;
