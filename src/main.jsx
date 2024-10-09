import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartProvider";
import { ProductsProvider } from "./context/ProductsProvider"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Tickpro">
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
