import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatsCounter = ({ value, label, suffix = "", delay = 0 }: StatsCounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [count, value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.2 }}
      className="text-center"
    >
      <div className="flex items-baseline justify-center gap-0.5">
        <motion.span className="text-3xl font-display font-bold text-gradient">
          {rounded}
        </motion.span>
        {suffix && <span className="text-xl font-display font-bold text-primary">{suffix}</span>}
      </div>
      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

export default StatsCounter;
