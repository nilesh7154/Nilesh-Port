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
} from "react-icons/fa";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", icon: <FaHome /> },
  { name: "About", icon: <FaUser /> },
  { name: "Skills", icon: <FaLaptopCode /> },
  { name: "Project", icon: <FaProjectDiagram /> },
  { name: "Contact", icon: <FaEnvelope /> },
];

const socialLinks = [
  {
    href: "https://github.com/nilesh7154",
    icon: <FaGithub />,
    color: "hover:text-[#38bdf8]",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/rathod-nilesh7154/",
    icon: <FaLinkedin />,
    color: "hover:text-[#0A66C2]",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/niluu_.3",
    icon: <FaInstagram />,
    color: "hover:text-[#E1306C]",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/nilesh.rathod.997408",
    icon: <FaFacebook />,
    color: "hover:text-[#1877F2]",
    label: "Facebook",
  },
 
  {
    href: "https://wa.me/918530019387",
    icon: <FaWhatsapp />,
    color: "hover:text-[#25D366]",
    label: "WhatsApp",
  },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <aside className="hidden md:fixed md:top-0 md:left-0 md:h-full md:w-64 md:bg-gradient-to-b md:from-[#003973] md:to-[#e5e5be] md:shadow-lg md:flex md:flex-col md:justify-between md:py-10 md:z-50 md:rounded-md">
        <div className="text-center px-4 text-white">
          <img
            src="/Image/nil2.jpg"
            alt="Nilesh Profile"
            className="w-48 h-64 rounded-[100px_100px_100px_100px] mx-auto border-4 border-white shadow-xl object-cover"
          />

          <h1 className="text-xl font-bold mt-4">Nilesh Rathod</h1>
          <p className="text-xs mt-1 uppercase tracking-wide">Portfolio</p>
        </div>
        <div className="flex justify-center gap-4 text-xl text-white mt-6">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`transition duration-300 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <nav className="flex flex-col items-center mt-10 space-y-6 text-sm font-semibold uppercase text-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.name.toLowerCase()}
              smooth
              duration={500}
              offset={-60}
              activeClass="text-yellow-300 font-bold"
              spy
              className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-all"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <button
        onClick={() => setNavOpen(!navOpen)}
        className="fixed top-4 right-4 z-50 text-2xl text-white bg-[#0563bb] p-3 rounded-full shadow-lg transition-transform hover:rotate-90 md:hidden"
        aria-label="Toggle menu"
      >
        {navOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-md text-white z-50 transform transition-transform duration-300 ease-in-out ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="text-center mt-16">
          <img
            src="/Image/nil5.jpg"
            alt="Nilesh Profile"
            className="w-36 h-52 rounded-[80px_80px_80px_80px] mx-auto border-4 border-white shadow-lg object-cover"
          />

          <p className="text-base font-semibold mt-2">Nilesh Rathod</p>
        </div>

        <div className="flex justify-center gap-4 text-xl text-white mt-4 mb-6 px-6">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`transition duration-300 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <nav className="flex flex-col space-y-8 px-6 py-10 text-sm font-semibold text-gray-300 uppercase">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.name.toLowerCase()}
              smooth
              duration={500}
              offset={-20}
              activeClass="text-yellow-300 font-bold"
              spy
              className="flex items-center gap-3 cursor-pointer hover:text-yellow-300 transition"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
