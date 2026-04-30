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
    company: "Uber Technologies",
    companyUrl: "https://www.uber.com/us/en/about/",
    role: "Associate Operations Manager",
    period: "Oct 2024 – Apr 2026",
    bullets: [
      "Worked across Uber's B2B commute product (ETS) and B2C shuttle network, in a role that sat between analytics and operations.",
      "B2B analytics: took client employee commute data, tuned the routing algorithm to fit their geography and shift patterns, and handed back networks that ran leaner than what they were already using.",
      "B2C analytics: identified where latent demand existed in a city to justify launching a shuttle line, working across India and Egypt by digging into pickup and drop-off patterns.",
      "Benchmarked Uber's routing solvers across regions and turned the results into a framework teams now use to pick the right solver per engagement, instead of relying on whoever happened to be running the deal.",
      "Built tooling to remove manual coordination friction: an automated intake platform to replace a spreadsheet-based request process, a Lovable-built tool that pulled three separate hotspot sources into one place, and a QGIS plugin that gave regional planners a single visual interface to edit route data instead of jumping between tools.",
      "Designed the sales enablement process for ETS, replacing deal-by-deal improvisation with a structured flow the team could run repeatably.",
    ],
  },
  {
    company: "Ernst & Young",
    companyUrl: "https://www.ey.com/en_in",
    role: "Data Science Associate Consultant",
    period: "Jan 2024 – Oct 2024",
    bullets: [
      "Designed a real-time surveillance-based crime detection prototype on Streamlit using TensorFlow and OpenCV, incorporating automated notifications and geolocation logic for rapid response workflows.",
      "Built Power BI dashboards for a municipal corporation to track grievance KPIs, monitor resolution status, analyze trends by geography and department, and support data-driven decision-making for civic resource allocation.",
    ],
  },
  {
    company: "Convin.ai",
    companyUrl: "https://convin.ai/",
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
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 hover-editorial hover:underline underline-offset-4"
                  >
                    {item.company}
                  </a>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2 sm:mt-0 ml-10 sm:ml-0">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
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
