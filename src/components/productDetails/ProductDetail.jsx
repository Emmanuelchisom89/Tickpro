import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useCart from "../../hooks/useCart";
import ProductContext from "../../context/ProductsProvider";
import Header from "../common/Header";
import HomeFooter from "../common/HomeFooter";
import { FaAngleRight, FaHome } from "react-icons/fa";
import ProductDetailTables from "./ProductDetailTables";
import Badge from "../common/Badge";
import ContactSection from "../home/ContactSection";


const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { products } = useContext(ProductContext); // Get the products from context
  const { dispatch, REDUCER_ACTIONS } = useCart();

  const [viewCart, setViewCart] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(0); // Track the selected image index

  const product = products.find((prod) => prod.sku === id); // Find the product by SKU

  if (!product) {
    return <p>Product not found</p>;
  }

/*   const imageUrls = [
    new URL(`../../images/${product.sku}.jpg`, import.meta.url).href,
    new URL(`../../images/${product.sku}-2.jpg`, import.meta.url).href,
    new URL(`../../images/${product.sku}-3.jpg`, import.meta.url).href,
    new URL(`../../images/${product.sku}-4.jpg`, import.meta.url).href,
    new URL(`../../images/${product.sku}-5.jpg`, import.meta.url).href,
  ];
 */
  
  const imageUrls = [
  `/images/${product.sku}.jpg`,
  `/images/${product.sku}-2.jpg`,
  `/images/${product.sku}-3.jpg`,
  `/images/${product.sku}-4.jpg`,
  `/images/${product.sku}-5.jpg`,
];

  const handleAddToCart = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
  };

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <div className="product-detail">
        <div className="pdi">
          <img
            src={imageUrls[selectedImage]}
            alt={product.name}
            className="main-image"
          />
          <div className="thumbnail-container">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${selectedImage === index ? "selected" : ""}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="pd">
          <div className="small">
            <a href="/">
              <FaHome className="small-i" />
            </a>
            <span>
              <FaAngleRight className="small-i" />
            </span>
            <span className="top">{product.category} watches</span>
          </div>
          <h2>{product.name}</h2>
          <p>Model: {product.model}</p>
          <p>Category: {product.category}</p>
          <p className="mid prod">
            {product.basicInfo.condition} | Year of production {product.basicInfo.year} | {product.basicInfo.deliveryScope}
          </p>
          <p className="product-price">
            Price:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "NGN",
            })
              .format(product.price)
              .replace("NGN", "₦")}
          </p>
          <div className="card-review-box">
            <img src="/images/reviews.svg" alt="Reviews Icon" />
{/*             <img src="/src/images/reviews.svg" alt="Reviews Icon" />
 */}            <span className="reviews-count">({product.rating})</span>
          </div>

          <p className="mid ship">+ 8% for insured shipping to location.</p>
          <button
            className="add-to-cart-btn"
            type="button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <ProductDetailTables product={product} />
      <ContactSection />
      <Badge />
      <HomeFooter />
    </>
  );
};

export default ProductDetail;
