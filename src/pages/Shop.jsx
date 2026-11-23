import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Button from "../components/Button.jsx";
import { products, categories } from "../data.js";

const MAX = 500;

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [slider, setSlider] = useState(MAX);   
  const [maxPrice, setMaxPrice] = useState(MAX);
  const [sort, setSort] = useState("default");

  const visible = products
    .filter((p) => category === "All" || p.category === category)
    .filter((p) => p.price <= maxPrice)
    .filter((p) => p.name.toLowerCase().includes(search.trim().toLowerCase()))
    .sort((a, b) => (sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : a.id - b.id));

  return (
    <>
      <PageHeader title="Shop" trail={[{ label: "Shop" }]} />
      <section className="section container shop">
        <aside>
          <input type="search" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search products" />
          <h3>Product Categories</h3>
          <ul className="cat-list">
            {["All", ...categories].map((c) => (
              <li key={c}>
                <button className={c === category ? "on" : ""} onClick={() => setCategory(c)}>{c}<span>›</span></button>
              </li>
            ))}
          </ul>
          <h3>Filter By Price</h3>
          <input type="range" min="0" max={MAX} value={slider} onChange={(e) => setSlider(Number(e.target.value))} aria-label="Maximum price" />
          <div className="price-row">
            <Button variant="dark" onClick={() => setMaxPrice(slider)}>Filter</Button>
            <span>Price : $0 - ${slider}</span>
          </div>
        </aside>

        <div>
          <div className="toolbar">
            <p>Showing {visible.length} of {products.length} results</p>
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
              <option value="default">Default Sorting</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </div>
          {visible.length === 0 ? (
            <p className="muted">No products match your filters.</p>
          ) : (
            <div className="grid three">{visible.map((p) => <ProductCard key={p.id} product={p} showDiscount />)}</div>
          )}
        </div>
      </section>
    </>
  );
}
