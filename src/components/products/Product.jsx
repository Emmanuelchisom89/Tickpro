import React from "react";
/* import { useMemo } from "react";
 */import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }) => {

    // If the product has 'sku' as 'error-item', we show the 'Item doesn't exist' message
  if (product.sku === "error-item") {
    return <div className="error-message"><h3><FontAwesomeIcon icon={faCircleExclamation} className="error-message-icon" /> {product.name}</h3></div>;
  }

/*   const img = useMemo(() => {
    return new URL(`../../images/${product.sku}.jpg`, import.meta.url).href;
  }, [product.sku]);
 */
  
  const img = `/Tickpro/images/${product.sku}.jpg`;

  const onAddToCart = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
  };

  const itemInCart = inCart ? " → Item in Cart: ✔️" : null;

  const content = (
    <article className="product">
      <div key={product.sku}>
        <Link to={`/product/${product.sku}`}>
          <h3>
            {product.name.length > 17
              ? product.name.slice(0, 19) + "..."
              : product.name}
          </h3>
          <img src={img} alt={product.name} className="product__img" />
          <p>
            {product.model.length > 40
              ? product.model.slice(0, 35) + "..."
              : product.model}
          </p>
          <p className="product__price">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "NGN",
            })
              .format(product.price)
              .replace("NGN", "₦")}{" "}
            {itemInCart}
          </p>
        </Link>
        <button type="button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );

  return content;
};

const MemoizedProduct = React.memo(Product, (prevProps, nextProps) => {
  const { product: prevProduct, inCart: prevInCart } = prevProps;
  const { product: nextProduct, inCart: nextInCart } = nextProps;

  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key] === nextProduct[key]
      );
    }) && prevInCart === nextInCart
  );
});

export default MemoizedProduct;
