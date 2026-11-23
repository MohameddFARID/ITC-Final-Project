import { useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ProductCard, { discountOf } from "../components/ProductCard.jsx";
import NotFound from "./NotFound.jsx";
import { products } from "../data.js";
import { useCart } from "../context/CartContext.jsx";

const SIZES = ["Small", "Medium", "Large"];
const COLORS = ["Natural", "White", "Black"];
const BULLETS = [
  "Made from solid, durable materials.",
  "Ships in recyclable packaging.",
  "Easy to clean and maintain.",
  "Ready to use out of the box.",
  "30-day returns on every order.",
  "One-year warranty included."
];
const REVIEWS = [
  { name: "Sara Ahmed", stars: 5, text: "Looks exactly like the photos and arrived on time." },
  { name: "Omar Khaled", stars: 4, text: "Good quality for the price. Packaging was great." },
  { name: "Nour Hassan", stars: 5, text: "I ordered two and would buy again." },
  { name: "Youssef Adel", stars: 4, text: "Solid build. The color is slightly warmer than expected." }
];
const SUB = "Mirum est notare quam littera gothica quam nunc putamus parum claram!";

// Split in two so state resets when you open another product (key={id})
export default function ProductDetails() {
  const { id } = useParams();
  return <Details key={id} id={Number(id)} />;
}

function Details({ id }) {
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);
  const [tab, setTab] = useState("description");

  if (!product) return <NotFound />;

  const others = products.filter((p) => p.id !== product.id);
  const sameCategory = others.filter((p) => p.category === product.category);
  const gallery = [product, ...sameCategory, ...others].slice(0, 3).map((p) => p.image);
  const related = [...sameCategory, ...others.filter((p) => p.category !== product.category)].slice(0, 3);
  const off = discountOf(product);

  const add = () => {
    if (!size || !color) {
      setError(true);
      setAdded(false);
      return;
    }
    setError(false);
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
  };

  return (
    <>
      <PageHeader title="Product Details" trail={[{ label: "Product Details" }]} />

      <section className="section container pd">
        <div className="pd-thumbs">
          {gallery.map((src, i) => (
            <button key={i} className={i === active ? "on" : ""} onClick={() => setActive(i)} aria-label={`Photo ${i + 1}`}>
              <img src={src} alt="" />
            </button>
          ))}
        </div>

        <div className="pd-main">
          <img src={gallery[active]} alt={product.name} />
          {(product.isNew || off > 0) && (
            <div className="ribbon">
              {product.isNew && <span className="r-new">NEW</span>}
              {off > 0 && <span className="r-off">-{off}%</span>}
            </div>
          )}
        </div>

        <div className="pd-info">
          <h2>{product.name}</h2>
          <p className="stars"><span>★★★★☆</span> 5 rating(s)</p>
          <p className="price big">${product.price.toFixed(2)} {product.oldPrice > product.price && <s>${product.oldPrice}</s>}</p>
          <p className="pd-desc">{product.desc}</p>

          <label>Size<i>*</i>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">- Please select -</option>
              {SIZES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label>Color<i>*</i>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="">- Please select -</option>
              {COLORS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <p className={`req ${error ? "show" : ""}`}>Required Fields *{error && " Choose a size and a color."}</p>

          <div className="buy-row">
            <span>Quantity</span>
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase">+</button>
            </div>
            <button className="btn btn-dark" onClick={add}>+ Add to cart</button>
          </div>
          {added && <p className="success" role="status">Added to your cart.</p>}
        </div>
      </section>

      <section className="container pd-tabs">
        <div className="tab-row" role="tablist">
          {[["description", "Description"], ["info", "Additional Information"], ["reviews", "Reviews (4)"]].map(([key, label]) => (
            <button key={key} role="tab" aria-selected={tab === key} className={tab === key ? "on" : ""} onClick={() => setTab(key)}>{label}</button>
          ))}
        </div>

        {tab === "description" && (
          <div className="tab-body">
            <p>{product.desc} Every piece is checked by hand before it ships, so what you see in the photos is what arrives at your door.</p>
            <ul className="checks">{BULLETS.map((b) => <li key={b}>{b}</li>)}</ul>
            <p>Care is simple: wipe with a soft dry cloth and keep away from direct heat. Contact us any time if you need advice on use or delivery.</p>
          </div>
        )}
        {tab === "info" && (
          <div className="tab-body">
            <dl className="specs">
              <dt>SKU</dt><dd>{product.sku}</dd>
              <dt>Category</dt><dd>{product.category}</dd>
              <dt>Sizes</dt><dd>{SIZES.join(", ")}</dd>
              <dt>Colors</dt><dd>{COLORS.join(", ")}</dd>
            </dl>
          </div>
        )}
        {tab === "reviews" && (
          <div className="tab-body">
            {REVIEWS.map((r) => (
              <div key={r.name} className="review">
                <p className="stars"><span>{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</span> <b>{r.name}</b></p>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="section container">
        <SectionTitle title="Related Products" text={SUB} />
        <div className="grid three">{related.map((p) => <ProductCard key={p.id} product={p} showDiscount />)}</div>
      </section>
    </>
  );
}
