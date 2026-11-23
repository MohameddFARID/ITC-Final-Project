import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";

const validate = ({ name, email, subject }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (!subject.trim()) errors.subject = "Enter a subject.";
  return errors;
};

const Icon = ({ d }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={d} /></svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    setSent(Object.keys(found).length === 0);
    if (Object.keys(found).length === 0) setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHeader title="Contact" trail={[{ label: "Contact" }]} />
      <section className="section container contact">
        <div>
          <h2>Find us here.</h2>
          <ul className="info">
            <li><span className="ibox"><Icon d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" /></span><div><b>Address:</b><p>12 Garden Street, Giza, Egypt</p></div></li>
            <li><span className="ibox"><Icon d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" /></span><div><b>Email:</b><p>contact@outstock.example</p></div></li>
            <li><span className="ibox"><Icon d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" /></span><div><b>Number Phone:</b><p>(800) 123 456 789, (800) 987 654 321</p></div></li>
          </ul>
          <p className="muted-text">Outstock is a home and living store. Write to us about an order, a product, or delivery and we will reply within one working day.</p>
        </div>
        <div>
          <h2>Contact Us.</h2>
          <form onSubmit={onSubmit} noValidate>
            {sent && <p className="success" role="status">Message sent. We will reply soon.</p>}
            <div className="two">
              <label>Name <i>*</i>
                <input name="name" value={form.name} onChange={onChange} />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
              <label>Email <i>*</i>
                <input name="email" type="email" value={form.email} onChange={onChange} />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
            </div>
            <label>Subject <i>*</i>
              <input name="subject" value={form.subject} onChange={onChange} />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </label>
            <label>Message
              <textarea name="message" rows="8" value={form.message} onChange={onChange} />
            </label>
            <Button variant="dark" type="submit">Send Message</Button>
          </form>
        </div>
      </section>
    </>
  );
}
