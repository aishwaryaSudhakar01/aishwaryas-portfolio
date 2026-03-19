import { motion } from "framer-motion";

interface ProjectCategoryProps {
  label: string;
  index: number;
  href?: string;
}

const ProjectCategory = ({ label, index, href = "#" }: ProjectCategoryProps) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.97 }}
    className="relative group px-8 py-3 rounded-lg border border-primary/30 hover:border-primary/80 
               bg-primary/5 hover:bg-primary/10 transition-all duration-300 cursor-pointer
               overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    <span className="relative font-display font-semibold text-sm tracking-widest uppercase text-primary">
      {label}
    </span>
  </motion.a>
);

export default ProjectCategory;
