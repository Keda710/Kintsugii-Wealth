import { motion } from 'motion/react';

export function TrustBar() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 0.3, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="py-12 border-y border-slate-100 bg-white overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale"
      >
        <motion.div variants={item} className="flex flex-col items-center hover:opacity-100 transition-opacity duration-300 hover:grayscale-0">
          <span className="font-bold tracking-[0.5em] text-xl">HDFC BANK</span>
          <span className="text-[8px] uppercase tracking-widest mt-1">Ex-Manager</span>
        </motion.div>
        <motion.div variants={item} className="flex flex-col items-center hover:opacity-100 transition-opacity duration-300 hover:grayscale-0">
          <span className="font-bold tracking-[0.5em] text-xl">ANZ BANK</span>
          <span className="text-[8px] uppercase tracking-widest mt-1">Ex-Associate Director</span>
        </motion.div>
        <motion.div variants={item} className="flex flex-col items-center hover:opacity-100 transition-opacity duration-300 hover:grayscale-0">
          <span className="font-bold tracking-[0.5em] text-xl font-serif">KINTSUGII</span>
          <span className="text-[8px] uppercase tracking-widest mt-1">Wealth Advisory</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
