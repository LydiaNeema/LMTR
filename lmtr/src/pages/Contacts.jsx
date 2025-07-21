import React, { useState } from 'react';

function Contacts() {
    //declared an empty array for formdata
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
//function handlechange on the form inputs
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }
//function to handleSubmit
  function handleSubmit(event) {
    event.preventDefault();

    // Trimmed values
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Name, Email, and Message fields are required.");
      return;
    }

    // simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }
     console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="contacts-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you!</p>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> support@shopstack.com</p>
          <p><strong>Phone:</strong> +254 742139255</p>
          <p><strong>Location:</strong> Nairobi, Kenya</p>
          <p><strong>Hours:</strong> Mon–Fri, 9am–5pm</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
