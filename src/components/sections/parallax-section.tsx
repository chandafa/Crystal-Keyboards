"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function ParallaxSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050510] relative overflow-hidden flex items-center justify-center py-24">
      <div className="absolute inset-0 z-0">
         {/* Floating Elements (representing coffee beans/leaves abstractly) */}
         <motion.div style={{ y: y1, rotate }} className="absolute top-[10%] left-[10%] w-24 h-24 rounded-full border border-[#94a3b8]/20 blur-sm" />
         <motion.div style={{ y: y2, rotate: rotate }} className="absolute top-[40%] right-[15%] w-32 h-32 rounded-full border-2 border-[#94a3b8]/10" />
         <motion.div style={{ y: y3 }} className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-[#94a3b8]/5 rounded-full blur-md" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold uppercase mb-8 text-white mix-blend-overlay">
          The Art of<br />Engineering
        </h2>
        <p className="max-w-2xl mx-auto text-[#94a3b8] text-lg">
          We source only the finest materials from around the globe. 
          Each board is CNC-machined to perfection, ensuring a deep, thocky sound 
          disthat defines the Crystal experience.
        </p>
      </div>
    </div>
  );
}
