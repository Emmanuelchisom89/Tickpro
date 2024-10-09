import Home from "./components/home/Home";
import About from "./components/home/About";
import ProductDisplay from "./components/products/ProductDisplay";
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/productDetails/ProductDetail";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ContactUs from "./components/contact/ContactUs";
import ScrollToTop from "./components/common/ScrollToTop";
import ShipmentForm from "./components/shipment/ShipmentForm";
import PaystackPayment from "./components/payment/PaystackPayment";

function App() {
  const [viewCart, setViewCart] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home viewCart={viewCart} setViewCart={setViewCart} />}
        />
        <Route
          path="/products"
          element={
            <ProductDisplay
              menuOpen={false}
              viewCart={false}
              setViewCart={() => {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route
          path="/contact"
          element={<ContactUs viewCart={viewCart} setViewCart={setViewCart} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipment" element={<ShipmentForm />} />
        <Route
          path="/payment"
          element={<PaystackPayment />}
        />
      </Routes>
    </>
  );
}

export default App;
