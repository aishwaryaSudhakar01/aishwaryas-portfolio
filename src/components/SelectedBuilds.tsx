import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Build {
  tag: string;
  name: string;
  description: string;
  stack: string;
  link?: string;
  github?: string;
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
    name: "Route Network Editor",
    description:
      "An interactive tool for editing route networks directly on the map. Operators move a hotspot and its employees follow, shift stops between routes, add or remove them, with distance and time recalculating live as they edit. Replaced a slow, manual workflow and was adopted by 4 regional teams across 10+ enterprise accounts.",
    stack: "Python · QGIS",
  },
  {
    tag: "VOICE AI · WEEKEND HACKATHON",
    name: "Sophie",
    description:
      "A voice shopping agent with a personality. Real-time web search mid-conversation, zero typing.",
    stack: "ElevenLabs · Firecrawl · Claude",
    github: "https://github.com/aishwaryaSudhakar01/sophie",
  },
  {
    tag: "VOICE AI · WEEKEND HACKATHON",
    name: "Voyage",
    description:
      "Plan a full trip by voice. One conversation returns real flights, hotels, day-by-day activities, and a live budget.",
    stack: "ElevenLabs · Cloudflare Workers AI",
    github: "https://github.com/aishwaryaSudhakar01/voyage",
  },
  {
    tag: "BUILD CHALLENGE · LOVABLE",
    name: "PDF Edits",
    description:
      "A browser-based PDF editor, upload, annotate, and modify PDFs in a clean, responsive interface. Built for Lovable's May Sweepstake build challenge.",
    stack: "Lovable",
    link: "https://pdf-edits.lovable.app",
    github: "https://github.com/aishwaryaSudhakar01/pdf-edits",
  },
];

const SelectedBuilds = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
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

    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[autoplay.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-4 py-4" style={{ perspective: "1200px" }}>
        {builds.map((b, i) => (
          <CarouselItem key={b.name} className="pl-4 md:basis-1/2">
            <motion.div
              initial={{ opacity: 0, rotateX: -18, rotateY: 8, y: 24 }}
              whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="h-full"
            >
              <div className="group relative flex flex-col h-full rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">



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
              {(b.link || b.github) && (
                <div className="flex items-center gap-4">
                  {b.link && (
                    <a
                      href={b.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              )}
              </div>
            </motion.div>
          </CarouselItem>

        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  </motion.section>
  );
};


export default SelectedBuilds;
