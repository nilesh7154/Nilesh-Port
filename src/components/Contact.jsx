import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    try {
      await axios.post("http://localhost:5000/messages", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-white scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-8 tracking-wide text-center underline decoration-[#0563bb] underline-offset-8">
          Contact Me
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Have a project in mind or just want to connect? Feel free to reach out
          below.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0563bb]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0563bb]"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0563bb]"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#0563bb]"
              required
            />
            <button
              type="submit"
              className="bg-[#0563bb] text-white px-8 py-4 rounded-md font-semibold uppercase hover:bg-[#034a86] transition"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {error && (
              <p className="text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              title="Jalgaon Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.096217594313!2d75.56964331490808!3d20.919781086070333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90df7f233979d%3A0x94a2a189f20e0274!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629382085396!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
