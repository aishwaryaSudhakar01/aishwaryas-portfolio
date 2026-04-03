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
    hacks: [
      {
        tag: "Hack #1 · Firecrawl",
        name: "Sophie — Voice Shopping Agent",
        description:
          "Online shopping is still stuck in the search-and-scroll era. You type keywords, open 12 tabs, compare reviews across sites, and still second-guess your choice.\n\nI built Sophie — a voice agent that replaces that entire workflow with a conversation.\n\nYou talk. She listens. She asks smart follow-ups (name, what you need, budget, currency — one at a time). Then she searches the live web using Firecrawl, ranks the top 3 with Claude, reads them aloud through ElevenLabs Conversational AI, and opens the buy link when you say \"yes.\"\n\nThe whole thing runs on a single HTML file, a Node.js backend, and three APIs. No framework. No React. Just vanilla JS and a conversation that actually works.\n\nIf you're building with voice, the lesson I keep learning: the agent should never go silent. Sophie is always alive — even if you switch tabs, she's still listening and working.",
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
          className="border-b border-border"
        >
          <Accordion type="single" collapsible>
            <AccordionItem value={h.name} className="border-b-0">
              <AccordionTrigger className="py-4 hover:no-underline group">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {h.name}
                  </span>
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
