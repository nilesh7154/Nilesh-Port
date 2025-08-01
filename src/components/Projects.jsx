import { FaGithub } from "react-icons/fa";

export default function Projects() {
  // Projects data with image paths and details
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
      tech: ["HTML5", "CSS3", "JavaScript","Dom Manipulation"],
      github: "https://github.com/nilesh7154/JS-Game",
      image: "/Image/Snakeg.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and TailwindCSS to showcase projects, skills, and contact details.",
      tech: ["React.js", "Tailwind CSS","CSS3","HTML5","React-typed"],
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
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8 tracking-wide text-center underline decoration-cyan-400 underline-offset-8">
          Projects
        </h2>

        {/* Section Description */}
        <p className="italic text-gray-400 mt-1 mb-12 max-w-3xl mx-auto text-center">
          Showcasing practical projects built with React, Java, JavaScript, and modern tools,
          highlighting real-world problem-solving and full-stack development skills.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-gray-800 rounded-xl shadow-[0_4px_20px_rgba(0,255,255,0.3)] p-6 flex flex-col hover:shadow-[0_0_30px_8px_rgba(0,255,255,0.7)] hover:scale-[1.03] transition-transform duration-500  focus-within:scale-[1.03] focus-within:shadow-[0_0_30px_8px_rgba(0,255,255,0.7)] outline-none"
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
            >
              {/* Wrapper for the image to ensure full cover */}
              <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-md mb-4 overflow-hidden shadow-lg">
  <img
    src={project.image}
    alt={`${project.title} dashboard screenshot`}
    className="w-full h-full object-cover"
    loading="lazy"
    draggable={false}
  />
</div>


              {/* Project Title */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

              {/* Technology Tags */}
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-cyan-900 bg-opacity-30 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full select-none"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                aria-label={`View ${project.title} on GitHub`}
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
