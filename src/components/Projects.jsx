import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://picsum.photos/seed/project1/600/400",
    tech: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/seed/project2/600/400",
    tech: ["Vue.js", "Laravel", "MySQL"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://picsum.photos/seed/project3/600/400",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    category: "frontend",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://picsum.photos/seed/project4/600/400",
    tech: ["Python", "React", "OpenAI"],
    category: "backend",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "https://picsum.photos/seed/project5/600/400",
    tech: ["React", "Framer Motion", "CSS"],
    category: "frontend",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Weather Application",
    description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    image: "https://picsum.photos/seed/project6/600/400",
    tech: ["React Native", "TypeScript"],
    category: "mobile",
    github: "#",
    demo: "#",
  },
  {
    id: 7,
    title: "Blog Platform",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit consequuntur magni.",
    image: "https://picsum.photos/seed/project7/600/400",
    tech: ["NestJS", "GraphQL", "React"],
    category: "backend",
    github: "#",
    demo: "#",
  },
  {
    id: 8,
    title: "Music Streaming App",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "https://picsum.photos/seed/project8/600/400",
    tech: ["Vue.js", "Node.js", "Redis"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    id: 9,
    title: "Inventory System",
    description: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.",
    image: "https://picsum.photos/seed/project9/600/400",
    tech: ["Laravel", "Vue.js", "MySQL"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    id: 10,
    title: "Fitness Tracker",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    image: "https://picsum.photos/seed/project10/600/400",
    tech: ["React Native", "Firebase"],
    category: "mobile",
    github: "#",
    demo: "#",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Fullstack" },
  { id: "mobile", label: "Mobile" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Featured Work</h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        className="project-link"
                        aria-label="View on GitHub"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="project-link"
                        aria-label="View Demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
