import PageHeader from "../components/PageHeader.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import { team } from "../data.js";

export default function About() {
  return (
    <>
      <PageHeader title="About Us" trail={[{ label: "About Us" }]} />
      <section className="section container about-home">
        <div className="about-art"><img src="/images/room-scene.jpg" alt="" /></div>
        <div>
          <h2>Our story</h2>
          <p>Outstock started in 2021 with one workshop and a short list of products we liked. Today we sell furniture, lighting, and accessories that are simple, durable, and fairly priced.</p>
          <p>We work directly with makers, check every item by hand, and ship in recyclable packaging.</p>
          <Button to="/shop">Visit the shop</Button>
        </div>
      </section>
      <section className="section container">
        <SectionTitle title="Our Team" text="The people who pick, pack, and answer your messages." />
        <div className="grid three">
          {team.map((m) => (
            <div key={m.id} className="member">
              <div className="avatar" aria-hidden="true">{m.name.split(" ").map((w) => w[0]).join("")}</div>
              <h3>{m.name}</h3>
              <p className="muted">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
