import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
        Credentials
      </p>
      <a
        href="https://www.coursera.org/account/accomplishments/professional-cert/D4XY96BB2FRD"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <span>Google Data Analytics Professional Certificate, Coursera, 2022</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  );
};

export default Certifications;
