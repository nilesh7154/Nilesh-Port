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
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide underline decoration-cyan-400 underline-offset-8">
          About Me
        </h2>

        {/* Subtitle */}
        <p className="text-center text-cyan-300 mb-12 max-w-xl mx-auto">
          I'm a Computer Science student passionate about building beautiful & performant web applications.
        </p>

        {/* Main Layout: Text + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT: Description Cards */}
          <div className="space-y-6 bg-gray-800/50 backdrop-blur-md border border-cyan-600 rounded-xl p-8 shadow-[0_4px_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)] transition-shadow duration-500 animate-fadeInUp order-2 md:order-1">
            {/* Icon + Line Description Cards */}
            {[
              {
                icon: <FaUserGraduate className="text-cyan-400 text-xl mt-1" />,
                text: `Hi, I'm `,
                highlight: "Nilesh Rathod",
                rest: ", a CSE student specializing in modern front-end and full-stack development.",
              },
              {
                icon: <FaCode className="text-cyan-400 text-xl mt-1" />,
                text: `I love building scalable UIs using React, Tailwind CSS, and JavaScript. I focus on performance, responsiveness, and accessibility.`,
              },
              {
                icon: <FaRocket className="text-cyan-400 text-xl mt-1" />,
                text: `I'm always learning, contributing to open-source, and aiming to deliver elegant solutions to real-world problems.`,
              },
              {
                icon: <FaLightbulb className="text-cyan-400 text-xl mt-1" />,
                text: `I value `,
                highlight: "creativity, collaboration, and curiosity",
                rest: ". I thrive in dynamic environments and enjoy turning ideas into impactful digital solutions.",
              },
              {
                icon: <FaJava className="text-cyan-400 text-xl mt-1" />,
                text: `Recently enhancing my skills in `,
                highlight: "Core Java and OOPs",
                rest: ". Also exploring servlet-based applications and backend integration.",
              },
              {
                icon: <FaBullseye className="text-cyan-400 text-xl mt-1" />,
                text: `My goal is to become a developer who not only writes efficient code but also delivers intuitive, enjoyable user experiences.`,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                {item.icon}
                <p>
                  {item.text}
                  {item.highlight && (
                    <span className="text-cyan-400 font-semibold"> {item.highlight}</span>
                  )}
                  {item.rest}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: Profile Image with glowing gradient on hover/tap + Typing Text */}
          <div className="flex flex-col items-center justify-center text-center animate-fadeInUp order-1 md:order-2">
            {/* Glowing Box with Gradient Animation */}
            <div className="group relative w-72 h-[400px] overflow-hidden rounded-xl border border-cyan-600 shadow-[0_4px_30px_rgba(0,255,255,0.3)] transition-all duration-500 transform hover:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)] active:shadow-[0_0_40px_12px_rgba(0,255,255,0.9)] hover:scale-105 active:scale-105 hover:rotate-1">
              
              {/* Optional gradient glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-pink-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-xl pointer-events-none" />

              {/* Actual image (not blurred) */}
              <img
                src="/Image/nil.jpg"
                alt="Nilesh Rathod"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Typing Role Titles */}
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

            {/* Tagline */}
            <p className="mt-2 text-gray-400 italic text-sm max-w-xs">
              Focused on clean UI, fast performance, and smart code.
            </p>

            {/* Resume Download Button */}
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

      {/* Custom Animations */}
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
