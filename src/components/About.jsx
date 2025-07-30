import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section
      id="about"
      // Section with minimum full screen height, dark gradient background, gray text, and padding
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 px-4 sm:px-6 py-20"
    >
      {/* Section Heading */}
      <h2
        // White bold centered title with underline decoration in cyan
        className="text-4xl font-extrabold text-center mb-12 underline underline-offset-8 decoration-cyan-500 text-white"
      >
        About Me
      </h2>

      {/* Main content grid: 2 columns on md+ screens, gap between, items aligned start */}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        {/* PROFILE PICTURE & BASIC INFO */}
        <div
          // Flex column, center aligned on small screens, left aligned on md+
          // Fade-in animation class, ordering changes for small vs large screens to put image on right
          className="flex flex-col items-center md:items-center text-center md:text-left animate-fadeInUp order-1 md:order-2"
        >
          {/* Profile Picture Button to add focus ring and scale on hover/focus */}
          <button
            className="
              outline-none focus:ring-4 focus:ring-cyan-500
              rounded-lg transition-transform duration-300
              hover:scale-105 focus:scale-105
            "
            aria-label="Profile Picture"
          >
            {/* Profile Image */}
            <img
              src="/Image/Profile.jpg"
              alt="Nilesh Rathod"
              className="w-72 h-[400px] max-w-full object-cover rounded-lg shadow-2xl"
              draggable={false}
            />
          </button>

          {/* Job title below image with cyan color and drop shadow for emphasis */}
          <p className="mt-8 text-2xl font-semibold text-cyan-400 tracking-wide font-serif drop-shadow-md">
            Frontend & Full Stack Developer
          </p>

          {/* Short description in italic gray text, restricted width for better readability, centered */}
          <p className="italic text-gray-400 max-w-xs mx-auto text-center mt-2">
            Passionate CSE student building responsive full-stack web apps with React, Tailwind CSS, and modern tools.
          </p>

          {/* Link to Resume styled as cyan rounded button with hover/focus states */}
          <a
            href="/Image/Nilesh_Rathod_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8 inline-block bg-cyan-600 hover:bg-cyan-700
              text-white font-semibold px-6 py-3 rounded-full
              shadow-lg transition focus:ring-4 focus:ring-indigo-500 outline-none
            "
          >
            📄 View Resume
          </a>
        </div>

        {/* BIO & DETAILS COLUMN */}
        <div className="animate-fadeInUp order-2 md:order-1">
          {/* Introductory paragraph with cyan highlighted name */}
          <p className="text-lg leading-relaxed mb-6">
            I'm <span className="font-semibold text-cyan-400">Nilesh Rathod</span>, a dedicated Computer Science Engineering student with a deep passion for building responsive, accessible, and performant web applications. I specialize in crafting front-end and full stack experiences using React.js, Tailwind CSS, JavaScript, and modern tools.
          </p>

          {/* Additional info paragraph */}
          <p className="text-lg leading-relaxed mb-8">
            I love solving real-world problems, collaborating on open source projects, and continuously expanding my tech stack. My portfolio showcases my commitment to clean UI/UX and best development practices.
          </p>

          {/* EDUCATION CARD */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-cyan-700">
            {/* Education title */}
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              🎓 Education
            </h3>
            {/* Education details */}
            <div className="space-y-1 text-gray-200 text-sm">
              <p className="font-medium">Bachelor of Engineering (Computer Science Engineering)</p>
              <p>KBC North Maharashtra University, Jalgaon</p>
              <p>2022 – Expected 2026</p>
              <p>CGPA: 8.00 / 10.00</p>
            </div>
          </div>

          {/* CONTACT INFORMATION CARDS GRID */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            {/* Location */}
            <li className="bg-gray-800 rounded-md p-4 shadow-md border border-cyan-700 select-text">
              <strong className="text-cyan-400">📍 Location:</strong>
              <br />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jalgaon+Maharashtra+India"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline block mt-1"
              >
                Jalgaon, Maharashtra, India
              </a>
            </li>

            {/* Date of birth */}
            <li className="bg-gray-800 rounded-md p-4 shadow-md border border-cyan-700 select-text">
              <strong className="text-cyan-400">🎂 Date of Birth:</strong>
              <br />
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20030608/20030608&text=Nilesh%20Rathod%20Birthday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline block mt-1"
              >
                8 June 2003
              </a>
            </li>

            {/* Email */}
            <li className="bg-gray-800 rounded-md p-4 shadow-md border border-cyan-700 select-text">
              <strong className="text-cyan-400">📧 Email:</strong>
              <br />
              <a
                href="mailto:rathodnilesh7154@gmail.com"
                className="text-cyan-400 hover:underline block mt-1"
              >
                rathodnilesh7154@gmail.com
              </a>
            </li>

            {/* Phone */}
            <li className="bg-gray-800 rounded-md p-4 shadow-md border border-cyan-700 select-text">
              <strong className="text-cyan-400">📱 Phone:</strong>
              <br />
              <a
                href="tel:+918530019387"
                className="text-cyan-400 hover:underline block mt-1"
              >
                +91 8530019387
              </a>
            </li>

            {/* GitHub */}
            <li className="bg-gray-800 rounded-md p-4 shadow-md border border-cyan-700 flex items-center gap-2 select-text">
              <FontAwesomeIcon icon={faGithub} className="text-cyan-400" />
              <strong>GitHub:</strong>
              <a
                href="https://github.com/nilesh7154"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline ml-1"
              >
                Github🔗
              </a>
            </li>

            {/* LinkedIn */}
            <li className="bg-gray-800 rounded-md p-4 shadow-md border border-cyan-700 flex items-center gap-2 select-text">
              <FontAwesomeIcon icon={faLinkedin} className="text-cyan-400" />
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/rathod-nilesh7154/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline ml-1"
              >
                Linkedin🔗
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Fade-in animation CSS */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </section>
  );
}
