import React, { useContext } from "react";
import ProductContext from "../../context/ProductsProvider";

const ProductsCategory = () => {
  const {
    selectedCategory,
    handleCategoryChange,
    filterProducts,
    resetFilters,
  } = useContext(ProductContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterProducts();
  };

  return (
    <section className="product__category">
      <h3>Categories</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="radio"
            name="category"
            id="all"
            value=""
            checked={selectedCategory === ""}
            onChange={handleCategoryChange}
          />
          <label htmlFor="all">All</label>
        </p>
        <p>
          <input
            type="radio"
            name="category"
            id="rolex"
            value="Rolex"
            checked={selectedCategory === "Rolex"}
            onChange={handleCategoryChange}
          />
          <label htmlFor="rolex">Rolex</label>
        </p>
        <p>
          <input
            type="radio"
            name="category"
            id="richard-mille"
            value="Richard Mille"
            checked={selectedCategory === "Richard Mille"}
            onChange={handleCategoryChange}
          />
          <label htmlFor="richard-mille">Richard Mille</label>
        </p>
        <p>
          <input
            type="radio"
            name="category"
            id="patek"
            value="Patek Philippe"
            checked={selectedCategory === "Patek Philippe"}
            onChange={handleCategoryChange}
          />
          <label htmlFor="patek">Patek Philippe</label>
        </p>
        <div className="category__btn">
          <button type="submit">Use Filter</button>
          <button type="button" onClick={resetFilters}>
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProductsCategory;
