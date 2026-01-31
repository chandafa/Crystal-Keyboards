import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
  delay?: number;
}

function BentoCard({ title, subtitle, image, className, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#f8fafc] mb-2">{title}</h3>
          <p className="text-[#00f2ea] text-sm md:text-base font-medium uppercase tracking-wider">{subtitle}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function BentoSection() {
  return (
    <section className="min-h-screen bg-[#050510] py-16 md:py-24 px-4 md:px-8 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase mb-12 md:mb-16 text-center text-[#f8fafc] tracking-tight"
        >
          Our <span className="text-[#00f2ea]">Selection</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {/* Main Hero Item - Signature Keyboard */}
          <BentoCard
            title="Crystal Pro 65"
            subtitle="Gasket Mount & PC Plate"
            image="/products/crystal_pro_65.png"
            className="sm:col-span-2 sm:row-span-2"
            delay={0.1}
          />

          {/* Secondary - Switches */}
          <BentoCard
            title="Tactile Switches"
            subtitle="Holy Panda Style"
            image="/products/tactile_switches.png"
            className="col-span-1 row-span-1"
            delay={0.2}
          />

          {/* Secondary - Keycaps */}
          <BentoCard
            title="Artisan Keycaps"
            subtitle="Handcrafted Resin"
            image="/products/artisan_keycaps.png"
            className="col-span-1 sm:row-span-2"
            delay={0.3}
          />

           {/* Filler / CTA Card */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             viewport={{ once: true }}
             className="col-span-1 row-span-1 bg-[#0f172a] rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-white/10 group cursor-pointer hover:bg-[#1e293b] transition-colors"
           >
             <h3 className="text-3xl font-bold text-[#f8fafc] mb-2">5000+</h3>
             <p className="text-[#00f2ea] uppercase tracking-widest text-sm">Builds Completed</p>
           </motion.div>

          {/* Wide Bottom - App Promo */}
          <BentoCard
            title="Group Buy"
            subtitle="Join Exclusive Runs"
            image="/products/group_buy_promo.png"
            className="sm:col-span-2 lg:col-span-4 row-span-1"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
