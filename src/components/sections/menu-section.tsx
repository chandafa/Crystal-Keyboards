"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Crystal Pro 65", price: "$240" },
  { name: "Obsidian 75", price: "$280" },
  { name: "Quartz TKL", price: "$320" },
  { name: "Amethyst Pad", price: "$120" },
  { name: "Onyx Alice", price: "$350" },
  { name: "Topaz 60", price: "$180" },
];

export function MenuSection() {
  const containerRef = useRef(null);

  return (
    <div className="py-24 bg-[#050510] overflow-hidden relative z-10">
      <div className="container mx-auto px-6 mb-12">
         <h2 className="text-4xl font-bold uppercase text-white">Signature Boards</h2>
      </div>
      
      <motion.div ref={containerRef} className="pl-6 md:pl-24 cursor-grab active:cursor-grabbing">
        <motion.div 
          drag="x" 
          dragConstraints={containerRef}
          className="flex gap-8 w-max pr-12"
        >
          {menuItems.map((item, i) => (
            <div key={i} className="w-72 h-96 bg-[#0f172a] rounded-3xl p-8 flex flex-col justify-between shrink-0 group hover:bg-[#94a3b8] transition-colors duration-500">
               <div>
                 <div className="text-2xl font-bold font-outfit text-white group-hover:text-[#050510] mb-2">{item.price}</div>
                 <h3 className="text-3xl font-bold uppercase text-white group-hover:text-[#050510] leading-tight">{item.name}</h3>
               </div>
               <button className="w-full py-4 rounded-full border border-white text-white uppercase tracking-widest group-hover:bg-[#050510] group-hover:border-[#050510] transition-colors">
                  View
               </button>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
