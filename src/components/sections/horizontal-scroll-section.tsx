"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const images = [
  "/products/build_01.png",
  "/products/build_02.png",
  "/products/build_03.png",
  "/products/build_04.png",
];

export function HorizontalScrollSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#050510] z-10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 pl-24">
          {images.map((img, i) => (
            <div key={i} className="relative h-[60vh] w-[40vh] md:w-[60vh] shrink-0 overflow-hidden rounded-3xl">
              <img src={img} alt={`Keyboard ${i}`} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 text-white text-4xl font-bold uppercase">
                Series 0{i+1}
              </div>
            </div>
          ))}
          <div className="w-[40vh] shrink-0" /> {/* Spacer */}
        </motion.div>
      </div>
    </section>
  );
}
