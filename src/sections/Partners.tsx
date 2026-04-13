import { motion } from 'motion/react';

export function Partners() {
  const amcs = [
    { name: "HDFC", color: "#004a99" },
    { name: "ICICI Prudential", color: "#f37021" },
    { name: "SBI Mutual Fund", color: "#225eb1" },
    { name: "Axis Mutual Fund", color: "#ae124a" },
    { name: "Kotak Mutual Fund", color: "#ed1c24" },
    { name: "Tata Mutual Fund", color: "#00a1e0" },
    { name: "HSBC Mutual Fund", color: "#db0011" },
    { name: "Invesco Mutual Fund", color: "#004b87" },
    { name: "Nippon India", color: "#0055a4" },
    { name: "DSP Mutual Fund", color: "#000000" }
  ];

  return (
    <section className="py-20 bg-navy border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-2">
          Institutional Access
        </h3>
        <p className="text-gold text-xs tracking-widest opacity-80 uppercase">Associated Asset Management Companies</p>
      </div>
      
      <div className="relative flex w-full">
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-navy via-navy/80 to-transparent z-10"></div>

        <motion.div 
          className="flex whitespace-nowrap gap-20 md:gap-32 px-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {[...amcs, ...amcs].map((amc, index) => (
            <div 
              key={index} 
              className="flex items-center group cursor-default"
            >
              <span 
                className="font-serif text-lg md:text-2xl font-medium text-white/30 group-hover:text-white transition-colors duration-500 tracking-tight"
              >
                {amc.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
