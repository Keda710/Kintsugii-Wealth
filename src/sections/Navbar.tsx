import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Kintsugii Wealth"
            className="h-10 w-auto object-contain border border-gold/30 shadow-lg transition-all duration-500 group-hover:opacity-90"
          />
          <span className="font-serif text-xl font-bold tracking-widest text-navy hidden sm:block">
            KINTSUGII <span className="text-gold group-hover:text-gold-light transition-colors">WEALTH</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Solutions', 'Services', 'Founder', 'Insights', 'Calculator'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-navy/70 hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-2.5 bg-navy text-white text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all duration-300"
          >
            Book Meeting
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
