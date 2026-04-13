import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Anchor, BarChart } from 'lucide-react';

export function WealthProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Blueprinting",
      description: "We conduct a comprehensive audit of your existing assets, liabilities, and multi-generational goals to establish your baseline."
    },
    {
      number: "02",
      icon: Compass,
      title: "Strategic Architecture",
      description: "We design a customized wealth framework utilizing proprietary asset allocation models and risk mitigation strategies."
    },
    {
      number: "03",
      icon: Anchor,
      title: "Implementation",
      description: "Execution of the blueprint using institutional-grade investment vehicles, ensuring tax efficiency and precise alignment."
    },
    {
      number: "04",
      icon: BarChart,
      title: "Active Monitoring",
      description: "Continuous oversight, performance benchmarking, and tactical rebalancing to navigate evolving economic macro-environments."
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <section className="py-24 bg-navy relative">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-4">Our Methodology</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-6">The Wealth Architecture Process</h3>
          <p className="text-white/60 max-w-2xl mx-auto">A rigorous, four-step institutional framework designed to bring clarity, purpose, and optimal performance to your financial life.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setIsPaused(false)}
                className={`p-8 border relative transition-all duration-500 cursor-pointer ${
                  isActive ? 'bg-gold border-gold scale-105 shadow-2xl z-10' : 'bg-navy border-white/10'
                }`}
              >
                <div className={`text-[10px] font-bold tracking-widest mb-8 transition-colors duration-500 ${
                  isActive ? 'text-navy/40' : 'text-white/30'
                }`}>{step.number}</div>
                
                <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-8 transition-colors duration-500 ${
                  isActive ? 'bg-white/30' : 'bg-white/5'
                }`}>
                  <Icon className={`w-6 h-6 transition-colors duration-500 ${
                    isActive ? 'text-white' : 'text-gold'
                  }`} />
                </div>

                <h4 className={`font-bold mb-4 transition-colors duration-500 ${
                  isActive ? 'text-white' : 'text-white/90 group-hover:text-gold'
                }`}>{step.title}</h4>
                
                <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                  isActive ? 'text-navy font-medium' : 'text-white/50'
                }`}>
                  {step.description}
                </p>

                {/* Bottom line indicator for active state */}
                {isActive && (
                  <motion.div 
                    layoutId="active-process-line"
                    className="absolute bottom-0 left-0 w-full h-1 bg-white"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
