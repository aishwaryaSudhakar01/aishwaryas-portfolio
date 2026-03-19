import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  label: string;
  delay?: number;
}

const SocialIcon = ({ icon: Icon, href, label, delay = 0 }: SocialIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.2, y: -4 }}
    whileTap={{ scale: 0.95 }}
    className="group relative p-3 rounded-xl glass glow-sm hover:glow-md transition-shadow duration-300"
  >
    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {label}
    </span>
  </motion.a>
);

export default SocialIcon;
