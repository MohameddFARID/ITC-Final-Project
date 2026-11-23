import { Link } from "react-router-dom";

export default function PageHeader({ title, trail = [] }) {
  return (
    <section className="page-header">
      <div className="container">
        <h1>{title}</h1>
        <p className="crumbs">
          <Link to="/">Home</Link>
          {trail.map((t) => (
            <span key={t.label}> / {t.to ? <Link to={t.to}>{t.label}</Link> : <b>{t.label}</b>}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
