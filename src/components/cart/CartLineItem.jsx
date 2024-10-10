import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }) => {
  const img = `/public/images/${item.sku}.jpg`
/*   const img = new URL(`../../images/${item.sku}.jpg`, import.meta.url).href;
 */
  const lineTotal = item.qty * item.price;

  const highestQty = 20 > item.qty ? 20 : item.qty;

  const optionValues = [...Array(highestQty).keys()].map((i) => i + 1);

  const options = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQty = (e) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  const content = (
    <li className="cart__item">
      <img src={img} alt={item.name} className="cart__img" />
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price Per Item" className="price_per_item">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        })
          .format(item.price)
          .replace("NGN", "₦")}
      </div>

      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        value={item.qty}
        aria-label="Item Quantity"
        onChange={onChangeQty}
      >
        {options}
      </select>

      <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        })
          .format(lineTotal)
          .replace("NGN", "₦")}
      </div>

      <button
        className="cart__button"
        aria-label="Remove Item From Cart"
        title="Remove Item From Cart"
        onClick={onRemoveFromCart}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </li>
  );

  return content;
};

// Memoization function to compare previous and next items
function areItemsEqual(prevProps, nextProps) {
  return Object.keys(prevProps.item).every((key) => {
    return prevProps.item[key] === nextProps.item[key];
  });
}

const MemoizedCartLineItem = memo(CartLineItem, areItemsEqual);

export default MemoizedCartLineItem;
