import { motion } from 'motion/react';
import { Star, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export function Insights() {
  return (
    <section id="insights" className="section-padding bg-paper border-y border-slate-100 relative overflow-hidden">
      {/* Decorative Corner Element */}
      <motion.div 
        animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[10%] -left-20 w-64 h-64 border-[4px] border-gold/40 rotate-45 pointer-events-none opacity-80" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[5%] -right-10 w-32 h-32 bg-gold/20 rounded-full blur-xl pointer-events-none" 
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-md text-navy mb-4">Client Insights</h2>
          <div className="w-12 h-[2px] bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testi) => (
            <motion.div
              key={testi.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-12 shadow-sm border border-slate-100 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-xl italic text-navy/80 mb-8 leading-relaxed">"{testi.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={testi.image} alt={testi.author} className="w-12 h-12 rounded-full grayscale" />
                <div>
                  <div className="font-bold text-xs uppercase tracking-widest text-navy">{testi.author}</div>
                  <div className="text-[10px] text-gold font-semibold uppercase tracking-wider mt-1">{testi.role}</div>
                </div>
              </div>
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"
              >
                <TrendingUp className="w-16 h-16" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
