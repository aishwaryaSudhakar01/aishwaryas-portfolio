import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import certGoogle from "@/assets/cert-google-data-analytics.png";
import certBiAnalyst from "@/assets/cert-udemy-bi-analyst.png";
import certPowerBi from "@/assets/cert-udemy-power-bi.png";

interface Certification {
  name: string;
  image?: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    image: certGoogle,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/D4XY96BB2FRD",
  },
  {
    name: "The Business Intelligence Analyst Course 2023",
    image: certBiAnalyst,
    link: "https://www.udemy.com/certificate/UC-b6696336-13c7-46cb-a6f1-ef8a041f54a9/",
  },
  {
    name: "Microsoft Power BI Desktop for Business Intelligence",
    image: certPowerBi,
    link: "https://www.udemy.com/certificate/UC-97d8b1e0-1c4e-42a9-868d-401768212a08/",
  },
  { name: "HackerRank SQL (Advanced)" },
  { name: "Tableau Desktop Specialist" },
];

const Certifications = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0 }}
      className="mt-24 sm:mt-32"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-black">
            Certifications
          </h2>
        </div>
        <div className="editorial-line hidden sm:block" />
      </div>

      <div className="border-t border-border">
        {certifications.map((cert, i) => {
          const hasImage = !!cert.image;
          const isOpen = openIndex === i;

          return (
            <div key={cert.name}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
                className={`group flex items-center py-4 border-b border-border hover:border-primary transition-colors duration-300 ${hasImage ? "cursor-pointer" : "cursor-default"}`}
                onClick={() => hasImage && setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-mono text-xs text-muted-foreground mr-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 hover-editorial flex-1">
                  {cert.name}
                </span>
                {hasImage && (
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                )}
              </motion.div>

              <AnimatePresence>
                {isOpen && cert.image && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-b border-border"
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 sm:p-6"
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full max-w-2xl rounded border border-border hover:border-primary transition-colors duration-300"
                      />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Certifications;
