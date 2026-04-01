import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  ShieldCheck,
  Briefcase,
  University,
  Star,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/services';
import type { Service } from '../types';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  University,
  Star,
};

function ServiceIcon({ iconKey }: { iconKey: string }) {
  const Icon = ICON_MAP[iconKey] ?? Star;
  return <Icon className="w-6 h-6" />;
}

export function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Corner Element */}
      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, 10, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-5%] -left-10 w-64 h-64 bg-gold/40 rounded-full blur-2xl pointer-events-none opacity-80" 
      />
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[10%] -right-12 w-48 h-48 border-[2px] border-gold/20 rounded-lg pointer-events-none" 
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="heading-md text-navy mb-4">Bespoke Solutions</h2>
            <p className="text-muted">
              Sophisticated products and quantitative strategies designed for goal-oriented wealth growth and capital
              preservation.
            </p>
          </div>
          <div className="h-[1px] flex-grow bg-slate-100 mx-8 hidden lg:block" />
          <div className="text-[10px] uppercase tracking-widest font-bold text-gold shrink-0">Our Expertise</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
          {SERVICES.map((service: Service, idx: number) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 card-hover group"
            >
              <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                <ServiceIcon iconKey={service.icon} />
              </div>
              <h3 className="font-serif text-xl text-navy mb-4">{service.title}</h3>
              <p className="text-muted text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
