import { CountUp } from "@/components/ui/count-up";

export function StatsSection() {
  return (
    <div className="min-h-[50vh] bg-[#050510] text-white flex items-center justify-center relative z-10 py-24">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <div>
           <div className="text-5xl md:text-7xl font-bold font-outfit text-[#94a3b8] flex justify-center">
             <CountUp value={5} />k+
           </div>
           <div className="uppercase tracking-widest mt-4 text-sm">Boards Build</div>
        </div>
        <div>
           <div className="text-5xl md:text-7xl font-bold font-outfit text-[#94a3b8] flex justify-center">
             <CountUp value={2} />M+
           </div>
           <div className="uppercase tracking-widest mt-4 text-sm">Switches Lubed</div>
        </div>
        <div>
           <div className="text-5xl md:text-7xl font-bold font-outfit text-[#94a3b8] flex justify-center">
             <CountUp value={25} />+
           </div>
           <div className="uppercase tracking-widest mt-4 text-sm">Countries</div>
        </div>
        <div>
           <div className="text-5xl md:text-7xl font-bold font-outfit text-[#94a3b8] flex justify-center">
             <CountUp value={100} />%
           </div>
           <div className="uppercase tracking-widest mt-4 text-sm">Satisfaction</div>
        </div>
      </div>
    </div>
  );
}
