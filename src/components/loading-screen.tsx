"use client";

import { motion } from "framer-motion";

export function LoadingScreen({ progress }: { progress: number }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#050510] flex items-center justify-center pointer-events-none"
    >
      <div className="relative overflow-hidden p-8">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-[#94a3b8]"
        >
          Crystal
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="text-4xl font-light text-[#94a3b8]"
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  );
}
