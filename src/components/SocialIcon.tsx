import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

interface SocialIconProps {
  icon?: LucideIcon;
  customIcon?: ComponentType<{ size?: number }>;
  href: string;
  label: string;
  delay?: number;
}

const SocialIcon = ({ icon: Icon, customIcon: CustomIcon, href, label, delay = 0 }: SocialIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="group inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
    aria-label={label}
    title={label}
  >
    {Icon && <Icon size={15} />}
    {CustomIcon && <CustomIcon size={15} />}
  </motion.a>
);

export default SocialIcon;
