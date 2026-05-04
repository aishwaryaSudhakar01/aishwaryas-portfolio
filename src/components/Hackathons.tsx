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
];

const Hackathons = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.0 }}
    className="mt-20 sm:mt-28"
  >
    <div className="text-center mb-10">
      <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3 font-medium">
        Projects
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Hackathons
      </h2>
    </div>

    <div>
      {hackathons.map((h, i) => (
        <motion.div
          key={h.name}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
          className="rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-sm transition-all"
        >
          <Accordion type="single" collapsible>
            <AccordionItem value={h.name} className="border-b-0">
              <AccordionTrigger className="py-1 hover:no-underline group">
                <div className="flex items-center gap-3">
                  <a
                    href={h.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base text-foreground group-hover:text-primary transition-colors hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {h.name}
                  </a>
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    {h.description}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-2">
                  {h.hacks.map((hack) => (
                    <div key={hack.name} className="space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-medium">
                        {hack.tag}
                      </p>
                      <h3 className="text-base font-semibold text-foreground">
                        {hack.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {hack.description}
                      </p>
                      <a
                        href={hack.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mt-1"
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
