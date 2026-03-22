import { motion } from "framer-motion";

const hackathons = [
  { name: "ElevenHacks", description: "ElevenLabs Hackathon" },
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
          className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors duration-300 cursor-default"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 hover-editorial">
              {h.name}
            </span>
          </div>
          <span className="font-mono text-xs text-muted-foreground">{h.description}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Hackathons;
