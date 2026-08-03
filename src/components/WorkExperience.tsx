import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronDown, ExternalLink } from "lucide-react";
import letterConvin from "@/assets/letter-convin.png";
import letterEy1 from "@/assets/letter-ey-1.png";
import letterEy2 from "@/assets/letter-ey-2.png";
import letterUber from "@/assets/letter-uber.png";

interface Bullet {
  title: string;
  points: string[];
}

interface WorkItem {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  description: string;
  bullets: Bullet[];
  letters?: { src: string; alt: string }[];
}

const workItems: WorkItem[] = [
  {
    company: "Uber Technologies",
    companyUrl: "https://www.uber.com/us/en/about/",
    role: "Operations Associate",
    period: "Oct 2024 to Apr 2026",
    description:
      "Getting people to work, literally. City-scale shuttle networks for big companies, sitting between the product and the people buying it.",
    bullets: [
      {
        title: "Built the tools that replaced the manual work",
        points: [
          "Hotspot platform that pulled three data sources into one screen with a demand heatmap, cut route data prep from a full day to three hours, now the routing input for 15+ cities",
          "Route-editing tool in QGIS, picked up by four regional teams across 10+ enterprise accounts",
          "Self-service intake form on Lovable, handles 15 to 20 requests a month, saves the team five hours a week",
        ],
      },
      {
        title: "Set up the ETS sales pipeline from nothing",
        points: [
          "Took Employee Transport Service from raw code to a working pipeline sales could actually use",
          "Wrote the script that formatted the output, set the metrics and timelines",
          "Proposal turnaround dropped from five days to two and a half",
        ],
      },
      {
        title: "Made the routing cheaper to pitch",
        points: [
          "Tuned route plans for 20+ prospective clients, projected to run on 25% fewer trips a month",
          "Benchmarked five routing engines across three countries, built the analysis the team uses to pick one per deal, now backing pre-sales for 50+ accounts",
        ],
      },
    ],
    letters: [{ src: letterUber, alt: "Uber experience letter" }],
  },
  {
    company: "Ernst & Young",
    companyUrl: "https://www.ey.com/en_in",
    role: "Data Science Associate Consultant",
    period: "Jan 2024 to Oct 2024",
    description: "Building the data tools a city government didn't have yet.",
    bullets: [
      {
        title: "Turned Excel reports into a live dashboard",
        points: [
          "Pune's government collected citizen complaints across 20 departments but had no way to see patterns",
          "Built a Power BI dashboard that replaced the manual Excel reporting, so they could spot where requests piled up and move resources there",
        ],
      },
      {
        title: "Taught a camera to spot trouble",
        points: [
          "Built a computer vision model trained on over a million images that flags 14 kinds of incidents at 88% accuracy",
          "Prototyped an app that dispatched the nearest patrol vehicle the moment an incident was detected",
        ],
      },
    ],
    letters: [
      { src: letterEy1, alt: "EY experience letter, Trainee" },
      { src: letterEy2, alt: "EY experience letter, Associate Consultant" },
    ],
  },
  {
    company: "Convin.ai",
    companyUrl: "https://convin.ai/",
    role: "Data Analyst Intern",
    period: "Jun 2023 to Nov 2023",
    description: "First real taste of finding signal in messy data.",
    bullets: [
      {
        title: "Found what actually closed deals",
        points: [
          "Dug through sales call transcripts for the phrases that showed up when deals converted",
          "Calls using them closed 2.6x more often",
        ],
      },
      {
        title: "Brought code to a team that ran on spreadsheets",
        points: [
          "Only technical person on the team, so I introduced SQL and Python where everything was manual",
          "Cut the busywork in half, saved myself about 10 hours a week",
        ],
      },
    ],
    letters: [{ src: letterConvin, alt: "Convin experience letter" }],
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<string | null>(workItems[0].company);

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      className="mt-12 sm:mt-16"
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

      <div className="relative pl-12 sm:pl-16">
        {/* Vertical timeline line — gradient, fades at top and bottom */}
        <div
          className="absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-primary/40 to-transparent"
          aria-hidden="true"
        />

        {workItems.map((item, i) => {
          const isOpen = expanded === item.company;
          return (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative pb-10 last:pb-0"
          >
            {/* Timeline marker — open ring the spine passes through */}
            <div
              className="absolute -left-12 sm:-left-16 top-5 w-[34px] sm:w-[50px] flex items-center justify-center"
              aria-hidden="true"
            >
              {isOpen && (
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/20"
                />
              )}
              <motion.span
                whileHover={{ scale: 1.15 }}
                className={`relative h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-2 transition-all duration-300 ${
                  isOpen
                    ? "border-primary bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                    : "border-primary bg-primary/70 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
                }`}
              />
            </div>


            <div className="relative">
              <button
                onClick={() =>
                  setExpanded(expanded === item.company ? null : item.company)
                }
                aria-expanded={isOpen}
                className={`group w-full flex items-start justify-between gap-4 py-3 pl-4 sm:pl-5 pr-12 sm:pr-14 text-left cursor-pointer rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 bg-primary/[0.03] shadow-sm"
                    : "border-transparent hover:border-border hover:bg-card/40"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <span className="block text-xs text-muted-foreground mb-1">
                    {item.period}
                  </span>
                  <span className="block font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.company}
                  </span>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4 mt-3 max-w-2xl">
                    {item.description}
                  </p>
                </div>
                <ChevronDown
                  className={`shrink-0 w-4 h-4 mt-2 text-primary transition-all duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visit ${item.company} website`}
                className="absolute top-3 right-3 p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>


            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-4 pb-2 px-4 sm:px-5 max-w-2xl">
                    <ul className="space-y-4">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                          <span className="text-primary mt-1.5 shrink-0">▸</span>
                          <div>
                            <span className="font-display font-bold text-foreground block mb-1.5">
                              {b.title}
                            </span>
                            <ul className="space-y-1.5">
                              {b.points.map((p, k) => (
                                <li key={k} className="flex gap-2">
                                  <span className="text-primary/60 shrink-0">–</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
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
          );
        })}
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
