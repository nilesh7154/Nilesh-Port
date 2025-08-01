import { FaGithub } from "react-icons/fa";

export default function Projects() {
  // Projects data array – contains all necessary details for each project
  const projects = [
    {
      title: "E-Commerce Footwear App",
      description:
        "Developed a responsive shoe store using React.js, Redux, and Axios. Features include product filtering, shopping cart, and backend integration using JSON Server.",
      tech: ["React.js", "Redux", "Axios", "JSON Server", "HTML5", "CSS3"],
      github: "https://github.com/nilesh7154/E-Commerce-Footwear",
      image: "/Image/Shoeweb.png",
    },
    {
      title: "Travel and Tourism Management System",
      description:
        "A desktop application for managing tour packages, user login, and bookings. Built with Java, NetBeans, and MySQL.",
      tech: ["Java", "NetBeans", "MySQL", "Java(Swing,AWT)"],
      github: "https://github.com/nilesh7154/TTMS",
      image: "/Image/TTMS.png",
    },
    {
      title: "Snake Game",
      description:
        "A classic browser-based snake game using HTML5, CSS3, and JavaScript. Includes live scoring, keyboard controls, and smooth gameplay.",
      tech: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      github: "https://github.com/nilesh7154/JS-Game",
      image: "/Image/Snakeg.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and TailwindCSS to showcase projects, skills, and contact details.",
      tech: ["React.js", "Tailwind CSS", "React-Typed", "CSS3", "HTML5"],
      github: "https://github.com/nilesh7154/Nilesh-Port",
      image: "/Image/port.png",
    },
  ];

  return (
    <section
      id="project"
      className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-8 tracking-wide text-center underline decoration-cyan-400 underline-offset-8">
          Projects
        </h2>

        {/* Subtext / Intro */}
        <p className="italic text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Showcasing practical projects built with React, Java, JavaScript, and modern tools,
          highlighting real-world problem-solving and full-stack development skills.
        </p>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-cyan-600
              shadow-[0_4px_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)] 
              focus-within:shadow-[0_0_40px_12px_rgba(0,255,255,0.7)] focus-within:scale-[1.03]
              transition-all duration-500 transform hover:scale-[1.03] touch-manipulation"
              tabIndex={0}
            >
              {/* Project Image */}
              <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-md mb-4 shadow-lg">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-center rounded-md"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-cyan-900/30 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full select-none"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-200 font-medium transition-colors"
              >
                <FaGithub className="text-lg" />
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
