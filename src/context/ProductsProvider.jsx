import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Initial state for products
const initState = [];

// Context state initialization
const initContextState = {
  products: [],
  search: "",
  handleSearchChange: () => {},
  searchResult: [],
  selectedCategory: "",
  handleCategoryChange: () => {},
  filterProducts: () => {},
  resetFilters: () => {},
};

const ProductContext = createContext(initContextState);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(initState);
  const [searchResult, setSearchResult] = useState(initState);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products")); // 'products' is the collection name
        const productsArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id, // Add the document ID if needed
        }));

        return productsArray;
      } catch (error) {
        console.error("Error fetching products: ", error);
        return [];
      }
    };

    fetchProducts().then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
      );
      
    filteredResults.length > 0
    ?
        setSearchResult(filteredResults)
    :
        setSearchResult([{ name: `Product "${search}" was not found`, sku: "error-item" }]);

//     setSearchResult(filteredResults);
   }, [products, search]);

    
  const filterProducts = () => {
    let filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedCategory) {
      filteredResults = filteredResults.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setSearchResult(filteredResults);
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setSearchResult(products);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        search,
        handleSearchChange,
        searchResult,
        selectedCategory,
        handleCategoryChange,
        filterProducts,
        resetFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
