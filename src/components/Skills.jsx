import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiPhp,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiLaravel,
  SiNestjs,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiFigma,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiAmazon,
  SiBootstrap,
  SiVite,
} from "react-icons/si";
import "./Skills.css";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              custom={catIndex}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <skill.icon
                      className="skill-icon"
                      style={{ color: skill.color }}
                    />
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
