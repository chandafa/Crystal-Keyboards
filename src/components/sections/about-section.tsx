import { TextReveal } from "@/components/ui/text-reveal";

export function AboutSection() {
  return (
    <div className="min-h-screen bg-[#050510] text-white flex items-center justify-center relative z-10 -mt-[100vh] pt-[100vh]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold uppercase mb-12 text-[#94a3b8]">The Approach</h2>
        <TextReveal 
          text="Crystal Keyboards is the premier destination for custom mechanical keyboards in Indonesia. We aim to revolutionize your typing experience with precision engineering and aesthetic perfection." 
          className="text-3xl md:text-5xl leading-tight"
        />
      </div>
    </div>
  );
}
