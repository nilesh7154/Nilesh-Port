import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white text-center py-8 mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-4">
        <p className="text-sm font-light tracking-wide font-serif">
          &copy; {new Date().getFullYear()} My-Portfolio. All Rights Reserved.
        </p>
        <p className="text-sm font-light tracking-wide font-serif">
          Designed by ❤️ Nilesh Rathod🧑‍💻
        </p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/nilesh7154"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38bdf8] transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rathod-nilesh7154?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/niluu_.03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E1306C] transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/nilesh.rathod.997408"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1877F2] transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/918530019387"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
         
        </div>
      </div>
    </motion.footer>
  );
}
