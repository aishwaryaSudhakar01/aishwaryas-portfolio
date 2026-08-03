import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import GrainOverlay from "@/components/ParticleField";
import SocialIcon from "@/components/SocialIcon";
import StatsCounter from "@/components/StatsCounter";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import SelectedBuilds from "@/components/SelectedBuilds";
import Certifications from "@/components/Certifications";
import XIcon from "@/components/icons/XIcon";
import LovableIcon from "@/components/icons/LovableIcon";

import profilePhoto from "@/assets/profile-photo.webp";

const currentYear = new Date().getFullYear();

const bannerItems = [
  "Process Optimisation", "AI-Augmented Workflows", "Workflow Automation", "Pipeline Building",
  "Internal Tools", "SQL", "Python", "Claude Code", "n8n", "Zapier", "Airtable",
  "Lovable", "Firecrawl", "ElevenLabs"
];
const bannerText = bannerItems.join(" ✦ ") + " ✦";


const socials = [
  { icon: Mail, href: "mailto:aishwaryasudhakar12@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aishwaryasudhakar01", label: "LinkedIn" },
  { icon: FileText, href: "https://drive.google.com/file/d/1tgKwPr7KW7JQXlSaEUCmWo6YnBsYj0nq/view?usp=sharing", label: "CV" },
  { icon: Github, href: "https://github.com/aishwaryaSudhakar01", label: "GitHub" },
  { customIcon: XIcon, href: "https://x.com/Aishwarya_2212", label: "X" },
  { customIcon: LovableIcon, href: "https://lovable.dev/@aishwarya_2212", label: "Lovable" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GrainOverlay />

      {/* Marquee ticker */}
      <div className="fixed top-0 left-0 right-0 z-20 border-b border-border bg-background/80 backdrop-blur-sm py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mx-8">
              {bannerText}
            </span>
          ))}
        </div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pt-20 pb-16">
        {/* Header section — asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 sm:pt-16">
          
          {/* Left column — oversized typography */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Portfolio / {currentYear}
              </p>
              <div className="editorial-line mb-8" />
            </motion.div>

            <h1 className="sr-only">Aishwarya Sudhakar, Data and Operations Portfolio</h1>
            <div aria-hidden="true" className="mb-6">
              <span className="block font-mono text-xs uppercase tracking-[0.3em] text-foreground">
                Aishwarya Sudhakar
              </span>
              <motion.p
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mt-1 origin-left"
              >
                (eye-SHWAR-yah)
              </motion.p>
            </div>

            <div aria-hidden="true" className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block text-2xl sm:text-4xl lg:text-5xl font-display font-black leading-[1.1] tracking-tight"
              >
                I build the tools that take the manual work out of <span className="italic text-gradient">operations</span>.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 text-muted-foreground leading-relaxed max-w-lg text-sm space-y-3"
            >
              <p>
                Most of my work starts as something slow and manual that everyone just puts up with. I find the bottleneck, work out what should replace it, and build it. A pipeline, an internal tool, an AI agent. Almost all of it now built with AI.
              </p>
              <p className="text-foreground">
                UCLA MSBA '27, building toward product, ops, and AI automation roles.
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {socials.map((s, i) => (
                <SocialIcon key={s.label} {...s} delay={1 + i * 0.08} />
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mt-4 font-mono text-[11px] text-muted-foreground max-w-lg leading-relaxed"
            >
              Currently building in public and writing about it. Follow along on LinkedIn and X.
            </motion.p>
          </div>


          {/* Right column — photo + stats */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Photo with soft vignette mask */}
              <div className="relative aspect-[3/4] max-w-[12rem] sm:max-w-[14rem] lg:max-w-xs mx-auto lg:ml-auto overflow-hidden">
                <motion.img
                  src={profilePhoto}
                  alt="Portrait of Aishwarya Sudhakar"
                  width={600}
                  height={800}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  style={{
                    objectPosition: "25% center",
                    maskImage: "radial-gradient(ellipse 70% 65% at 50% 40%, black 50%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 65% at 50% 40%, black 50%, transparent 100%)",
                  }}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>

              {/* Hero stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 max-w-sm mx-auto lg:ml-auto grid grid-cols-3 gap-3"
              >
                <StatsCounter value={15} suffix="+" label="cities running on tools I built" delay={0.8} compact />
                <StatsCounter text="5 days to 2.5" label="proposal turnaround" delay={0.9} compact />
                <StatsCounter value={50} suffix="%" label="manual work cut" delay={1} compact />
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* Work Experience */}
        <WorkExperience />

        {/* Selected Builds */}
        <SelectedBuilds />

        {/* Skills */}
        <Skills />

        {/* Certifications */}
        <Certifications />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5 }}
          className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © {currentYear} Aishwarya Sudhakar
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Built with passion & data ✦
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
