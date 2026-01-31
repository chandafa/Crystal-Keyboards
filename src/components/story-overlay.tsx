"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function StoryOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We need to link this to the same scroll height as SequenceScroll
  // Since SequenceScroll is in the same parent and has h-[400vh], 
  // we can just stick this overlay to the viewport and use global scroll or 
  // wrap them in a shared context. 
  // EASIER: Just put this absolute inside the same relative container in page.tsx
  // But useScroll defaults to window viewport if target is not defined/ref not passed?
  // Actually, we want to animate based on the scroll position relative to the hero section.
  
  // Let's assume this component is placed INSIDE the h-[400vh] container of SequenceScroll
  // BUT absolute positioned to cover it.
  
  const { scrollYProgress } = useScroll({
    // target: containerRef, // If we are inside the large container, we can reference it? 
    // No, cleaner to just use window scroll if the hero is at the top.
    // Ideally, pass the Ref from parent. 
    // For now, let's rely on absolute positioning and standard Motion useScroll offsets 
    // assuming the hero is the first 400vh.
    offset: ["0vh start", "400vh end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]); // Stays visible at end?

  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none">
       {/* Section 1: Title */}
       <motion.div 
         style={{ opacity: opacity1 }}
         className="sticky top-0 h-screen flex flex-col items-center justify-center text-center p-6"
       >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase mb-4 text-[#f8fafc] drop-shadow-2xl">
            Crystal<br/>Keyboards
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-[#00f2ea] tracking-widest uppercase font-medium drop-shadow-lg">
            Typing Perfection. Crystal Clear.
          </p>
       </motion.div>

       {/* Section 2: Slogan Left */}
       <motion.div 
         style={{ opacity: opacity2 }}
         className="sticky top-0 h-screen flex items-center justify-start p-6 md:p-16 lg:p-24"
       >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase text-[#f8fafc] max-w-4xl text-left drop-shadow-2xl leading-tight">
            From a simple switch<br/><span className="text-[#00f2ea] italic">to a daily driver.</span>
          </h2>
       </motion.div>

       {/* Section 3: Slogan Right */}
       <motion.div 
         style={{ opacity: opacity3 }}
         className="sticky top-0 h-screen flex items-center justify-end p-6 md:p-16 lg:p-24"
       >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase text-[#f8fafc] max-w-4xl text-right drop-shadow-2xl leading-tight">
            Every click feels<br/><span className="text-[#00f2ea] italic">like pure magic.</span>
          </h2>
       </motion.div>

       {/* Section 4: CTA */}
       <motion.div 
         style={{ opacity: opacity4 }}
         className="sticky top-0 h-screen flex flex-col items-center justify-center p-6"
       >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-center mb-8 text-[#f8fafc] drop-shadow-2xl">
            Feel the Thock
          </h2>
          <motion.button 
             className="pointer-events-auto px-8 py-4 md:px-12 md:py-6 bg-[#f8fafc] text-[#050510] rounded-full text-lg md:text-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)]"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
          >
            Shop Custom
          </motion.button>
       </motion.div>
    </div>
  );
}
