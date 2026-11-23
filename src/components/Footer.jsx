import { Link } from "react-router-dom";
import { BRAND } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo gold">{BRAND}<sup>™</sup></div>
          <p>{BRAND} is a home and living store with simple, well-made furniture, lighting, and accessories.</p>
          <p className="f-line">Add: 12 Garden Street, Giza, Egypt</p>
          <p className="f-line">Email: contact@outstock.example</p>
          <p className="f-line">Phone Number: (800) 123 456 789</p>
        </div>
        <div>
          <h4>Information</h4>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          <h4>Customer Service</h4>
          <Link to="/contact">Shipping Policy</Link>
          <Link to="/contact">Help &amp; Contact Us</Link>
          <Link to="/contact">Returns &amp; Refunds</Link>
          <Link to="/contact">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="container copy">
        <p>Copyright {new Date().getFullYear()} © <span className="gold">{BRAND}</span> all rights reserved. Student project.</p>
        <p className="social"><span>f</span><span>t</span><span>Bē</span></p>
      </div>
    </footer>
  );
}
