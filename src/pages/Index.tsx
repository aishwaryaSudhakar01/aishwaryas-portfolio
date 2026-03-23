import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import GrainOverlay from "@/components/ParticleField";
import SocialIcon from "@/components/SocialIcon";
import StatsCounter from "@/components/StatsCounter";
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
const startDate = new Date(2023, 5); // Jun 2023
const yearsExp = Math.floor((Date.now() - startDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000) * 2) / 2; // floor to nearest 0.5

const bannerItems = [
  "Biz Ops", "Analytics", "Data-Driven Decision Making", "Strategic Planning",
  "Process Optimization", "AI-Augmented Workflows", "SQL · Python · Power BI",
  "Claude · Lovable · Cursor · ElevenLabs"
];
const bannerText = bannerItems.join(" ✦ ") + " ✦";

const socials = [
  { icon: Mail, href: "mailto:aishwaryasudhakar12@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aishwaryasudhakar01", label: "LinkedIn" },
  { icon: FileText, href: "#", label: "CV" },
  { icon: Github, href: "https://github.com/aishwaryaSudhakar01", label: "GitHub" },
  { customIcon: XIcon, href: "https://x.com/aishwarya_2212?s=21", label: "X" },
  { customIcon: UpworkIcon, href: "https://www.upwork.com/freelancers/~01efc0a0f54607df98", label: "Upwork" },
  { customIcon: GumroadIcon, href: "https://aishwarya2212.gumroad.com/?_gl=1*clejb1*_ga*MTUxMzMxMTg3Ni4xNzcyOTg1MTEy*_ga_6LJN6D94N6*czE3NzQwODU3NjMkbzckZzEkdDE3NzQwODU3NzYkajQ3JGwwJGgw", label: "Gumroad" },
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pt-20 pb-16">
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

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", rotateX: 90 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight mb-2"
              >
                AISHWARYA
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-mono text-xs tracking-[0.2em] text-muted-foreground mb-4 origin-left"
            >
              (eye-shwar-ya)
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", rotateX: 90 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-display font-black italic leading-[0.9] tracking-tight text-gradient"
              >
                Sudhakar
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-secondary-foreground leading-relaxed max-w-lg text-base sm:text-lg"
            >
              I pick up tools fast and build things that work. With{" "}
              <span className="text-primary font-semibold">{yearsExp}+ years</span> of
              experience sitting between data and operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-4 text-muted-foreground leading-relaxed max-w-lg text-sm space-y-3"
            >
              <p>
                At Uber, I worked on getting people to work — literally. Think city-scale shuttle networks for large corporations. I sat between product and sales, understanding the product deeply enough to configure it for each client, and each client deeply enough to know a good solution from a good-looking one.
              </p>
              <p>
                Outside of that, I build and sell digital products. I've used Claude, Lovable, and Stitch to ship tools I actually wanted to exist, then listed them on Gumroad. Some sold. Still building. Along the way, I've picked up ElevenLabs and Cursor too — mostly because a problem needed it.
              </p>
              <p>
                I sit between data and operations, which makes me useful in roles that don't fit a clean job description. I define the framework, set the metrics, and figure out what needs to be in place before anyone else notices the gap.
              </p>
              <p>
                Heading to <span className="text-foreground font-medium">NUS for an MSBA</span> in Fall 2026. Until then, I'm freelancing and exploring problems where the data is real and the answers aren't obvious.
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
          </div>

          {/* Right column — photo + stats */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Photo frame with editorial treatment */}
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:ml-auto overflow-hidden">
                <div className="absolute inset-0 border border-border" />
                <motion.img
                  src={profilePhoto}
                  alt="Aishwarya Sudhakar"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                {/* Overlay label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                    Based in India
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                    Available for freelance
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex justify-between mt-8 pt-6 border-t border-border max-w-sm mx-auto lg:ml-auto"
              >
                <StatsCounter value={15} suffix="+" label="Products" delay={0.8} />
                <StatsCounter value={yearsExp} suffix="+" label="Years Exp." delay={0.9} />
                <StatsCounter value={5} label="Certifications" delay={1.0} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Work Experience */}
        <WorkExperience />

        {/* Skills & Projects */}
        <Skills />

        {/* Certifications */}
        <Certifications />

        {/* Hackathons */}
        <Hackathons />

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
      </div>
    </div>
  );
};

export default Index;
