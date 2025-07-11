import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 pt-24 pb-24 bg-gradient-to-b from-white to-gray-100"
    >
      <h2 className="text-4xl font-bold text-black mb-8 tracking-wide text-center underline decoration-[#0563bb] underline-offset-8">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col items-center justify-start text-center mt-10 md:mt-0 animate-fadeInUp order-1 md:order-2">
          <div className="transition-all duration-500 transform hover:rotate-[-1deg] hover:translate-x-1 hover:translate-y-1 hover:shadow-[12px_12px_15px_rgba(0,0,0,0.5)]">
            <img
              src="/Image/Profile.jpg"
              alt="Nilesh Rathod"
              className="w-80 h-[400px] object-cover  shadow-lg"
            />
          </div>

          <p className="mt-6 text-2xl font-semibold text-[#bb05b5] tracking-wide font-serif drop-shadow-md">
            Frontend & Full Stack Developer
          </p>
          <p className="italic text-sm text-gray-600 mt-1">
            Passionate CSE student building responsive full-stack web apps with
            React, Tailwind CSS, and modern tools.
          </p>

          <a
            href="/Image/Nilesh_Rathod_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-[#0563bb] hover:bg-[#044a91] text-white font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300"
          >
            📄 View Resume
          </a>
        </div>

        <div className="text-gray-800 animate-fadeIn md:order-1 order-2">
          <p className="text-base leading-relaxed mb-4">
            I'm <span className="font-semibold">Nilesh Rathod</span>, a
            dedicated Computer Science Engineering student with a deep passion
            for building responsive, accessible, and performant web
            applications. I specialize in crafting front-end and full stack
            experiences using React.js, Tailwind CSS, JavaScript, and modern
            tools.
          </p>
          <p className="text-base leading-relaxed mb-6">
            I love solving real-world problems, collaborating on open source
            projects, and continuously expanding my tech stack. My portfolio
            showcases my commitment to clean UI/UX and best development
            practices.
          </p>

          <div className="bg-white rounded shadow p-4 mb-6">
            <h3 className="text-lg font-bold text-[#0563bb] mb-2">
              🎓 Education
            </h3>
            <div>
              <p className="font-medium">
                Bachelor of Engineering (Computer Science Engineering)
              </p>
              <p className="text-sm text-gray-700">
                KBC North Maharashtra University, Jalgaon
              </p>
              <p className="text-sm text-gray-700">2022 – Expected 2026</p>
              <p className="text-sm text-gray-700">CGPA: 8.00 / 10.00</p>
            </div>
          </div>

          <ul className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <li className="bg-white p-4 rounded shadow">
              <strong className="text-[#0563bb]">📍 Location:</strong>
              <br />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jalgaon+Maharashtra+India"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline block mt-1"
              >
                Jalgaon, Maharashtra, India
              </a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <strong className="text-[#0563bb]">🎂 Date of Birth:</strong>
              <br />
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20030608/20030608&text=Nilesh%20Rathod%20Birthday"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline block mt-1"
              >
                8 June 2003
              </a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <strong className="text-[#0563bb]">📧 Email:</strong>
              <br />
              <a
                href="mailto:rathodnilesh7154@gmail.com"
                className="text-blue-600 hover:underline block mt-1"
              >
                rathodnilesh7154@gmail.com
              </a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <strong className="text-[#0563bb]">📱 Phone:</strong>
              <br />
              <a
                href="tel:+918530019387"
                className="text-blue-600 hover:underline block mt-1"
              >
                +91 8530019387
              </a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <strong className="text-[#0563bb] flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} /> GitHub:
              </strong>
              <a
                href="https://github.com/nilesh7154"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline block mt-1"
              >
                github.com/nilesh7154
              </a>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <strong className="text-[#0563bb] flex items-center gap-2">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn:
              </strong>
              <a
                href="https://www.linkedin.com/in/rathod-nilesh7154/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline block mt-1"
              >
                linkedin.com/in/rathod-nilesh7154
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
