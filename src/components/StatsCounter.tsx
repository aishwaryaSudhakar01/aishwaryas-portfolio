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
  const rounded = useTransform(count, (v) => {
    if (value % 1 !== 0) return (Math.round(v * 2) / 2).toFixed(1);
    return Math.round(v).toString();
  });

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
        <motion.span className="text-4xl sm:text-5xl font-display font-black text-foreground">
          {rounded}
        </motion.span>
        {suffix && <span className="text-2xl font-display font-black text-primary">{suffix}</span>}
      </div>
      <p className="font-mono text-[10px] text-muted-foreground mt-2 uppercase tracking-[0.2em]">{label}</p>
    </motion.div>
  );
};

export default StatsCounter;
