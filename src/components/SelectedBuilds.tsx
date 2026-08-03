import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Build {
  tag: string;
  name: string;
  description: string;
  stack: string;
  link?: string;
  github?: string;
  internal?: boolean;
}

const builds: Build[] = [
  {
    tag: "INTERNAL TOOL · UBER",
    name: "Hotspot Consolidation Platform",
    description:
      "Pulled Uber's data, map data, and client locations into one screen, with a demand heatmap on top. Cut routing data prep from a full day to three hours. Feeds ops in 15+ cities.",
    stack: "Lovable",
    internal: true,
  },
  {
    tag: "INTERNAL TOOL · UBER",
    name: "Route Network Editor",
    description:
      "Edit route networks right on the map. Move a hotspot and its riders follow, shift stops between routes, watch distance and time recalculate live. Replaced a slow manual workflow, picked up by four regional teams.",
    stack: "Python · QGIS",
    internal: true,
  },
  {
    tag: "AI AUTOMATION · PERSONAL",
    name: "Job Search Automation",
    description:
      "Watches 120+ company career pages and job alerts, filters every posting by fit with Claude, then turns a matched role into a tailored CV and cover letter on one command. I only pick which jobs to chase. A full run scans 7,000+ postings.",
    stack: "n8n · Claude Code · Firecrawl · Slack",
    github: "https://github.com/aishwaryaSudhakar01/job-search-automation",
  },
  {
    tag: "VOICE AI · WEEKEND HACKATHON",
    name: "Sophie",
    description:
      "A voice shopping agent with a personality. Searches the web mid-conversation, so you talk instead of typing and comparing tabs.",
    stack: "ElevenLabs · Claude · built with Claude Code",
    github: "https://github.com/aishwaryaSudhakar01/sophie",
  },
  {
    tag: "VOICE AI · WEEKEND HACKATHON",
    name: "Voyage",
    description:
      "Plan a whole trip by talking. One conversation gives you real flights, hotels, a day-by-day plan, and a running budget.",
    stack: "Cloudflare Workers AI · built with Claude Code",
    github: "https://github.com/aishwaryaSudhakar01/voyage",
  },
  {
    tag: "BUILD CHALLENGE · LOVABLE",
    name: "PDF Edits",
    description:
      "A browser PDF editor that runs all your edits in one pass, no re-uploading between tools. Annotate, redact, sign, convert, all on your own device.",
    stack: "Lovable",
    link: "https://pdf-edits.lovable.app",
    github: "https://github.com/aishwaryaSudhakar01/pdf-edits",
  },
];

const CardBody = ({ b }: { b: Build }) => (
  <div className="group relative flex flex-col h-full rounded-lg border border-border bg-card p-6 overflow-hidden transition-all duration-500 ease-out hover:border-primary hover:-translate-y-1.5 hover:shadow-[inset_0_0_24px_-6px_hsl(var(--primary)/0.35),0_18px_40px_-16px_hsl(var(--primary)/0.35)]">
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">
      {b.tag}
    </p>

    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
      {b.name}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
      {b.description}
    </p>
    <p className="font-mono text-xs text-muted-foreground mb-3">{b.stack}</p>

    <div className="flex items-center gap-4">
      {b.internal && (
        <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Internal tool
        </span>
      )}
      {b.link && (
        <a
          href={b.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Live
        </a>
      )}
      {b.github && (
        <a
          href={b.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
        >
          <Github className="w-3.5 h-3.5" />
          GitHub
        </a>
      )}
    </div>
  </div>
);

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
          Every one of these started as a manual problem I got tired of. I build with AI, some at work, some over a weekend, all of them real.
        </p>
      </div>
      <div className="editorial-line hidden sm:block mt-6" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ perspective: "1200px" }}>
      {builds.map((b, i) => {
        const href = b.link ?? b.github;
        return (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, rotateX: -18, rotateY: 8, y: 24 }}
            whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 2) * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: "preserve-3d" }}
            className="h-full"
          >
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
                aria-label={b.name}
              >
                <CardBody b={b} />
              </a>
            ) : (
              <CardBody b={b} />
            )}
          </motion.div>
        );
      })}
    </div>
  </motion.section>
);

export default SelectedBuilds;
