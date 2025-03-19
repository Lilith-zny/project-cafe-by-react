import useStore from "../store/useStore";

const Order = () => {
  const { cartItems, removeFromCart } = useStore();

  return (
    <>
      <div>Order</div>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width="50" height="50" />
              {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <strong>Total:</strong> $
        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
    </>
  );
};

export default Order;
