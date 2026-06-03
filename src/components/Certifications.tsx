import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const education = [
  {
    school: "University of California, Los Angeles",
    degree: "MSc, Business Analytics",
    dates: "2026–2027 (Incoming)",
  },
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech, Electronics & Communication Engineering",
    dates: "2020–2024",
  },
];

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mt-24 sm:mt-32"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
            Education
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-black">
            Education
          </h2>
        </div>
        <div className="editorial-line hidden sm:block" />
      </div>

      <div className="border-t border-border">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group py-5 border-b border-border hover:border-primary transition-colors duration-300 cursor-default flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
          >
            <div className="flex-1">
              <p className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {edu.school}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                {edu.degree}
              </p>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground shrink-0">
              {edu.dates}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground shrink-0">
          Certification
        </p>
        <a
          href="https://www.coursera.org/account/accomplishments/professional-cert/D4XY96BB2FRD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <span>Google Data Analytics Professional Certificate, Coursera, 2022</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
};

export default Certifications;
