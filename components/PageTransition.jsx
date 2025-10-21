'use client'
import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div layout transition={{ duration: 0.4, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}
