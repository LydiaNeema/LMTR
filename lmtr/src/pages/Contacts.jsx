import React, { useState } from 'react';

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Name, Email, and Message fields are required.");
      return;
    }

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
    <div className=" py-10 px-4" style={{ background: 'linear-gradient(110deg, #566160 70%, #dde6f6 100%)' }} >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-cyan-300 mb-2">Contact Us</h1>
        <p className="text-center text-yellow-300 mb-8">We’d love to hear from you!</p>

        <div className=" flex flex-col justify-center items-center gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className=" flex  flex-col justify-center  shadow-md w-200 rounded-xl p-6 flex-1" style={{ background: 'linear-gradient(110deg, #566160 70%, #dde6f6 100%)' }}
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className=" flex flex-col justify-center items-center w-200  shadow-md rounded-xl p-6  text-black space-y-4" style={{ background: 'linear-gradient(110deg, #566160 70%, #dde6f6 100%)' }} >
            <p><strong>Email:</strong> support@shopstack.com</p>
            <p><strong>Phone:</strong> +254 742139255</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
            <p><strong>Hours:</strong> Mon–Fri, 9am–5pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
