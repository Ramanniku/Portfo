import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    title: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\n\n${JSON.stringify(form, null, 2)}`);
    setForm({ title: "", subject: "", message: "" });
  };

  return (
    <div className="page-content">
      <h2 className=" glass contact-heading">Get in Touch</h2>
      <form className="glass contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Your Name / Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
