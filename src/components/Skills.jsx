import React from "react";
import { motion } from "framer-motion";

// Icons CDN links
const ICONS = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Reactjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Axios: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
  JSON: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  NPM: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  jQuery: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg",
  Tailwind: "https://unpkg.com/simple-icons@v9/icons/tailwindcss.svg",
};

// Skill categories (with icons)
const SKILL_CATEGORIES = [
  {
    title: "💻 Programming Languages",
    skills: [
      { name: "Java", iconUrl: ICONS.Java },
      { name: "Python", iconUrl: ICONS.Python },
      { name: "C", iconUrl: ICONS.C },
      { name: "MySQL", iconUrl: ICONS.MySQL },
    ],
  },
  {
    title: "🌐 Web Development",
    skills: [
      { name: "HTML", iconUrl: ICONS.HTML },
      { name: "CSS", iconUrl: ICONS.CSS },
      { name: "JavaScript", iconUrl: ICONS.JavaScript },
      { name: "React.js", iconUrl: ICONS.Reactjs },
      { name: "Tailwind CSS", iconUrl: ICONS.Tailwind },
      { name: "NPM", iconUrl: ICONS.NPM },
    ],
  },
  {
    title: "📦 Libraries",
    skills: [
      { name: "Redux", iconUrl: ICONS.Redux },
      { name: "jQuery", iconUrl: ICONS.jQuery },
      { name: "Axios", iconUrl: ICONS.Axios },
      { name: "JSON", iconUrl: ICONS.JSON },
    ],
  },
  {
    title: "🛠️ Tools",
    skills: [
      { name: "Git & GitHub", iconUrl: ICONS.GitHub },
      { name: "Postman", iconUrl: ICONS.Postman },
    ],
  },
];

// Soft skills (emoji only)
const SOFT_SKILLS = [
  { name: "Communication", icon: "💬" },
  { name: "Leadership", icon: "🤝" },
  { name: "Public Speaking", icon: "🎤" },
  { name: "Problem Solving", icon: "🧩" },
];

// Personal interests (emoji only)
const INTERESTS = [
  { name: "Web Development", icon: "🕸️" },
  { name: "Content Creation", icon: "✍️" },
  { name: "Public Speaking", icon: "🗣️" },
  { name: "Digital Marketing", icon: "💻" },
];

// Animation container for cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

// Animation for each card
const cardVariants = {
  hidden: { rotateX: 90, opacity: 0 },
  visible: {
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-14 underline decoration-cyan-400 underline-offset-8">
        Skills & Interests
      </h2>

      {/* Intro paragraph */}
      <p className="italic text-gray-300 leading-relaxed text-center mb-10">
        I bring a perfect mix of design aesthetics and development logic. I care deeply about clean code,
        fast load times, responsive layouts, and seamless user experiences. With a curious mind and solid understanding of modern tech,
        I love building digital products that shine.
      </p>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Technical Skills */}
        {SKILL_CATEGORIES.map((section) => (
          <SkillCard key={section.title} title={section.title} skills={section.skills} />
        ))}

        {/* Soft Skills & Interests */}
        <SkillCard title="💡 Soft Skills" skills={SOFT_SKILLS} />
        <SkillCard title="🎯 Interests" skills={INTERESTS} />
      </motion.div>

      {/* Custom bounce + glow styles */}
      <style>{`
        @keyframes bounceIcons {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .skill-icon-bounce {
          animation: bounceIcons 2.5s infinite ease-in-out;
        }

        @media (hover: hover) {
          .hover\\:shadow-cyan-glow:hover {
            box-shadow: 0 0 40px 12px rgba(0, 255, 255, 0.7);
          }
        }
      `}</style>
    </section>
  );
}

// SkillCard Component
function SkillCard({ title, skills }) {
  // Check if this category uses images/icons or emojis
  const hasIconUrl = skills[0]?.iconUrl;

  return (
    <motion.div
      variants={cardVariants}
      whileTap={{ scale: 1.05 }} // Touch effect on mobile
      className="rounded-xl p-6 bg-gray-800/50 border border-cyan-600 shadow-[0_4px_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)] transition-all backdrop-blur-md"
    >
      {/* Card Title */}
      <h3 className="text-xl font-semibold text-cyan-300 mb-6 text-center">{title}</h3>

      {/* Skills grid or badges */}
      <div className={hasIconUrl ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "flex flex-wrap justify-center gap-3"}>
        {skills.map((skill) =>
          hasIconUrl ? (
            // Technical Skill with icon
            <motion.div
              whileHover={{ scale: 1.08 }}
              key={skill.name}
              className="flex items-center gap-3 p-2 rounded-md bg-gray-700/40 border border-cyan-600 text-cyan-200 font-medium skill-icon-bounce hover:shadow-cyan-glow"
            >
              <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8 object-contain" />
              <span>{skill.name}</span>
            </motion.div>
          ) : (
            // Soft skill or interest badge
            <motion.span
              whileHover={{ scale: 1.1 }}
              key={skill.name}
              className="px-4 py-2 rounded-full border border-cyan-600 bg-gray-700/40 text-cyan-300 font-semibold text-sm skill-icon-bounce hover:shadow-cyan-glow"
            >
              <span className="mr-2">{skill.icon}</span> {skill.name}
            </motion.span>
          )
        )}
      </div>
    </motion.div>
  );
}
