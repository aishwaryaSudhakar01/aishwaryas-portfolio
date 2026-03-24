import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface WorkItem {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  bullets: string[];
}

const workItems: WorkItem[] = [
  {
    company: "Uber",
    role: "Associate Operations Manager",
    period: "Oct 2024 – Apr 2026",
    bullets: [
      "Served as the subject matter expert for routing algorithms in Uber's enterprise commute services, translating client travel requirements into effective solver constraints. Evaluated and recommended optimized routing solutions to enhance efficiency, meet client needs, and improve service delivery and client satisfaction.",
      "Designed and scaled citywide B2C Shuttle networks using routing and scheduling algorithms on internal demand data and travel time models to solve large-scale home-to-work and airport-to-transit commute problems.",
    ],
  },
  {
    company: "Ernst & Young",
    role: "Intern & Associate Data Science Consultant",
    period: "Jan 2024 – Oct 2024",
    bullets: [
      "Designed a real-time surveillance-based crime detection prototype on Streamlit using TensorFlow and OpenCV, incorporating automated notifications and geolocation logic for rapid response workflows.",
      "Built Power BI dashboards for a municipal corporation to track grievance KPIs, monitor resolution status, analyze trends by geography and department, and support data-driven decision-making for civic resource allocation.",
    ],
  },
  {
    company: "Convin.ai",
    role: "Data Analyst Intern",
    period: "Jun 2023 – Nov 2023",
    bullets: [
      "Reviewed customer care call transcriptions to understand customer behavior patterns, which helped improve conversion rates by ~2.6× and boost sales efficiency by 42.5%.",
      "Simplified data preprocessing workflows using SQL and Python, cutting manual effort by 50%.",
    ],
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
                  <ul className="space-y-3 pb-5 pl-10 sm:pl-14 max-w-2xl">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
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
