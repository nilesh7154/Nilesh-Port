import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        bg-gradient-to-t from-black via-gray-900 to-gray-800
        text-gray-400 text-center py-10 px-4 select-none
      "
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Footer Text */}
        <div className="text-sm space-y-1 text-gray-400 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} My-Portfolio. All Rights Reserved.</p>
          <p>
            Designed By{" "}
            <span
              className="text-indigo-500 font-semibold cursor-default"
              aria-label="Designed by Nilesh Rathod"
            >
              ❤️ Nilesh Rathod 🧑‍💻
            </span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
