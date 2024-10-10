import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import HomeHeader from "../common/HomeHeader";
import HomeFooter from "../common/HomeFooter";
import CartContext from "../../context/CartProvider";

const PaystackPayment = () => {
  const { dispatch, REDUCER_ACTIONS } = useContext(CartContext); 
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0; // Get total amount

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    amount: totalAmount.toFixed(2),
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // Trigger payment after form submission
    payWithPaystack();
    setFormData({
      email: "",
      amount: "",
      firstName: "",
      lastName: "",
    });
  };

  const payWithPaystack = () => {
    const paystack = new PaystackPop();

    // Convert amount to kobo
    const amountInKobo = Number(formData.amount) * 100;

    paystack.newTransaction({
      key: "pk_test_8288c1500fe3ca485a42fd7774df6ae09bbfb7a4",
      email: formData.email,
      amount: amountInKobo,
      firstName: formData.firstName,
      lastName: formData.lastName,

      onSuccess: (response) => {
        alert(`Payment Successful! Reference: ${response.reference}`);

        // Empty the cart after successful payment
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });

        setTimeout(() => {
          navigate("/cart"); // Navigate to the cart page
        }, 3500); // Delay of 3.5 seconds (5000 milliseconds)
      },

      onCancel: () => {
        alert("Payment canceled");
      },
    });
  };

  return (
    <>
      <HomeHeader />
      <div className="payment-container">
        <div className="paystack_img">
          <img src="/public/images/paystack.png" alt="paystack" />
        </div>
        <h2>
          Paystack Payment <span>₦ {formData.amount}</span>
        </h2>
        <form id="paymentForm" onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="email" className="offscreen">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email-address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount" className="offscreen">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName" className="offscreen">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="offscreen">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit"> Pay </button>
          </div>
        </form>
      </div>
      <HomeFooter />
    </>
  );
};

export default PaystackPayment;
