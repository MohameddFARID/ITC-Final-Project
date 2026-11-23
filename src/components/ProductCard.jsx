import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export const discountOf = (p) => (p.oldPrice > p.price ? Math.round((1 - p.price / p.oldPrice) * 100) : 0);

export default function ProductCard({ product, showDiscount = false }) {
  const { addItem } = useCart();
  const off = showDiscount ? discountOf(product) : 0;
  return (
    <article className="pcard">
      <div className="pcard-tile">
        <Link to={`/shop/${product.id}`} className="pcard-link" aria-label={product.name}>
          {product.image ? <img src={product.image} alt={product.name} /> : <span className="emoji">{product.emoji}</span>}
        </Link>
        {(product.isNew || off > 0) && (
          <div className="ribbon">
            {product.isNew && <span className="r-new">NEW</span>}
            {off > 0 && <span className="r-off">-{off}%</span>}
          </div>
        )}
        <button className="pcard-add" onClick={() => addItem(product)}>Add to cart</button>
      </div>
      <h3><Link to={`/shop/${product.id}`}>{product.name}</Link></h3>
      <p className="price">
        ${product.price.toFixed(2)} {product.oldPrice > product.price && <s>${product.oldPrice}</s>}
      </p>
    </article>
  );
}
