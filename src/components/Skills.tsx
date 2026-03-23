import { motion } from "framer-motion";

const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Advanced Excel / Google Sheets",
];

const Skills = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    className="mt-24 sm:mt-32"
  >
    <div className="flex items-center justify-between mb-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
          Expertise
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black">
          Skills
        </h2>
      </div>
      <div className="editorial-line hidden sm:block" />
    </div>

    <div className="border-t border-border">
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
          className="group flex items-center py-4 border-b border-border hover:border-primary transition-colors duration-300 cursor-default"
        >
          <span className="font-mono text-xs text-muted-foreground mr-4">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 hover-editorial">
            {skill}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
