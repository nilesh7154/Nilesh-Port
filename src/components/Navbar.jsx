import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaLaptopCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// Social media links with glow + bounce color effects
const socialLinks = [
  {
    href: "https://github.com/nilesh7154",
    icon: FaGithub,
    label: "GitHub",
    shadow: "shadow-[0_0_15px_#38bdf8]",
    color: "text-[#38bdf8]",
  },
  {
    href: "https://www.linkedin.com/in/rathod-nilesh7154",
    icon: FaLinkedin,
    label: "LinkedIn",
    shadow: "shadow-[0_0_15px_#0A66C2]",
    color: "text-[#0A66C2]",
  },
  {
    href: "https://www.instagram.com/niluu_.3",
    icon: FaInstagram,
    label: "Instagram",
    shadow: "shadow-[0_0_15px_#E1306C]",
    color: "text-[#E1306C]",
  },
  {
    href: "https://www.facebook.com/nilesh.rathod.997408",
    icon: FaFacebook,
    label: "Facebook",
    shadow: "shadow-[0_0_15px_#1877F2]",
    color: "text-[#1877F2]",
  },
  {
    href: "https://wa.me/918530019387",
    icon: FaWhatsapp,
    label: "WhatsApp",
    shadow: "shadow-[0_0_15px_#25D366]",
    color: "text-[#25D366]",
  },
];

// Navigation items
const navItems = [
  { name: "Home", icon: <FaHome /> },
  { name: "About", icon: <FaUser /> },
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Skills", icon: <FaLaptopCode /> },
  { name: "Project", icon: <FaProjectDiagram /> },
  { name: "Contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden md:fixed md:top-0 md:left-0 md:h-full md:w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-black md:shadow-xl md:flex md:flex-col md:justify-between md:py-10 md:z-50 md:rounded-r-lg text-gray-200">
        {/* Profile section */}
        <div className="text-center px-6">
          <img
            src="/Image/nil2.jpg"
            alt="Nilesh Profile"
            className="w-48 h-64 rounded-[100px] mx-auto border-4 border-gray-700 object-cover glow-animation"
          />
          <h1 className="text-2xl font-bold mt-6 text-white select-text">
            Nilesh Rathod
          </h1>
          <p className="text-xs mt-1 uppercase tracking-wide text-gray-400 select-text">
            Portfolio
          </p>
        </div>

        {/* Social icons */}
        <div className="pt-6">
         
          <div className="flex justify-center space-x-2 text-xl">
            {socialLinks.map(({ href, icon: Icon, label, shadow, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition duration-300 transform animate-bounce-custom focus:outline-none focus:ring-2 focus:ring-cyan-400 ${shadow} ${color}`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center mt-12 space-y-5 text-sm font-semibold uppercase text-gray-300 select-none">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.name.toLowerCase()}
              smooth
              duration={500}
              offset={0}
              spy
              activeClass="text-yellow-300 font-bold"
              className="flex items-center gap-3 cursor-pointer hover:text-yellow-300 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
            >
              <span className="text-lg">{item.icon}</span> {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* ===== Mobile Toggle Button ===== */}
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="fixed top-5 right-5 z-50 text-3xl text-white bg-[#0563bb] p-3 rounded-full shadow-lg transition-transform hover:rotate-90 focus:rotate-90 focus:outline-none focus:ring-4 focus:ring-[#0d3e70] md:hidden"
        aria-label={navOpen ? "Close menu" : "Open menu"}
      >
        {navOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* ===== Mobile Sidebar ===== */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-md text-gray-200 z-50 transform transition-transform duration-300 ease-in-out ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden shadow-xl`}
      >
        {/* Mobile Profile */}
        <div className="text-center mt-16 px-6">
          <img
            src="/Image/nil2.jpg"
            alt="Nilesh Profile"
            className="w-40 h-56 rounded-[80px] mx-auto border-4 border-gray-700 object-cover glow-animation"
          />
          <p className="text-lg font-semibold mt-4 select-text">Nilesh Rathod</p>
        </div>

        {/* Mobile Social icons */}
        <div className="pt-6">
          <p className="mb-3 text-center text-gray-300 font-semibold">
            Connect with me
          </p>
          <div className="flex justify-center space-x-2 text-xl">
            {socialLinks.map(({ href, icon: Icon, label, shadow, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition duration-300 transform animate-bounce-custom focus:outline-none focus:ring-2 focus:ring-cyan-400 ${shadow} ${color}`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col space-y-8 px-5 py-10 text-sm font-semibold uppercase text-gray-300 select-none">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.name.toLowerCase()}
              smooth
              duration={500}
              offset={0}
              spy
              activeClass="text-yellow-300 font-bold"
              className="flex items-center gap-3 cursor-pointer hover:text-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
              onClick={() => setNavOpen(false)}
            >
              <span className="text-lg">{item.icon}</span> {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* ===== Custom CSS Animation Styles ===== */}
      <style>{`
        /* Glowing image effect */
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6);
          }
        }

        .glow-animation {
          animation: glowPulse 3s ease-in-out infinite;
        }

        /* Custom bounce for social icons */
        @keyframes bounceCustom {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-bounce-custom {
          animation: bounceCustom 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
