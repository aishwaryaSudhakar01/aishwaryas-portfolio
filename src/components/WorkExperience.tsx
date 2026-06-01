import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronDown, ExternalLink } from "lucide-react";
import letterConvin from "@/assets/letter-convin.png";
import letterEy1 from "@/assets/letter-ey-1.png";
import letterEy2 from "@/assets/letter-ey-2.png";
import letterUber from "@/assets/letter-uber.png";

interface Bullet {
  title: string;
  body: string;
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
    period: "Oct 2024 – Apr 2026",
    description:
      "Getting people to work, literally. City-scale shuttle networks for big companies, sitting between the product and the people buying it.",
    bullets: [
      {
        title: "Helped close deals on the commute product.",
        body: "Shaped how Uber pitched its B2B commute product, the success metrics, the timelines, the standard deck, and tuned routing for prospects so their plans ran on ~25% fewer trips a month. Cut deal turnaround from 5 days to 2.5, across 20+ engagements.",
      },
      {
        title: "Made solver choice less of a guessing game.",
        body: "Benchmarked five routing solvers across Brazil, the US, and Egypt and built the framework Uber's teams now use to pick one per deal. It's backed pre-sales work for 50+ accounts.",
      },
      {
        title: "Retired a few spreadsheets.",
        body: "Built internal tools that replaced manual prep and tracking, a routing-data platform that took prep from a day to three hours, and an intake system that handed the ops team back ~5 hours a week.",
      },
    ],
    letters: [{ src: letterUber, alt: "Uber experience letter" }],
  },
  {
    company: "Ernst & Young",
    companyUrl: "https://www.ey.com/en_in",
    role: "Data Science Associate Consultant",
    period: "Jan 2024 – Oct 2024",
    description: "Helping a city government see its own data in real time.",
    bullets: [
      {
        title: "Replaced manual reporting with a live dashboard.",
        body: "Built a Power BI dashboard for Pune Municipal Corporation that swapped Excel reports for a real-time view of citizen grievances across ~20 departments.",
      },
      {
        title: "Taught a computer to spot civic problems.",
        body: "Trained a computer vision model on 1M+ images to flag 14 kinds of incidents at 88% accuracy, then prototyped an app that routed each one to the nearest patrol vehicle.",
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
    period: "Jun 2023 – Nov 2023",
    description: "First real taste of finding signal in messy data.",
    bullets: [
      {
        title: "Dug through sales calls for what worked.",
        body: "Found the conversational patterns tied to a 2.6x conversion lift for a client, and automated the data prep around it to save ~10 hours a week.",
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
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
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
            className="relative pb-10 last:pb-0"
          >
            {/* Timeline marker — dot with pulsing ring when open */}
            <div
              className="absolute -left-12 sm:-left-16 top-5 flex items-center justify-center"
              aria-hidden="true"
            >
              {isOpen && (
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/30"
                />
              )}
              <motion.span
                whileHover={{ scale: 1.2 }}
                className={`relative h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border-2 transition-all duration-300 ${
                  isOpen
                    ? "bg-primary border-primary shadow-lg shadow-primary/40"
                    : "bg-background border-border"
                }`}
              />
            </div>

            <button
              onClick={() =>
                setExpanded(expanded === item.company ? null : item.company)
              }
              aria-expanded={isOpen}
              className={`group w-full flex items-start justify-between gap-4 py-3 px-4 sm:px-5 text-left cursor-pointer rounded-xl border transition-all duration-300 ${
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
                className={`shrink-0 w-4 h-4 mt-2 text-muted-foreground transition-all duration-300 ${
                  isOpen ? "rotate-180 text-primary" : "group-hover:text-primary"
                }`}
              />
            </button>


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
                    <ul className="space-y-3">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                          <span className="text-primary mt-1.5 shrink-0">▸</span>
                          <span>
                            <span className="font-display font-bold text-foreground block mb-0.5">
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
