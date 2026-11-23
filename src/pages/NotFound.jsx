import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <>
      <PageHeader title="404" trail={[{ label: "Page not found" }]} />
      <section className="section container empty">
        <h2>Page not found</h2>
        <p className="muted-text">The page you are looking for does not exist or has been moved.</p>
        <Button to="/">Back to home</Button>
      </section>
    </>
  );
}
