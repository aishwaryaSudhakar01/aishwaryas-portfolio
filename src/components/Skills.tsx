import { motion } from "framer-motion";

const skillCategories = [
  { label: "Languages", items: "Python, R, Java" },
  { label: "Analytics & BI", items: "SQL, Power BI, Tableau" },
  { label: "Automation & Tools", items: "Lovable, Streamlit, Google Sheets Scripting, QGIS, Zapier, n8n" },
];

const Skills = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    className="mt-20 sm:mt-28"
  >
    <div className="text-center mb-10">
      <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3 font-medium">
        Expertise
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Skills
      </h2>
    </div>

    <div className="grid sm:grid-cols-3 gap-4">
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
          className="rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-sm transition-all"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-primary font-medium mb-3">
            {cat.label}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {cat.items}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
