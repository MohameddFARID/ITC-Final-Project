import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { products, slides, testimonials, blogPosts } from "../data.js";

const SUB = "Mirum est notare quam littera gothica quam nunc putamus parum claram!";

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const current = slides[slide];

  const trending = products.slice(0, 4);
  const sale = products.filter((p) => p.isNew && p.oldPrice > p.price).slice(0, 5);
  const promos = [products[0], products[2]];

  const subscribe = (e) => {
    e.preventDefault();
    setMsg(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Thank you for subscribing." : "Enter a valid email address.");
  };

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>{current.title.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}</h1>
            <p>{current.text}</p>
            <Button to="/shop">Discover Now</Button>
          </div>
          <div className="hero-art"><img src={current.image} alt="" /></div>
        </div>
        <div className="dots">
          {slides.map((s, i) => (
            <button key={s.id} className={i === slide ? "on" : ""} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      <div className="container cats-wrap">
        <div className="cats">
          {[["Lighting & Chair", "lamp-pendant"], ["Decoration & Accessories", "flowers"], ["Baskets & Storage", "baskets"]].map(([name, pic]) => (
            <Link to="/shop" key={name} className="cat">
              <div><h3>{name}</h3><span>Discover Now</span></div>
              <img src={`/images/${pic}.jpg`} alt="" />
            </Link>
          ))}
        </div>
      </div>

      <section className="section container">
        <SectionTitle title="Trending Products" text={SUB} />
        <div className="grid four">{trending.map((p) => <ProductCard key={p.id} product={p} showDiscount />)}</div>
      </section>

      <section className="container promos">
        {promos.map((p) => (
          <div key={p.id} className="promo">
            <div>
              <small>Products {p.category.split(" ")[0]}</small>
              <h3>{p.name}</h3>
              <Button to={`/shop/${p.id}`}>Buy Now / <em>${p.price}</em></Button>
            </div>
            <img src={p.image} alt={p.name} />
          </div>
        ))}
      </section>

      <section className="section container">
        <SectionTitle title="Sale Off" text={SUB} />
        <div className="grid five">{sale.map((p) => <ProductCard key={p.id} product={p} showDiscount />)}</div>
      </section>

      <section className="section container about-home">
        <div className="about-art"><img src="/images/room-scene.jpg" alt="" /></div>
        <div>
          <h2>About Outstock</h2>
          <p>We sell simple, durable furniture and home accessories. Every piece is picked for its materials and finish, and shipped in recyclable packaging.</p>
          <p>Our small team tests each product before it goes on the shelf, so what you see in the photos is what arrives at your door.</p>
          <Button to="/about">Read More</Button>
        </div>
      </section>

      <section className="section container">
        <SectionTitle title="Testimonials" text={SUB} />
        <div className="grid three">
          {testimonials.map((t) => (
            <blockquote key={t.id} className="quote">
              <p>{t.text}</p>
              <footer>{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionTitle title="Our Blog Posts" text={SUB} />
        <div className="grid three">
          {blogPosts.map((b) => (
            <article key={b.id} className="post">
              <div className="post-img"><img src={b.image} alt="" /></div>
              <h3>{b.title}</h3>
              <p className="meta">By <span className="gold">{b.author}</span> / {b.date}</p>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container news">
        <h2>Get Discount Info</h2>
        <p>Subscribe to the Outstock mailing list to receive updates on new arrivals, special offers and other discount information.</p>
        <form onSubmit={subscribe} noValidate>
          <input type="email" placeholder="Subscribe to our newsletter..." value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
          <Button type="submit">Subscribe</Button>
          {msg && <p className="msg" role="status">{msg}</p>}
        </form>
      </section>
    </>
  );
}
