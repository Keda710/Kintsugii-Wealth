import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SocialLinks } from '../components/SocialLinks';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-paper">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 transform translate-x-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-gold">
              Priyank Vora | Principal Advisor
            </span>
          </motion.div>

          <h1 className="heading-lg text-navy mb-8">
            Preserving Private Wealth Through <span className="italic text-gold">Institutional</span> Precision.
          </h1>

          <p className="text-muted text-lg mb-10 max-w-lg">
            Direct boutique advisory led by 15+ years of leadership at HDFC and ANZ Bank. We architect resilient
            financial futures for HNI families.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#booking"
              className="group flex items-center gap-3 px-8 py-4 bg-navy text-white font-bold text-xs uppercase tracking-widest hover:bg-gold transition-all duration-300 shadow-xl shadow-navy/10"
            >
              Schedule Review
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative z-10 w-full max-w-[320px] aspect-[4/5] overflow-hidden border-[10px] border-white shadow-2xl">
            <img
              src="/Founder_photo.png"
              alt="Priyank Vora"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold opacity-20 -z-10 rounded-full blur-xl" 
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1 
            }}
            className="absolute -top-6 -right-6 w-32 h-32 border-[3px] border-gold/40 -z-10" 
          />
        </motion.div>
      </div>
    </section>
  );
}
