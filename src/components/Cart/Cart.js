import { useDispatch, useSelector } from "react-redux";
import { clearCart, addItem, removeItem } from "../../cartSlice";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <div className="total-amount">Total Amount: {calculateTotalAmount()}</div>
      <diV className="button-clear-cart-button">
        <button className="clear-cart-button" onClick={() => handleClearCart()}>
          Clear Cart
        </button>
      </diV>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="fruit-name">{item.name}</div>
            <div>
              <img src={item.image} alt={item.name} className="fruit-image" />
            </div>
            <div className="fruit-price">Price: {item.price}</div>
            <div className="quantity-container">
              <button
                className="quantity-button"
                onClick={() => handleRemoveFromCart(item)}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                className="quantity-button"
                onClick={() => handleAddToCart(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
