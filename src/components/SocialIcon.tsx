import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

interface SocialIconProps {
  icon?: LucideIcon;
  customIcon?: ComponentType<{ size?: number }>;
  href: string;
  label: string;
  delay?: number;
  preserveCase?: boolean;
}

const SocialIcon = ({ icon: Icon, customIcon: CustomIcon, href, label, delay = 0, preserveCase = false }: SocialIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={`group flex items-center gap-2 px-4 py-2 border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 font-mono text-xs tracking-widest text-muted-foreground hover:text-primary${preserveCase ? "" : " uppercase"}`}
    aria-label={label}
  >
    {Icon && <Icon size={14} />}
    {CustomIcon && <CustomIcon size={14} />}
    <span>{label}</span>
  </motion.a>
);

export default SocialIcon;
