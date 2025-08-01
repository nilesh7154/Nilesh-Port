import React from "react";
import {
  FaUserGraduate,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaJava,
  FaBullseye,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200 scroll-mt-20"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide underline decoration-cyan-400 underline-offset-8">
          About Me
        </h2>
        <p className="text-center text-cyan-300 mb-12 max-w-xl mx-auto">
          I'm a Computer Science student passionate about building beautiful & performant web applications.
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-6 bg-gray-800/50 backdrop-blur-md border border-cyan-600 rounded-xl p-8 shadow-[0_4px_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)] transition-shadow duration-500 animate-fadeInUp order-2 md:order-1">
            <div className="flex items-start gap-3">
              <FaUserGraduate className="text-cyan-400 text-xl mt-1" />
              <p>
                Hi, I'm <span className="text-cyan-400 font-semibold">Nilesh Rathod</span>, a CSE student specializing in modern front-end and full-stack development.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaCode className="text-cyan-400 text-xl mt-1" />
              <p>
                I love building scalable UIs using React, Tailwind CSS, and JavaScript. I focus on performance, responsiveness, and accessibility.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaRocket className="text-cyan-400 text-xl mt-1" />
              <p>
                I'm always learning, contributing to open-source, and aiming to deliver elegant solutions to real-world problems.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaLightbulb className="text-cyan-400 text-xl mt-1" />
              <p>
                I value <span className="text-cyan-400 font-semibold">creativity</span>,{" "}
                <span className="text-cyan-400 font-semibold">collaboration</span>, and{" "}
                <span className="text-cyan-400 font-semibold">curiosity</span>. I thrive in dynamic environments and enjoy turning ideas into impactful digital solutions.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaJava className="text-cyan-400 text-xl mt-1" />
              <p>
                Recently enhancing my skills in <span className="text-cyan-400 font-semibold">Core Java</span> and{" "}
                <span className="text-cyan-400 font-semibold">Object-Oriented Programming</span>. I'm also exploring{" "}
                <span className="text-cyan-400 font-semibold">servlet-based web applications</span> and backend integration.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaBullseye className="text-cyan-400 text-xl mt-1" />
              <p>
                My goal is to become a developer who not only writes efficient code but also delivers intuitive, enjoyable user experiences.
              </p>
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div className="flex flex-col items-center justify-center text-center animate-fadeInUp order-1 md:order-2">
            <div className="group relative w-72 h-[400px] overflow-hidden rounded-xl border border-cyan-600 shadow-[0_4px_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)] transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              {/* Glowing layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-pink-500 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-xl" />
              {/* Profile Image */}
              <img
                src="/Image/Profile.jpg"
                alt="Nilesh Rathod"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Typed Text */}
            <h2 className="text-xl md:text-2xl font-medium drop-shadow-[1px_1px_5px_rgba(0,0,0,0.7)] mt-6">
              <span className="inline-block relative min-w-[280px]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.6)] animate-gradient">
                  <ReactTyped
                    strings={[
                      "Full Stack Web Developer",
                      "React.js Developer",
                      "Frontend Enthusiast",
                    ]}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                  />
                </span>
              </span>
            </h2>

            <p className="mt-2 text-gray-400 italic text-sm max-w-xs">
              Focused on clean UI, fast performance, and smart code.
            </p>

            <a
              href="/Image/Nilesh_Rathod_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-cyan-800 hover:bg-cyan-900 text-white font-medium px-6 py-3 rounded-md shadow-lg transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-cyan-400"
            >
              📄 View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
