import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FileText, X } from "lucide-react";
import letterConvin from "@/assets/letter-convin.png";
import letterEy1 from "@/assets/letter-ey-1.png";
import letterEy2 from "@/assets/letter-ey-2.png";

interface WorkItem {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  paragraphs: string[];
  letters?: { src: string; alt: string }[];
}

const workItems: WorkItem[] = [
  {
    company: "Uber Technologies",
    companyUrl: "https://www.uber.com/us/en/about/",
    role: "Associate Operations Manager",
    period: "Oct 2024 – Apr 2026",
    paragraphs: [
      "Worked across Uber's **B2B commute product (ETS)** and **B2C shuttle network**, in a role that sat between **analytics and operations**.",
      "The analytics work was about figuring out where shuttles should run and how routes should be designed. For B2B clients, I'd take their employee commute data, **tune the routing algorithm** to fit their geography and shift patterns, and hand back a network that ran leaner than what they were already using. For B2C, the question was different: where in a city is there enough **latent demand** to put a shuttle line at all? I worked on that across **India and Egypt** by digging into pickup and drop-off patterns. I also **benchmarked the different routing solvers** Uber used across regions and turned that into a **framework teams now use to pick the right one per engagement**, instead of relying on whoever happened to be running the deal.",
      "The tooling work came out of noticing that the slow part of the job was rarely the analysis. It was the manual coordination around it. So I built the things that took that friction out: an **automated intake platform** to replace a spreadsheet-based request process, a **Lovable-built tool that pulled three separate hotspot sources into one place**, and a **QGIS plugin** that gave regional planners a single visual interface to edit route data instead of jumping between tools.",
      "Underneath all of it, I also designed the **sales enablement process for ETS** itself, replacing deal-by-deal improvisation with a **structured flow that the team could actually run repeatably**.",
    ],
  },
  {
    company: "Ernst & Young",
    companyUrl: "https://www.ey.com/en_in",
    role: "Data Science Associate Consultant",
    period: "Jan 2024 – Oct 2024",
    paragraphs: [
      "Worked on a **smart-city proof of concept for the Pune Municipal Corporation**, using **computer vision** to detect civic incidents from street imagery and route each one to the right patrol unit.",
      "My approach was to start with the **detection model** (trained on a large incident image dataset across **fourteen categories**), then make the system feel real to the client by wrapping it in a **Streamlit prototype** that took video input and walked through the full flow from detection to resolution. Alongside it, I designed a **Power BI dashboard** that gave municipal departments a **real-time view of citizen grievances**, replacing the manual Excel reporting they'd been relying on. The impact was less about scale (it stayed at POC) and more about showing what a production version of a system like this could look like.",
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
    paragraphs: [
      "Convin builds **conversation intelligence for sales teams**, so most of my work meant sitting with **call transcript data** and pulling patterns out of it. For one client, I worked through their calls to surface the **specific conversational phrases that tracked with higher conversion**, which gave them something concrete to coach their sales team on instead of generic feedback.",
      "The quieter half of the role was building the pipes. I **automated the team's data preprocessing in SQL and Python**, which turned an inconsistent manual process into something repeatable and gave the analysts back real time to do actual analysis.",
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
                  <div className="space-y-3 pb-5 pl-10 sm:pl-14 max-w-2xl">
                    {item.paragraphs.map((p, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
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
