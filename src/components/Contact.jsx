import { useState } from "react";
import axios from "axios";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

// Social links
const socialLinks = [
  { href: "https://github.com/nilesh7154", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/rathod-nilesh7154", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/niluu_.03", Icon: FaInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/nilesh.rathod.997408", Icon: FaFacebook, label: "Facebook" },
  { href: "https://wa.me/918530019387", Icon: FaWhatsapp, label: "WhatsApp" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200 scroll-mt-20"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide underline decoration-cyan-400 underline-offset-8">
          Contact Me
        </h2>
        <p className="text-center text-cyan-300 mb-12 max-w-xl mx-auto">
          Have a project in mind or just want to connect? Feel free to reach out below.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* LEFT: Info Card */}
          <div className="flex flex-col bg-gray-800 bg-opacity-50 backdrop-blur-md border border-cyan-600 rounded-xl shadow-[0_4px_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)] transition-shadow duration-500 overflow-hidden">
            {/* Image */}
            <img
              src="/Image/connect.jpg"
              alt="Nilesh Rathod"
              className="w-full h-[280px] object-cover"
            />

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                
               

                {/* Contact Info */}
                <div className="mt-6 space-y-4 text-left text-sm mx-auto w-fit">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MdEmail className="text-cyan-400 text-xl" />
                    <a href="mailto:rathodnilesh7154@gmail.com" className="hover:underline">
                      rathodnilesh7154@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MdPhone className="text-cyan-400 text-xl" />
                    <a href="tel:+918530019387" className="hover:underline">
                      +91 8530019387
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MdLocationOn className="text-cyan-400 text-xl" />
                    <span>Jalgaon, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-6">
                <p className="mb-3 text-center text-gray-300 font-semibold">Connect with me</p>
                <div className="flex justify-center space-x-6 text-2xl">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="transition transform hover:scale-110 text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl p-8 bg-gray-800 bg-opacity-50 backdrop-blur-md border border-cyan-600 shadow-[0_4px_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)] transition-shadow duration-500 h-full"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
              <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            </div>
            <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />

            <button
              type="submit"
              className="w-full bg-cyan-800 hover:bg-cyan-900 text-white font-semibold px-8 py-4 rounded-md shadow-lg transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-cyan-400"
            >
              Send Message
            </button>

            {success && <p className="text-green-400 font-semibold text-center">Message sent successfully!</p>}
            {error && <p className="text-red-500 font-semibold text-center">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

// Reusable Input Component
function Input({ name, placeholder, value, onChange }) {
  return (
    <input
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full p-4 rounded-md bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 hover:border-cyan-500 shadow-inner"
    />
  );
}

// Reusable Textarea Component
function Textarea({ name, placeholder, value, onChange }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full p-4 h-32 rounded-md bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 hover:border-cyan-500 shadow-inner resize-none"
    />
  );
}
