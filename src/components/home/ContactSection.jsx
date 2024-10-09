import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact_box">
        <p>TickPro Watches</p>
        <h2>DO YOU HAVE A QUESTION?</h2>
        <p>
          Send us a message on WhatsApp, Livechat or Email. We try to reply just
          in time.
        </p>
        <p>
          <i className="fab fa-whatsapp"></i> WhatsApp: +12 34 567 89 10 | 
          <i className="fas fa-envelope"></i> Email: admin@tickpro.com
        </p>

        <Link to={"/contact"}>
          <button type="button" aria-label="Contact us for inquiries">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
