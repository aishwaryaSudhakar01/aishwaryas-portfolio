import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface Build {
  tag: string;
  name: string;
  description: string;
  stack: string;
  link?: string;
}

const builds: Build[] = [
  {
    tag: "INTERNAL TOOL · UBER",
    name: "Hotspot Consolidation Platform",
    description:
      "Pulled Uber data, map data, and client rider locations into one screen. Cut routing data prep from a full day to three hours; now feeds 15+ city operations.",
    stack: "Lovable",
  },
  {
    tag: "INTERNAL TOOL · UBER",
    name: "QGIS Routing Plugin",
    description:
      "Gave route planners one visual interface to edit and sync route data. Adopted by 4 regional teams across 10+ enterprise accounts.",
    stack: "Python · QGIS",
  },
  {
    tag: "VOICE AI · WEEKEND HACKATHON",
    name: "Sophie",
    description:
      "A voice shopping agent with a personality. Real-time web search mid-conversation, zero typing.",
    stack: "ElevenLabs · Firecrawl · Claude",
    link: "https://github.com/aishwaryaSudhakar01/sophie",
  },
  {
    tag: "VOICE AI · WEEKEND HACKATHON",
    name: "Voyage",
    description:
      "Plan a full trip by voice. One conversation returns real flights, hotels, day-by-day activities, and a live budget.",
    stack: "ElevenLabs · Cloudflare Workers AI",
    link: "https://github.com/aishwaryaSudhakar01/voyage",
  },
];

const SelectedBuilds = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    className="mt-24 sm:mt-32"
  >
    <div className="flex items-start justify-between mb-8 gap-8">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
          Selected Builds
        </p>
        <p className="font-display font-black text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight">
          I build with AI, not just around it. Some at work, some in a weekend hackathon, all of them real.
        </p>
      </div>
      <div className="editorial-line hidden sm:block mt-6" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {builds.map((b, i) => (
        <motion.div
          key={b.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">
            {b.tag}
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
            {b.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            {b.description}
          </p>
          <p className="font-mono text-xs text-muted-foreground mb-3">
            {b.stack}
          </p>
          {b.link && (
            <a
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default SelectedBuilds;
