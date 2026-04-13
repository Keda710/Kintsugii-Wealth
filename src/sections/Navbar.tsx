import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

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
        isScrolled ? 'glass-nav py-4 shadow-lg bg-white/95 backdrop-blur-md border-b border-slate-200/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Kintsugii Wealth"
            className="h-10 w-auto object-contain border border-gold/30 shadow-lg transition-all duration-500 group-hover:opacity-90"
          />
          <span className="font-serif text-xl font-bold tracking-widest text-navy hidden sm:block">
            KINTSUGII <span className="text-gold group-hover:text-gold-light transition-colors">WEALTH</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Our Firm', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Insights', path: '/insights' },
            { name: 'Tools', path: '/tools' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-navy/70 hover:text-gold transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-navy text-white text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all duration-300"
          >
            Book Meeting
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
