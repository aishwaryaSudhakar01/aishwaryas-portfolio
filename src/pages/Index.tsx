import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, ExternalLink } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import SocialIcon from "@/components/SocialIcon";
import ProjectCategory from "@/components/ProjectCategory";
import StatsCounter from "@/components/StatsCounter";
import profilePhoto from "@/assets/profile-photo.jpg";

const categories = [
  { label: "SQL", href: "#" },
  { label: "Power BI", href: "#" },
  { label: "Machine Learning", href: "#" },
  { label: "Internships", href: "#" },
  { label: "Certifications", href: "#" },
];

const socials = [
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: FileText, href: "#", label: "Resume" },
  { icon: ExternalLink, href: "#", label: "Upwork" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      <ParticleField />

      {/* Ambient glow blobs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pulse-glow" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl pulse-glow" style={{ animationDelay: "1.5s" }} />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Main card */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Animated border glow */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/60 via-pink-500/30 to-primary/60 opacity-60" />
          
          <div className="relative glass rounded-2xl p-8 sm:p-12">
            {/* Profile photo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-pink-500 to-rose-500 animate-spin-slow" style={{ animation: "spin 8s linear infinite" }} />
                <img
                  src={profilePhoto}
                  alt="Aishwarya Sudhakar"
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-background"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-4xl sm:text-5xl font-display font-bold tracking-tight text-foreground mb-2"
            >
              AISHWARYA{" "}
              <span className="text-gradient">SUDHAKAR</span>
            </motion.h1>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-primary font-medium mb-6"
            >
              Hi there! 👋
            </motion.p>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-center max-w-lg mx-auto mb-8 space-y-3"
            >
              <p className="text-secondary-foreground leading-relaxed">
                I'm a dedicated <span className="text-primary font-medium">Data Analyst</span> with over a year of experience, 
                specializing in developing data models, performing advanced analyses, and utilizing machine learning techniques.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I thrive on transforming complex data into actionable insights and am always excited to connect 
                with others who share a passion for data. Let's explore how data can drive success together!
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-8 sm:gap-12 mb-8 py-4 border-y border-border/50"
            >
              <StatsCounter value={15} suffix="+" label="Projects" delay={0.6} />
              <StatsCounter value={1} suffix="+" label="Years Exp." delay={0.7} />
              <StatsCounter value={5} label="Certifications" delay={0.8} />
            </motion.div>

            {/* Social icons */}
            <div className="flex justify-center gap-3 mb-10">
              {socials.map((s, i) => (
                <SocialIcon key={s.label} {...s} delay={0.5 + i * 0.08} />
              ))}
            </div>

            {/* Divider text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-sm text-muted-foreground mb-6 font-medium tracking-wide"
            >
              Explore my projects ↓
            </motion.p>

            {/* Project categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat, i) => (
                <ProjectCategory key={cat.label} label={cat.label} index={i} href={cat.href} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom signature */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          Built with passion & data ✦
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Index;
