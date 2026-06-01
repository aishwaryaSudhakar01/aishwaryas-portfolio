import { motion } from "framer-motion";
import { ChevronDown, Github } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const hackathons = [
  {
    name: "ElevenHacks",
    description: "ElevenLabs Hackathon",
    url: "https://hacks.elevenlabs.io/",
    hacks: [
      {
        tag: "Hack #1 · Firecrawl",
        name: "Sophie — Voice Shopping Agent",
        description:
          "Sophie is a voice shopping agent with a personality. Tell her what you're looking for, your budget, and currency — she asks the right questions, searches the web in real time, and reads your top picks back like a best friend who happens to know everything about everything. Built on ElevenLabs Conversational AI — VAD, live interruptions, and client tools that fire Firecrawl searches mid-conversation without breaking the flow. Firecrawl Search returns structured product data instantly, Claude ranks it, Sophie reads it back. Zero typing. Zero scrolling. Just vibes and results.",
        github: "https://github.com/aishwaryaSudhakar01/sophie",
      },
      {
        tag: "Hack #2 · Cloudflare",
        name: "Voyage — Voice Travel Agent",
        description:
          "Planning a trip today means 15 browser tabs, 3 comparison sites, and hours of copy-pasting. Voyage replaces all of that with a single voice conversation. Say \"5 days in Bali for two, 1.5 lakhs\" and watch a full itinerary — real flights, real hotels, day-by-day activities, weather, and a live budget — appear in seconds.\n\nElevenLabs Conversational AI is the core interaction layer. Cloudflare Workers AI runs Llama 3.1 for structured itineraries. Durable Objects with SQLite remembers preferences across trips. Vectorize enables semantic search. Browser Rendering scrapes live prices. The result is a full travel-agent UI with voice-driven pipeline, context chips, deep-linked booking, and a real-time budget tracker.",
        github: "https://github.com/aishwaryaSudhakar01/voyage",
      },
    ],
  },
  {
    name: "Lovable May Sweepstake",
    description: "Lovable",
    url: "https://pdf-edits.lovable.app",
    hacks: [
      {
        tag: "May 2025",
        name: "PDF Edits",
        description:
          "A web-based PDF editing tool built for the Lovable May Sweepstake. Upload, annotate, and modify PDFs directly in the browser with a clean, responsive interface.",
        github: "https://github.com/aishwaryaSudhakar01/pdf-edits",
      },
    ],
  },
];

const Hackathons = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    className="mt-24 sm:mt-32"
  >
    <div className="flex items-center justify-between mb-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
          Competitions
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black">
          Hackathons
        </h2>
      </div>
      <div className="editorial-line hidden sm:block" />
    </div>

    <div className="border-t border-border">
      {hackathons.map((h, i) => (
        <motion.div
          key={h.name}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="border-b border-border"
        >
          <Accordion type="single" collapsible>
            <AccordionItem value={h.name} className="border-b-0">
              <AccordionTrigger className="py-4 hover:no-underline group">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={h.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {h.name}
                  </a>
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                    {h.description}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pl-8 sm:pl-12 pb-2">
                  {h.hacks.map((hack) => (
                    <div key={hack.name} className="space-y-2">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                        {hack.tag}
                      </p>
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                        {hack.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {hack.description}
                      </p>
                      <a
                        href={hack.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline mt-1"
                      >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Hackathons;
