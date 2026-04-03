import { motion } from "framer-motion";

const skillCategories = [
  { label: "Languages", items: "Python, SQL, R, Java" },
  { label: "Analytics & BI", items: "Power BI, Tableau, Advanced Google Sheets/Excel" },
  { label: "Automation & Tools", items: "Lovable, Google Maps APIs, Google Sheets Scripting, QGIS, Streamlit" },
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
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
          className="group flex flex-col sm:flex-row sm:items-center py-4 border-b border-border hover:border-primary transition-colors duration-300 cursor-default gap-1 sm:gap-4"
        >
          <span className="font-mono text-xs text-muted-foreground shrink-0 mr-4 hidden sm:inline">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 shrink-0">
            {cat.label}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {cat.items}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
