import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FileText, X } from "lucide-react";
import letterConvin from "@/assets/letter-convin.png";
import letterEy1 from "@/assets/letter-ey-1.png";
import letterEy2 from "@/assets/letter-ey-2.png";

interface Bullet {
  title: string;
  body: string;
}

interface WorkItem {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  bullets: Bullet[];
  letters?: { src: string; alt: string }[];
}

const workItems: WorkItem[] = [
  {
    company: "Uber Technologies",
    companyUrl: "https://www.uber.com/us/en/about/",
    role: "Associate Operations Manager",
    period: "2024 – 2026",
    bullets: [
      {
        title: "Sales enablement process for Uber ETS",
        body: "Built the sales enablement process for Uber's B2B commute product from scratch: success metrics, delivery timelines, deck format. Cut turnaround from 5 days to 2.5.",
      },
      {
        title: "Pre-sales route optimization",
        body: "Turned prospect commute data into operating route networks across 20+ enterprise engagements. Plans ran on ~25% fewer trips per month than what clients were operating.",
      },
      {
        title: "Solver benchmarking framework",
        body: "Replaced person-dependent solver picks with a benchmarked evaluation framework across Brazil, US&C, and Egypt. Now the basis for pre-sales analysis on 50+ enterprise accounts.",
      },
      {
        title: "Hotspot consolidation platform",
        body: "Built a Lovable platform that pulls Uber data, OpenStreetMap, and client rider locations into one place. Data prep dropped from 24 hours to 3 per request. Feeds routing across 15+ city operations.",
      },
      {
        title: "Automated routing intake",
        body: "Replaced a spreadsheet intake with an automated platform that handles 15 to 20 requests a month. Saved the ops team about 5 hours a week.",
      },
      {
        title: "QGIS plugin for route editing",
        body: "Built a Python plugin giving planners one interface to edit and sync route data. Adopted by 4 regional teams, used on 10+ enterprise accounts.",
      },
    ],
  },
  {
    company: "Ernst & Young",
    companyUrl: "https://www.ey.com/en_in",
    role: "Data Science Associate Consultant",
    period: "2024",
    bullets: [
      {
        title: "Computer vision for incident detection",
        body: "Trained a computer vision model on 1M+ images across 14 incident categories for Pune Municipal Corporation's smart-city POC. Reached 88% accuracy and packaged it into a Streamlit app that routed detected incidents to the nearest patrol vehicle and police station.",
      },
    ],
    letters: [
      { src: letterEy1, alt: "EY experience letter — Trainee" },
      { src: letterEy2, alt: "EY experience letter — Associate Consultant" },
    ],
  },
  {
    company: "Convin.ai",
    companyUrl: "https://convin.ai/",
    role: "Data Analyst Intern",
    period: "2023",
    bullets: [
      {
        title: "Conversational phrase analysis",
        body: "Analyzed call transcripts to surface the phrases and patterns that aligned with a 2.6x conversion lift for a Convin client.",
      },
    ],
    letters: [{ src: letterConvin, alt: "Convin experience letter" }],
  },
];

const renderWithBold = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-20 sm:mt-28"
    >
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3 font-medium">
          Career
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Work Experience
        </h2>
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
              <div>
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-semibold text-base text-foreground group-hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  {item.company}
                </a>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {item.role}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <span className="text-xs text-muted-foreground">
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
                  <div className="space-y-4 pb-6 max-w-2xl">
                    <ul className="space-y-4">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                          <span className="text-primary mt-1.5 shrink-0">▸</span>
                          <span>
                            <span className="font-semibold text-foreground block mb-0.5">
                              {b.title}
                            </span>
                            {renderWithBold(b.body)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {item.letters && item.letters.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-3">
                        {item.letters.map((l, k) => (
                          <button
                            key={k}
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightbox(l);
                            }}
                            className="block border border-border hover:border-primary transition-colors cursor-zoom-in"
                            aria-label={l.alt}
                          >
                            <img
                              src={l.src}
                              alt={l.alt}
                              className="h-32 w-auto object-contain bg-white"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain shadow-2xl cursor-default bg-white"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WorkExperience;
