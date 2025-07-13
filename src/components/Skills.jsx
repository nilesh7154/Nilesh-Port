export default function Skills() {
  const languages = [
    { name: "HTML", desc: "Semantic HTML, forms, SEO-friendly markup." },
    { name: "CSS", desc: "Flexbox, Grid, animations, responsive design." },
    { name: "JavaScript", desc: "ES6+, DOM, events, async/await, functions." },
    { name: "Java", desc: "OOP, exception handling, file I/O, core concepts." },
    { name: "MySQL", desc: "CRUD, joins, subqueries, indexing." },
  ];

  const frameworks = [
    { name: "React.js", desc: "Component-based architecture, hooks, JSX." },
    { name: "Bootstrap", desc: "Pre-styled responsive UI components." },
    {
      name: "Tailwind CSS",
      desc: "Utility-first CSS framework for custom UIs.",
    },
  ];

  const libraries = [
    {
      name: "Redux",
      desc: "State management for React using actions and reducers.",
    },
    { name: "jQuery", desc: "DOM manipulation and event handling." },
    { name: "Axios", desc: "Promise-based HTTP client for API integration." },
    {
      name: "JSON",
      desc: "Data format for API communication and configuration.",
    },
  ];

  const tools = [
    { name: "Git & GitHub", desc: "Version control and remote collaboration." },
    { name: "Postman", desc: "API testing and development environment." },
    {
      name: "NPM",
      desc: "Package manager for JavaScript libraries and tools.",
    },
  ];

  const softSkills = [
    "Communication",
    "Leadership",
    "Public Speaking",
    "Time Management",
    "Problem Solving",
  ];

  const interests = [
    "Web Development",
    "Content Creation",
    "Public Speaking",
    "Reading",
    "Digital Marketing",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 bg-gradient-to-br from-white via-sky-100 to-[#f5e9ff]"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-black mb-12 tracking-wide text-center underline decoration-[#0563bb] underline-offset-8">
          Skills & Interests
        </h2>

        <p className="italic text-gray-600 mb-12 text-center text-sm md:text-base">
          Skilled in front-end and full-stack development using modern
          frameworks, libraries, and tools. Passionate about clean code,
          communication, and creative learning.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <SkillHoverBlock
            title="💻 Programming Languages"
            skills={languages}
          />
          <SkillHoverBlock title="📚 Frameworks" skills={frameworks} />
          <SkillHoverBlock title="📦 Libraries" skills={libraries} />
          <SkillHoverBlock title="🛠️ Tools & Technologies" skills={tools} />
        </div>

        <SkillGrid title="🤝 Soft Skills" items={softSkills} />

        <SkillGrid title="🎯 Interests" items={interests} />
      </div>
    </section>
  );
}

function SkillHoverBlock({ title, skills }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#7c3aed] mb-3 border-b-2 border-[#7c3aed] inline-block">
        {title}
      </h3>
      <div className="mt-3 grid grid-cols-1 gap-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group bg-white px-3 py-2 rounded-md border border-gray-200 shadow-sm text-center font-medium text-gray-800 hover:shadow transition"
          >
            <div className="text-sm font-semibold text-[#333]">
              {skill.name}
            </div>
            <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillGrid({ title, items }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-[#7c3aed] mb-4 border-b-2 border-[#7c3aed] inline-block">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-sm font-medium">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200 text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
