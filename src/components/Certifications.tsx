import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import certGoogle from "@/assets/cert-google-data-analytics.png";
import certBiAnalyst from "@/assets/cert-udemy-bi-analyst.png";
import certPowerBi from "@/assets/cert-udemy-power-bi.png";

interface Certification {
  name: string;
  issuer: string;
  image: string;
  link: string;
}

const certifications: Certification[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    image: certGoogle,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/D4XY96BB2FRD",
  },
  {
    name: "The Business Intelligence Analyst Course 2023",
    issuer: "Udemy",
    image: certBiAnalyst,
    link: "https://www.udemy.com/certificate/UC-b6696336-13c7-46cb-a6f1-ef8a041f54a9/",
  },
  {
    name: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Udemy",
    image: certPowerBi,
    link: "https://www.udemy.com/certificate/UC-97d8b1e0-1c4e-42a9-868d-401768212a08/",
  },
];

const CertCard = ({ cert }: { cert: Certification }) => (
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex-shrink-0 w-[280px] sm:w-[340px] mx-4"
  >
    <div className="relative overflow-hidden rounded-lg border border-border bg-card aspect-[4/3] transition-all duration-500 group-hover:border-primary group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary/20">
      <img
        src={cert.image}
        alt={cert.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-100 group-hover:opacity-70 transition-opacity duration-500" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-3.5 h-3.5 text-primary" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-1">
          {cert.issuer}
        </p>
        <p className="font-display text-sm font-bold text-foreground leading-tight line-clamp-2">
          {cert.name}
        </p>
      </div>
    </div>
  </a>
);

const Certifications = () => {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...certifications, ...certifications, ...certifications, ...certifications];

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
        <p className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Hover to pause ✦ Click to verify
        </p>
      </div>

      <div className="relative pause-on-hover">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="overflow-hidden">
          <div className="flex animate-marquee-slow w-max py-4">
            {loop.map((cert, i) => (
              <CertCard key={`${cert.name}-${i}`} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
