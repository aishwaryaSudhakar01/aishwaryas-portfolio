import { motion } from "framer-motion";

const WhatIBuild = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="mt-24 sm:mt-32 pt-12 border-t border-border"
  >
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
      What I Build
    </p>
    <p className="font-display font-black text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight max-w-4xl">
      I build with AI, not just around it. Some at work, some in a weekend hackathon, all of them real.
    </p>
  </motion.section>
);

export default WhatIBuild;
