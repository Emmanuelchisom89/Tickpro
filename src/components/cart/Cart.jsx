import { useState, useEffect } from "react";
import useCart from "../../hooks/useCart";
import CartLineItem from "./CartLineItem";
import Header from "../common/Header";
import HomeFooter from "../common/HomeFooter";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
  const [viewCart, setViewCart] = useState(false); 
  const [storedCart, setStoredCart] = useState(cart);
  const navigate = useNavigate();

  // Save cart items to localStorage when cart updates
  useEffect(() => {
    setStoredCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setStoredCart(JSON.parse(savedCart));
    }
  }, []);

  const onSubmitOrder = () => {
    navigate("/shipment"); // Redirect to the shipment details page
  };

  const pageNameSection = (
    <div className="page-name-section">
      <h1>Home / Cart</h1>
    </div>
  );

  // Empty cart content
  const emptyCartContent = (
    <div className="empty-cart">
      <img src="/public/images/emptycart2.jpg" alt="Empty Cart" />
{/*       <img src="/images/emptycart2.jpg" alt="Empty Cart" />
 */}      <h3>Your cart is currently empty, Keep shopping.</h3>
      <button type="button" onClick={() => navigate("/products")}>
        Continue Shopping
      </button>
    </div>
  );

  // Cart content
  const cartContent = (
    <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {storedCart.map((item) => (
          <CartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        )).reverse()}
      </ul>
      <div className="cart__totals">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button
          type="button"
          className="cart__submit"
          disabled={!totalItems}
          onClick={onSubmitOrder}
        >
          Proceed to Shipment
        </button>
      </div>
    </>
  );

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageNameSection}
      <main className="main main--cart">
        <h3 className="main-cart-h3">
          {totalItems > 1
            ? `${totalItems} items in cart.`
            : `${totalItems} item in cart`}
        </h3>
        {storedCart.length === 0 ? emptyCartContent : cartContent}
      </main>
      <HomeFooter />
    </>
  );

  return content;
};

export default Cart;
