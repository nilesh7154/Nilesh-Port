import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    // Using Framer Motion to add fade-in and slide-up animation on mount
    <motion.footer
      initial={{ opacity: 0, y: 40 }}        // Start invisible and shifted down
      animate={{ opacity: 1, y: 0 }}         // Animate to visible and original position
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        bg-gradient-to-t from-black via-gray-900 to-gray-800  // Dark gradient background top to bottom
        text-gray-400                                        // Light gray text
        text-center py-8 select-none                         // Center align text with vertical padding and disable text selection
      "
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Container for text content */}
        <div className="font-serif text-sm md:text-base space-y-2">
          {/* Copy right and rights reserved */}
          <p className="font-light tracking-wide text-gray-400">
            &copy; {new Date().getFullYear()} My-Portfolio. All Rights Reserved.
          </p>

          {/* Designer credit line with indigo accent */}
          <p className="font-light tracking-wide text-gray-400">
            Designed with{" "}
            <span 
              className="text-indigo-500 font-semibold cursor-default" 
              aria-label="Designed by Nilesh Rathod"
              >
              ❤️ Nilesh Rathod 🧑‍💻
            </span>
          </p>

          {/* Social Media Links Section */}
          <nav
            aria-label="Social media"
            className="flex justify-center space-x-6 text-2xl"
          >
            {/* Array of social info objects mapped to anchor tags */}
            {[
              {
                href: "https://github.com/nilesh7154",
                label: "GitHub",
                Icon: FaGithub,
                hoverColor: "hover:text-cyan-400",
                focusRing: "focus:ring-cyan-400",
              },
              {
                href: "https://www.linkedin.com/in/rathod-nilesh7154",
                label: "LinkedIn",
                Icon: FaLinkedin,
                hoverColor: "hover:text-indigo-600",
                focusRing: "focus:ring-indigo-600",
              },
              {
                href: "https://www.instagram.com/niluu_.03",
                label: "Instagram",
                Icon: FaInstagram,
                hoverColor: "hover:text-pink-500",
                focusRing: "focus:ring-pink-500",
              },
              {
                href: "https://www.facebook.com/nilesh.rathod.997408",
                label: "Facebook",
                Icon: FaFacebook,
                hoverColor: "hover:text-blue-600",
                focusRing: "focus:ring-blue-600",
              },
              {
                href: "https://wa.me/918530019387",
                label: "WhatsApp",
                Icon: FaWhatsapp,
                hoverColor: "hover:text-green-500",
                focusRing: "focus:ring-green-500",
              },
            ].map(({ href, label, Icon, hoverColor, focusRing }) => (
              <a
                key={label}                // Unique key for React list
                href={href}                // Social profile URL
                target="_blank"            // Open in new tab
                rel="noopener noreferrer" // Security best practice
                aria-label={label}         // Accessibility label
                className={`
                  ${hoverColor} 
                  transition transform hover:scale-110 
                  focus:scale-110 focus:outline-none focus:ring-2 ${focusRing} rounded
                `}
                tabIndex={0}               // Make keyboard-focusable
              >
                <Icon />                   {/* Icon component */}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}
