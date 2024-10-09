import Header from "../common/Header";
import Footer from "../common/Footer";
import Cart from "../cart/Cart";
import HomeFooter from "../common/HomeFooter";
import ProductList from "./ProductList";
import { useState, useContext } from "react";
import ProductContext from "../../context/ProductsProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ProductDisplay({ menuOpen }) {
  const [viewCart, setViewCart] = useState(false);

  const { search, handleSearchChange } = useContext(ProductContext);

  const pageNameSection = (
    <div
      className={`page-name-section product-page-section ${
        menuOpen ? "blur" : ""
      }`}
    >
      <h1>Home / Products</h1>

      <form>
        <label htmlFor="search__items" className="offscreen">
          Search Item
        </label>
        <div className="search__input-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search__icon" />
          <input
            type="text"
            title="search"
            value={search}
            onChange={handleSearchChange}
            className="search__items"
            placeholder="Search Item"
          />
        </div>
      </form>
    </div>
  );

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageNameSection}
      {pageContent}
      <Footer viewCart={viewCart} />
      <HomeFooter />
    </>
  );

  return content;
}

export default ProductDisplay;
