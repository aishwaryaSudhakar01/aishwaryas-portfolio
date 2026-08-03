import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface StatsCounterProps {
  /** Numeric value to count up to. Ignored when `text` is provided. */
  value?: number;
  /** Static, non-numeric display value (rendered as-is, no counting). */
  text?: string;
  label: string;
  suffix?: string;
  delay?: number;
  compact?: boolean;
}

const StatsCounter = ({ value = 0, text, label, suffix = "", delay = 0, compact = false }: StatsCounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (value % 1 !== 0) return (Math.round(v * 2) / 2).toFixed(1);
    return Math.round(v).toString();
  });

  useEffect(() => {
    if (text) return;
    const timeout = setTimeout(() => {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [count, value, delay, text]);

  const valueClass = compact
    ? "text-2xl sm:text-3xl font-display font-black text-foreground"
    : "text-4xl sm:text-5xl font-display font-black text-foreground";
  const suffixClass = compact
    ? "text-lg font-display font-black text-primary"
    : "text-2xl font-display font-black text-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: delay + 0.2 }}
      className="text-center"
    >
      <div className="flex items-baseline justify-center gap-0.5">
        {text ? (
          <span className={compact ? "text-base sm:text-lg font-display font-black text-foreground leading-tight" : valueClass}>{text}</span>

        ) : (
          <>
            <motion.span className={valueClass}>{rounded}</motion.span>
            {suffix && <span className={suffixClass}>{suffix}</span>}
          </>
        )}
      </div>
      <p className="font-mono text-[10px] text-muted-foreground mt-2 uppercase tracking-[0.2em] leading-relaxed">
        {label}
      </p>
    </motion.div>
  );
};

export default StatsCounter;
