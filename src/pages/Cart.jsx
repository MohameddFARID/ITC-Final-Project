import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import { useCart } from "../context/CartContext.jsx";
import { products } from "../data.js";

export default function Cart() {
  const { items, setQty, removeItem, clear } = useCart();
  const lines = items
    .map((i) => ({ ...products.find((p) => p.id === i.id), qty: i.qty }))
    .filter((l) => l.name);
  const total = lines.reduce((sum, l) => sum + l.price * l.qty, 0);

  return (
    <>
      <PageHeader title="Cart" trail={[{ label: "Cart" }]} />
      <section className="section container">
        {lines.length === 0 ? (
          <div className="empty">
            <p className="muted-text">Your cart is currently empty.</p>
            <Button to="/shop">Return to shop</Button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {lines.map((l) => (
                <li key={l.id}>
                  <Link to={`/shop/${l.id}`} className="cart-name"><span className="cart-thumb"><img src={l.image} alt="" /></span>{l.name}</Link>
                  <div className="qty">
                    <button onClick={() => setQty(l.id, l.qty - 1)} aria-label="Decrease">−</button>
                    <span>{l.qty}</span>
                    <button onClick={() => setQty(l.id, l.qty + 1)} aria-label="Increase">+</button>
                  </div>
                  <strong>${(l.price * l.qty).toFixed(2)}</strong>
                  <button className="link-btn" onClick={() => removeItem(l.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <p>Total: <strong>${total.toFixed(2)}</strong></p>
              <div className="btn-row">
                <Button onClick={clear}>Clear cart</Button>
                <Button variant="dark">Checkout</Button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
