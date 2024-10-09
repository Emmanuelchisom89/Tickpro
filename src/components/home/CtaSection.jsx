import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <motion.div
      className="cta__sec"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1>Ready to Shop?</h1>
      <h2 className="cta__title">Discover Our Special Offers!</h2>
      <p className="cta__text">
        Explore our exclusive deals and find the perfect solution for your
        needs.
      </p>
      <Link to="/products">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta__button"
        >
          Shop Now
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default CtaSection;
