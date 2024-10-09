import useCart from "../../hooks/useCart";

const Footer = ({ viewCart }) => {
  const { totalPrice, totalItems } = useCart();

  const pageContent = viewCart ? (
    <p></p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping Cart: {totalItems}</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;

  return content;
};

export default Footer;
