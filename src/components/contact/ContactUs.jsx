import React, { useState } from "react";
import Header from "../common/Header";
import HomeFooter from "../common/HomeFooter";
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebookSquare,
  FaHome,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Badge from "../common/Badge";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactUs = ({ viewCart, setViewCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
    
  const [status, setStatus] = useState("");
  const [statusPopup, setStatusPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
      
    setLoading(true); // Start loading

    if (window.location.hostname.includes("netlify")) {
      // Netlify form handling
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
        .then(() => {
          setStatus("Message sent successfully!");
          setStatusPopup(true); // Show pop-up
        })
        .catch(() => setStatus("Form submission failed!"))
        .finally(() => setLoading(false)); // End loading;
    } else {
      // Fallback for GitHub Pages - Formspree
      fetch("https://formspree.io/f/xyzgaozo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then(() => {
          setStatus("Message sent successfully!");
          setStatusPopup(true); // Show pop-up
        })
        .catch(() => setStatus("Error submitting the form"))
        .finally(() => setLoading(false)); // End loading;
    }
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const closePopup = () => {
    setStatusPopup(false);
  };

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <div className="contact-us">
        <div className="contact-us-container">
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <div className="small">
              <Link to="/">
                <FaHome className="small-i" />{" "}
                <span className="home_icon_span">Home</span>
              </Link>
              <Link to="/contact">
                <FaAngleRight className="small-i" />
                <span className="top">Contact us</span>
              </Link>
            </div>

            <p className="contact-us-p">
              Contact us through this form for professional support or any
              inquiries. You can also use it to share your comments or feedback.
            </p>

            <h2 className="contact__us__h2">Contact Us</h2>
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="form-group">
              <label htmlFor="name" className="offscreen">
                Name:{" "}
              </label>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </p>
            <p className="form-group">
              <label htmlFor="email" className="offscreen">
                Email:{" "}
              </label>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </p>
            <p className="form-group">
              <label htmlFor="phone" className="offscreen">
                Phone:{" "}
              </label>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </p>
            <p className="form-group">
              <label htmlFor="subject" className="offscreen">
                Subject:{" "}
              </label>
              <div className="input-container">
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter message subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </p>
            <p className="form-group">
              <label htmlFor="message" className="offscreen">
                Message:{" "}
              </label>
              <div className="input-container">
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Write your message"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </p>
            <p>
              <button type="submit" disabled={loading}>
                {loading ? "Submitting ..." : "Submit"}
              </button>
            </p>
          </form>
          <div className="contact__form__tel"></div>
        </div>
              

        <div className="contact__info">
          <h2>Contact info</h2>
          <p>
            We operate exclusively online and do not have a physical showroom,
            boutique, or store location. All of our watches are securely stored
            in bank vaults.{" "}
          </p>
          <div className="contact_socials">
            <p>
              <FaWhatsapp className="contact_icon" /> +12 34 567 89 10
            </p>
            <p>
              <FaEnvelope className="contact_icon" />
              admin@tickpro.com
            </p>
            <p>
              <FaFacebookSquare className="contact_icon" /> Tickpro Watches
            </p>
            <p>
              <FaXTwitter className="contact_icon" /> Tickpro Watches
            </p>
            <p>
              <FaInstagram className="contact_icon" /> Twatches. TickproWatches
            </p>
            <p>
              <FaYoutube className="contact_icon" /> Tickpro Watches
            </p>
          </div>
        </div>
          {statusPopup && (
          <div className="status-popup">
            <div className="popup-content">
              <p>{status}</p>
              <button type="button" onClick={closePopup}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
      <Badge />
      <HomeFooter />
    </>
  );
};

export default ContactUs;
