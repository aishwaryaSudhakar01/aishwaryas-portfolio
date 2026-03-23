import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface WorkItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

const workItems: WorkItem[] = [
  {
    company: "Uber",
    role: "Associate Operations Manager",
    period: "Oct 2024 – Apr 2026",
    description:
      "Managed city-scale shuttle networks for large corporations. Sat between product and sales — configuring the product for each client and recognising the right solution for their needs. Drove operational efficiency across multiple accounts.",
  },
  {
    company: "Ernst & Young",
    role: "Intern & Associate Data Science Consultant",
    period: "Jan 2024 – Oct 2024",
    description:
      "Built data pipelines and analytical models for client engagements. Worked across teams to translate business problems into data-driven solutions using Python, SQL, and Power BI.",
  },
  {
    company: "Convin.ai",
    role: "Data Analyst Intern",
    period: "Jun 2023 – Nov 2023",
    description:
      "Analysed conversation intelligence data to surface actionable insights. Built dashboards and automated reporting workflows to support the product and sales teams.",
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
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
            className="border-b border-border hover:border-primary transition-colors duration-300"
          >
            <button
              onClick={() =>
                setExpanded(expanded === item.company ? null : item.company)
              }
              className="group w-full flex flex-col sm:flex-row sm:items-center justify-between py-5 text-left cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 hover-editorial">
                    {item.company}
                  </span>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2 sm:mt-0 ml-10 sm:ml-0">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                    expanded === item.company ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            <AnimatePresence>
              {expanded === item.company && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed pb-5 pl-10 sm:pl-14 max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
