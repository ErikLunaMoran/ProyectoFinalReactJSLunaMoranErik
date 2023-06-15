import cart from "../assets/cart.png";

const styles = {
  img: {
    height: "3rem",
    width: "auto",
  },
  span: {
    color: "white",
    paddingLeft: 10,
  },
};

export const CartWidget = () => (
  <>
    <img src={cart} style={styles.img} alt="Carrito de compras" />
    <span style={styles.span}>0</span>
  </>
);
