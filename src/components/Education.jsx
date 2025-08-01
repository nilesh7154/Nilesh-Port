import { motion } from "framer-motion";

export default function Education() {
  // Timeline Data
  const educationData = [
    {
      year: "2022 – 2026",
      degree: "🎓 Bachelor of Engineering",
      Stream: "Computer Science Engg",
      institute: "Shri Jaykumar Rawal Institute Of Technology, Dondaicha",
      board: "KBC North Maharashtra University, Jalgaon",
      score: "CGPA: 8.00 / 10.00",
      side: "left", // Position on timeline
    },
    {
      year: "2025 (Summer)",
      degree: "💼 React Developer Intern Training",
      institute: "Nettech India, Thane",
      board: "Remote",
      location: "Work From Home",
      score: "React, Tailwind, GitHub",
      side: "right",
    },
    {
      year: "2020 – 2022",
      degree: "📚 Higher Secondary Education",
      Stream: "Science",
      institute: "A.G.R.G. Jr. College, Shendurni",
      board: "Maharashtra State Board",
      score: "77.17%",
      side: "left",
    },
    {
      year: "2019 – 2020",
      degree: "🏫 Secondary School Certificate",
      institute: "K.S. Pawar School Varsade, Pachora",
      board: "Maharashtra State Board",
      score: "85.40%",
      side: "right",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 px-4 sm:px-6 py-20"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-14 underline underline-offset-8 decoration-cyan-500 text-white">
        🎓 Education
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical center timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[-60px] bottom-[-60px] w-1 bg-cyan-600 rounded-full z-0" />

        {/* Timeline Items */}
        <div className="relative z-10 space-y-14 sm:space-y-10">
          {educationData.map((edu, index) => {
            const isLeft = edu.side === "left"; // Align item left/right

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative flex flex-col sm:flex-row items-center group"
              >
                {/* Dot marker with animation */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 border-[6px] border-gray-900 rounded-full z-20 animate-pulse-fast" />

                {/* Line extending from center to card */}
                <div
                  className={`absolute top-[1.25rem] sm:top-1/2 h-0.5 w-[calc(50%-20px)] bg-cyan-500 ${
                    isLeft ? "right-1/2" : "left-1/2"
                  }`}
                />

                {/* Education Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }} // Desktop hover effect
                  whileTap={{ scale: 1.05, boxShadow: "0 0 60px rgba(6,182,212,0.6)" }} // Mobile tap glow
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`w-full sm:w-[47%] mt-8 sm:mt-0 px-6 py-5 bg-gray-800/60 border border-cyan-600 backdrop-blur-md rounded-lg 
                    shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)]
                    transition duration-300 ease-in-out transform active:shadow-[0_0_60px_rgba(6,182,212,0.7)]
                    ${isLeft ? "sm:mr-auto text-left" : "sm:ml-auto text-left"}
                  `}
                >
                  {/* Year badge */}
                  <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full inline-block mb-2">
                    {edu.year}
                  </span>

                  {/* Degree or Internship title */}
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>

                  {/* Optional Stream */}
                  {edu.Stream && (
                    <p className="text-md text-gray-300 font-medium">{edu.Stream}</p>
                  )}

                  {/* Institute Name */}
                  <p className="text-cyan-400">{edu.institute}</p>

                  {/* Board / Organization */}
                  <p className="text-lg italic text-sky-400">{edu.board}</p>

                  {/* Score or Tech Skills */}
                  <p className="text-sm text-gray-400">{edu.score}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Custom Pulse Animation for timeline dots */}
      <style>{`
        @keyframes pulse-fast {
          0% { transform: scale(1); opacity: 1; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-pulse-fast {
          animation: pulse-fast 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
