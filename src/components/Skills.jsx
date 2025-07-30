import React from "react";
import { motion } from "framer-motion";

// Icons URLs for skills
const ICONS = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Reactjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  jQuery: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  Axios: "https://raw.githubusercontent.com/remixicon/remixicon/develop/icons/Business/api-2-line.svg",
  JSON: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  NPM: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
};

// Skill categories with image icons
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
      { name: "Tailwind CSS", iconUrl: ICONS.TailwindCSS },
      { name: "NPM", iconUrl: ICONS.NPM },
    ],
  },
  {
    title: "📦 Libraries",
    skills: [
      { name: "Redux", iconUrl: ICONS.Redux },
      { name: "jQuery", iconUrl: ICONS.JQuery },
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

// Soft skills and interests with emoji icons only
const SOFT_SKILLS = [
  { name: "Communication", icon: "💬" },
  { name: "Leadership", icon: "🤝" },
  { name: "Public Speaking", icon: "🎤" },
  { name: "Problem Solving", icon: "🧩" },
];

const INTERESTS = [
  { name: "Web Development", icon: "🕸️" },
  { name: "Content Creation", icon: "✍️" },
  { name: "Public Speaking", icon: "🗣️" },
  { name: "Digital Marketing", icon: "💻" },
];

// Framer Motion container animation to stagger children appearance
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// Individual card animation variants (fade + slide up)
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Main Skills component
export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200"
    >
      <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8 decoration-cyan-400">
        Skills & Interests
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Skill categories */}
        {SKILL_CATEGORIES.map(({ title, skills }) => (
          <UnifiedCard key={title} title={title} skills={skills} />
        ))}

        {/* Soft Skills and Interests */}
        <UnifiedCard title="💡 Soft Skills" skills={SOFT_SKILLS} />
        <UnifiedCard title="🎯 Interests" skills={INTERESTS} />
      </motion.div>
    </section>
  );
}

// Unified Card component for all categories
function UnifiedCard({ title, skills }) {
  // Detect if skills have image icons or emoji icons
  const skillsHaveImageIcons = skills[0]?.iconUrl !== undefined;

  return (
    <motion.article
      className="rounded-xl p-6 flex flex-col items-center cursor-pointer
        bg-transparent border border-cyan-600 border-opacity-30
        transition-shadow duration-300 ease-in-out
        backdrop-blur-lg
        focus:outline-none focus:ring-2 focus:ring-cyan-400"
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px 8px rgba(56,189,248,0.8)" }}
      whileTap={{ scale: 0.97, boxShadow: "0 0 30px 10px rgba(56,189,248,0.9)" }}
      tabIndex={0}
      role="region"
      aria-label={title}
    >
      <h3 className="text-xl text-cyan-300 font-semibold mb-6">{title}</h3>

      <div
        className={
          "w-full gap-6 " +
          (skillsHaveImageIcons ? "grid grid-cols-2" : "flex flex-wrap justify-center gap-4")
        }
      >
        {skills.map(({ name, iconUrl, icon }) =>
          skillsHaveImageIcons ? (
            <motion.button
              key={name}
              className="flex items-center gap-3 p-3 rounded-lg bg-transparent border border-cyan-700 bg-opacity-20 text-cyan-300 font-semibold
                cursor-pointer select-none
                focus:outline-none focus:ring-2 focus:ring-cyan-400
                transition-shadow"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px 6px rgba(56,189,248,0.9)" }}
              whileTap={{ scale: 0.95, boxShadow: "0 0 20px 10px rgba(56,189,248,1)" }}
              aria-label={name}
              tabIndex={0}
            >
              <img
                src={iconUrl}
                alt={`${name} icon`}
                className="w-10 h-10 rounded-full object-contain"
                draggable={false}
                loading="lazy"
              />
              {name}
            </motion.button>
          ) : (
            <motion.span
              key={name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-cyan-600 text-cyan-400 font-semibold text-sm cursor-default select-none
                focus:outline-none focus:ring-2 focus:ring-cyan-400"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px 6px rgba(56,189,248,0.9)" }}
              whileTap={{ scale: 0.95, boxShadow: "0 0 20px 7px rgba(56,189,248,1)" }}
              tabIndex={0}
              role="button"
              aria-label={name}
              title={name}
            >
              <span className="text-xl">{icon}</span> {name}
            </motion.span>
          )
        )}
      </div>
    </motion.article>
  );
}
