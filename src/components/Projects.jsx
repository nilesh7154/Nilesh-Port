import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Footwear App",
      description:
        "Developed a responsive shoe store using React.js, Redux, and Axios. Features include product filtering, shopping cart, and backend integration using JSON Server.",
      tech: ["React.js", "Redux", "Axios", "JSON Server", "HTML5", "CSS3"],
      github: "https://github.com/nilesh7154/E-Commerce-Footwear",
    },
    {
      title: "Travel and Tourism Management System",
      description:
        "A desktop application for managing tour packages, user login, and bookings. Built with Java, NetBeans, and MySQL.",
      tech: ["Java", "NetBeans", "MySQL", "Java(Swing,AWT)"],
      github: "https://github.com/nilesh7154/TTMS",
    },
    {
      title: "Snake Game",
      description:
        "A classic browser-based snake game using HTML5, CSS3, and JavaScript. Includes live scoring, keyboard controls, and smooth gameplay.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/nilesh7154/JS-Game",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and TailwindCSS to showcase projects, skills, and contact details.",
      tech: ["React.js", "Tailwind CSS"],
      github: "https://github.com/nilesh7154/My-Portfolio",
    },
  ];

  return (
    <section
      id="project"
      className="py-24 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-8 tracking-wide text-center underline decoration-[#0563bb] underline-offset-8">
          Projects
        </h2>

        <p className="italic  text-gray-600 mt-1 mb-8">
          Showcasing practical projects built with React, Java, JavaScript, and
          modern tools, highlighting real-world problem-solving and full-stack
          development skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-[#0563bb] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <ul className="text-sm text-gray-500 flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
              >
                <FaGithub className="text-lg" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
