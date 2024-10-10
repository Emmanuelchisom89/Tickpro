import React, { useContext, useState } from "react";
import Header from "../common/Header";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import HomeFooter from "../common/HomeFooter";
import ProductContext from "../../context/ProductsProvider";

const ShipmentForm = () => {
  const [viewCart, setViewCart] = useState(false);
  const { cart, totalPrice } = useCart(); 
  const { products } = useContext(ProductContext); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
    shippingOption: "standard",
  });

  const subTotalPriceNumber = cart.reduce(
    (prev, item) => prev + item.price * item.qty,
    0
  );

  const shippingFeeNumber = subTotalPriceNumber * 0.08;

  const shippingFee = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  })
    .format(shippingFeeNumber)
    .replace("NGN", "₦");

  const totalPriceNumber = subTotalPriceNumber + shippingFeeNumber;

  const totalP = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  })
    .format(totalPriceNumber)
    .replace("NGN", "₦");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", { state: { totalAmount: totalPriceNumber } });
  };

  const getProductReview = (sku) => {
    const product = products.find((prod) => prod.sku === sku);
    return product ? product.rating || 0 : 0;
  };

  const pageContent = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <div className="shipment-container">
        <div className="small">
          <Link to="/">
            <FaHome className="small-i" />{" "}
            <span className="home_icon_span">Home</span>
          </Link>
          <Link to="/cart">
            <FaAngleRight className="small-i" />
            <span className="top">Cart</span>
          </Link>
          <Link to="/shipment">
            <FaAngleRight className="small-i" />
            <span className="top">Shipment</span>
          </Link>
        </div>

        <h2>Shipment Details</h2>
        <div className="shipment-content">
          {/* Shipment Form */}
          <form className="shipment-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <label>First Name</label>
              <input
                type="text"
                title="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-section">
              <label>Last Name</label>
              <input
                type="text"
                title="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-section">
              <label>Address</label>
              <input
                type="text"
                title="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-section">
                <label>City</label>
                <input
                  type="text"
                  title="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-section">
                <label>State</label>
                <input
                  type="text"
                  title="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-section">
                <label>Postal Code</label>
                <input
                  type="text"
                  title="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <label>Phone Number</label>
              <input
                type="tel"
                title="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-section">
              <label>Shipping Option</label>
              <select
                name="shippingOption"
                value={formData.shippingOption}
                onChange={handleChange}
              >
                <option value="standard">Standard (3-5 days)</option>
                <option value="express">Express (1-2 days)</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Proceed to Payment
            </button>
          </form>

          {/* Order Summary */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.sku} className="order-item">
                  <img
                    src={`/public/images/${item.sku}.jpg`}
                    alt={item.name}
                    className="order-item-image"
                  />
                  <div className="order-item-details">
                    <p>{item.name}</p>
                    <div className="card-review-box">
                      <img src="/public/images/reviews.svg" alt="Reviews Icon" />{" "}
                      <span className="reviews-count">
                        ({getProductReview(item.sku)})
                      </span>
                    </div>
                    <div className="summ-row">
                      <div>{`Qty: ${item.qty}`}</div>
                      <div>
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "NGN",
                        })
                          .format(item.price * item.qty)
                          .replace("NGN", "₦")}
                      </div>
                    </div>
                  </div>
                </li>
              )).reverse()}
            </ul>

            <div className="price_summary">
              <div className="price_summary_top">
                <p>
                  Sub Total: <span>{totalPrice}</span>
                </p>
                <p>
                  Shipping: <span>{shippingFee}</span>
                </p>
              </div>
              <div className="price_summary_bottom">
                <p>
                  Total Price: <span>{totalP}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );

  return pageContent;
};

export default ShipmentForm;
