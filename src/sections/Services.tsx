import React from 'react';
import { motion } from 'motion/react';
import {
  Landmark,
  HeartPulse,
  Home,
  FileText,
  Sunset,
  GraduationCap,
  Gem
} from 'lucide-react';

const SERVICES_LIST = [
  {
    title: 'Wealth Management',
    description: 'Bespoke portfolio management and asset allocation strategies to compound your net worth.',
    icon: Landmark,
  },
  {
    title: 'Financial Health Checkup',
    description: 'Comprehensive analysis of your current financial standing to align with your life goals.',
    icon: HeartPulse,
  },
  {
    title: 'Estate Investment Planning',
    description: 'Strategic succession planning to ensure seamless intergenerational wealth transfer.',
    icon: Home,
  },
  {
    title: 'Tax Planning',
    description: 'Optimized structuring of investments to maximize post-tax returns legally and efficiently.',
    icon: FileText,
  },
  {
    title: 'Retirement Planning',
    description: 'Building robust corpus strategies to secure financial independence in your golden years.',
    icon: Sunset,
  },
  {
    title: 'Child Education & Investment Planning',
    description: 'Securing your children\'s future and aspirations through dedicated, inflation-beating funds.',
    icon: GraduationCap,
  },
  {
    title: 'Marriage Investment Planning',
    description: 'Dedicated financial roadmaps to fund dream weddings without compromising long-term goals.',
    icon: Gem,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Corner Element */}
      <motion.div 
        animate={{ y: [0, -25, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-10%] -right-10 w-96 h-96 border-[8px] border-gold/40 rounded-full pointer-events-none opacity-80" 
      />
      <motion.div 
        animate={{ x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] -left-20 w-72 h-72 bg-gold/20 rounded-full blur-3xl pointer-events-none opacity-60" 
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="heading-md text-navy mb-4">What We Serve</h2>
            <p className="text-muted">
              End-to-end financial paradigms customized for every stage of your life and legacy.
            </p>
          </div>
          <div className="h-[1px] flex-grow bg-slate-200 mx-8 hidden lg:block" />
          <div className="text-[10px] uppercase tracking-widest font-bold text-gold shrink-0 bg-white px-4 py-2 rounded-full shadow-sm border border-gold/10">Our Services</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover group flex flex-col"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-500 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-[17px] font-bold text-navy mb-3 leading-snug">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-auto">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
