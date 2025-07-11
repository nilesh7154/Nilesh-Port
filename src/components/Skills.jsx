// src/components/Skills.jsx
export default function Skills() {
  const technicalSkills = [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 92 },
    { name: "JavaScript", percent: 90 },
    { name: "React.js", percent: 88 },
    { name: "Redux", percent: 85 },
    { name: "jQuery", percent: 82 },
    { name: "Java", percent: 80 },
    { name: "SQL / MySQL", percent: 84 },
    { name: "Axios / JSON", percent: 83 },
    { name: "Git & GitHub", percent: 90 },
    { name: "Bootstrap / Tailwind", percent: 86 },
    { name: "Postman / NPM", percent: 82 },
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
        <h2 className="text-4xl font-bold text-black mb-8 tracking-wide text-center underline decoration-[#0563bb] underline-offset-8">
          Skills & Interest
        </h2>

        <p className="italic text-gray-600 mt-1 mb-6 text-center">
          Skilled in web development with expertise in React, JavaScript, Java,
          SQL, and modern tools, complemented by strong soft skills and a
          passion for tech, communication, and creative learning.
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#7c3aed] mb-6 border-b-2 border-[#7c3aed] inline-block">
            💻 Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-sm font-medium">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200 hover:shadow-md transition text-center relative"
              >
                <span>{skill.name}</span>
                <span className="absolute top-2 right-3 text-xs text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#7c3aed] mb-6 border-b-2 border-[#7c3aed] inline-block">
            🤝 Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-sm font-medium">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200 hover:shadow-md transition text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#7c3aed] mb-6 border-b-2 border-[#7c3aed] inline-block">
            🎯 Interests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-sm font-medium">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200 hover:shadow-md transition text-center"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
