export default function SectionTitle({ title, text }) {
  return (
    <div className="section-title">
      <h2><span>{title}</span></h2>
      {text && <p>{text}</p>}
    </div>
  );
}
