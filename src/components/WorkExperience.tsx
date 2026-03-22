import { motion } from "framer-motion";

interface WorkItem {
  company: string;
  role: string;
  period: string;
}

const workItems: WorkItem[] = [
  { company: "Uber", role: "Associate Operations Manager", period: "Oct 2024 – Apr 2026" },
  { company: "Ernst & Young", role: "Intern & Associate Data Science Consultant", period: "Jan 2024 – Oct 2024" },
  { company: "Convin.ai", role: "Data Analyst Intern", period: "Jun 2023 – Nov 2023" },
];

const WorkExperience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="mt-24 sm:mt-32"
  >
    <div className="flex items-center justify-between mb-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
          Career
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black">
          Work Experience
        </h2>
      </div>
      <div className="editorial-line hidden sm:block" />
    </div>

    <div className="border-t border-border">
      {workItems.map((item, i) => (
        <motion.div
          key={item.company}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
          className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-border hover:border-primary transition-colors duration-300"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <span className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 hover-editorial">
                {item.company}
              </span>
              <p className="text-sm text-muted-foreground mt-0.5">{item.role}</p>
            </div>
          </div>
          <span className="font-mono text-xs text-muted-foreground mt-2 sm:mt-0 ml-10 sm:ml-0">
            {item.period}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default WorkExperience;
