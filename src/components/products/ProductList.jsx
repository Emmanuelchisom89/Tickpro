import { useState, useEffect, useContext } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import ProductContext from "../../context/ProductsProvider";
import ProductsCategory from "./ProductsCategory";
import Product from "./Product";
import LoadingSpinner from "../loadSpiner/LoadingSpinner";
import { debounce } from "lodash";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
    const { products } = useProducts();
    const { searchResult, search } = useContext(ProductContext); 
    const [loading, setLoading] = useState(true);
    const [isSearchLoading, setIsSearchLoading] = useState(false);

  useEffect(() => {
    // Simulate a delay to show the loading spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // .4s delay

    return () => clearTimeout(timer);
  }, []);
    
    // Handle search loading state and debounce the search filtering
  useEffect(() => {
    setIsSearchLoading(true); // Start search loading spinner

    const debouncedSearch = debounce(() => {
      setIsSearchLoading(false); // End search loading after debounce
    }, 300); // Delay of 300ms

    debouncedSearch(); // Invoke the debounced search

    return () => {
      debouncedSearch.cancel(); // Cleanup the debounce on unmount or search change
    };
  }, [search]); // Trigger whenever the search term changes

  let pageContent = <LoadingSpinner />;

  if (!loading && !isSearchLoading && products?.length) {
    pageContent = searchResult.map((product) => {
      const inCart = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
    }
    
  const content = (
    <main className="products-page-main">
      <ProductsCategory />
      <section className="main main--products">{isSearchLoading || loading ? <LoadingSpinner /> : pageContent}</section>
    </main>
  );

  return content;
};

export default ProductList;
