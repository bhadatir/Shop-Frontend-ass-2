import { CartProvider, useCart } from "./Components/CartContext";
import Home from "./Components/Home";
import { ThemeContextProvider } from "./Components/ThemeContextProvider";

const Product = () => {
  const { addToCart } = useCart();
  return (
    <button onClick={() => addToCart({ id: 1, name: "Apple", price: 10, quantity: 1 })}>
      Add Apple
    </button>
  );
};

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} x {item.quantity} - ₹{item.price * item.quantity}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <ThemeContextProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ThemeContextProvider>
  );
}

