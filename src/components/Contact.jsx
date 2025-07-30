import { useState } from "react";
import axios from "axios";

export default function Contact() {
  // Form data state to hold input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Feedback states to show success or error messages
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Update form fields on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission asynchronously
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setSuccess(false); // Reset success message
    setError(false); // Reset error message

    try {
      // POST request to backend API (replace URL as needed)
      await axios.post("http://localhost:5000/messages", formData);
      setSuccess(true); // Show success message
      setFormData({
        // Clear form fields
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err); // Log error for debugging
      setError(true); // Show error message
    }
  };

  return (
    <section
      id="contact"
      className="
        relative py-24
        bg-gradient-to-b from-gray-950 via-gray-800 to-black 
        text-gray-200 scroll-mt-20
      "
    >
      {/* Background overlay for subtle blue-cyan ambiance */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 opacity-60 pointer-events-none" /> */}

      {/* Container to center the content and apply horizontal padding */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide underline decoration-cyan-400 underline-offset-8">
          Contact Me
        </h2>

        {/* Invitation text */}
        <p className="text-center text-cyan-300 mb-12 max-w-xl mx-auto">
          Have a project in mind or just want to connect? Feel free to reach out
          below.
        </p>

        {/* Grid container for the form and map side-by-side */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact form with glass-like transparent background and glowing shadow on hover */}
          <form
            onSubmit={handleSubmit}
            className="
              space-y-6 rounded-xl p-8
              bg-gray-800 bg-opacity-50 backdrop-blur-md
              border border-cyan-600
              shadow-[0_4px_30px_rgba(0,255,255,0.3)]
              hover:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)]
              transition-shadow duration-500
            "
          >
            {/* Individual input fields */}
            <Input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* Submit button with cyan background and scale animation on click */}
            <button
              type="submit"
              className="
                w-full bg-cyan-800 hover:bg-amber-950 text-white
                font-semibold px-8 py-4 rounded-md shadow-lg
                transition-transform active:scale-95
                focus:outline-none focus:ring-4 focus:ring-cyan-400
              "
            >
              Send Message
            </button>

            {/* Success and error feedback messages */}
            {success && (
              <p className="text-green-400 font-semibold text-center">
                Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-500 font-semibold text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Embedded Google Map with glowing cyan shadow on hover */}
          <div
            className="
              rounded-xl overflow-hidden h-[400px] border border-cyan-600
              shadow-[0_4px_30px_rgba(0,255,255,0.3)]
              hover:shadow-[0_0_40px_16px_rgba(0,255,255,0.8)]
              transition-shadow duration-500
            "
          >
            <iframe
              title="Jalgaon Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.096217594313!2d75.56964331490808!3d20.919781086070333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90df7f233979d%3A0x94a2a189f20e0274!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629382085396!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Controlled input component with dark styling and focus/hover effects
function Input({ name, type, placeholder, value, onChange, required }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete="off"
      className="
        w-full p-4 rounded-md bg-gray-900 border border-gray-700 text-gray-200
        placeholder-gray-500 transition
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400
        hover:border-cyan-500 shadow-inner
      "
    />
  );
}

// Controlled textarea component with similar styling to inputs
function Textarea({ name, placeholder, value, onChange, required }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="
        w-full p-4 rounded-md bg-gray-900 border border-gray-700 text-gray-200
        placeholder-gray-500 transition
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400
        hover:border-cyan-500 shadow-inner resize-none h-32
      "
    />
  );
}
