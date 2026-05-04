import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import GrainOverlay from "@/components/ParticleField";
import SocialIcon from "@/components/SocialIcon";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Hackathons from "@/components/Hackathons";
import XIcon from "@/components/icons/XIcon";
import UpworkIcon from "@/components/icons/UpworkIcon";
import GumroadIcon from "@/components/icons/GumroadIcon";
import LovableIcon from "@/components/icons/LovableIcon";

import profilePhoto from "@/assets/profile-photo.png";

const currentYear = new Date().getFullYear();
const startDate = new Date(2023, 5);
const yearsExp = Math.floor((Date.now() - startDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000) * 2) / 2;

const socials = [
  { icon: Mail, href: "mailto:aishwaryasudhakar12@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aishwaryasudhakar01", label: "LinkedIn" },
  { icon: FileText, href: "https://drive.google.com/file/d/1ZTpvaAMTMLcgLxbOJpg_qmURWEL68tfD/view?usp=sharing", label: "CV" },
  { icon: Github, href: "https://github.com/aishwaryaSudhakar01", label: "GitHub" },
  { customIcon: XIcon, href: "https://x.com/Aishwarya_2212", label: "X" },
  { customIcon: UpworkIcon, href: "https://www.upwork.com/freelancers/~01efc0a0f54607df98", label: "Upwork" },
  { customIcon: GumroadIcon, href: "https://aishwarya2212.gumroad.com/", label: "Gumroad" },
  { customIcon: LovableIcon, href: "https://lovable.dev/@aishwarya_2212", label: "Lovable" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GrainOverlay />

      {/* Top nav */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border/60">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={profilePhoto} alt="" className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/30" />
            <span className="font-semibold text-sm">Aishwarya</span>
          </a>
          <nav className="hidden sm:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-20">
        {/* Hero — centered */}
        <section id="about" className="text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-lg">
              <img src={profilePhoto} alt="Aishwarya Sudhakar" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-xs text-muted-foreground mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Open to opportunities · {yearsExp}+ years experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I'm Aishwarya.
            <br />
            <span className="text-gradient">I sit between data &amp; ops.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            I pick up tools fast and build things that work. At Uber, I worked on getting people to work — city-scale shuttle networks for large corporations, sitting between product and sales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 text-sm text-muted-foreground/80 max-w-xl leading-relaxed"
          >
            I define the framework, set the metrics, and figure out what needs to be in place before anyone else notices the gap.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a
              href="mailto:aishwaryasudhakar12@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={15} />
              Get in touch
            </a>
            <a
              href="https://drive.google.com/file/d/1ZTpvaAMTMLcgLxbOJpg_qmURWEL68tfD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <FileText size={15} />
              View CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {socials.map((s, i) => (
              <SocialIcon key={s.label} {...s} delay={0.7 + i * 0.05} />
            ))}
          </motion.div>
        </section>

        <div id="experience"><WorkExperience /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Hackathons /></div>
        <Certifications />

        <footer className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} Aishwarya Sudhakar</p>
          <p>Built with care</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
