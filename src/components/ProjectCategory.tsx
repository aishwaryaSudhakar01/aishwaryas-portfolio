import { motion } from "framer-motion";

interface ProjectCategoryProps {
  label: string;
  index: number;
  href: string;
  count?: string;
}

const ProjectCategory = ({ label, index, href, count }: ProjectCategoryProps) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
    className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors duration-300"
  >
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 hover-editorial">
        {label}
      </span>
    </div>
    <div className="flex items-center gap-3">
      {count && (
        <span className="font-mono text-xs text-muted-foreground">{count}</span>
      )}
      <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
        →
      </span>
    </div>
  </motion.a>
);

export default ProjectCategory;
