import { motion } from 'motion/react';
import { Calendar, FileText, Settings, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    title: "The Discovery Audit",
    time: "Day 01 - 15",
    desc: "A deep 'Archaeological' dive into your existing assets, liabilities, and multi-generational objectives.",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    title: "Strategic Architecture",
    time: "Day 15 - 30",
    desc: "Creation of your master blueprint using proprietary asset allocation and risk-mitigation models.",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Precise Implementation",
    time: "Day 30 - 45",
    desc: "Execution of the blueprint with institutional-grade products and tax-optimized structures.",
    icon: <Settings className="w-5 h-5" />
  },
  {
    title: "The Guardian Vigil",
    time: "Ongoing",
    desc: "Active monitoring and tactical rebalancing to ensure your wealth stays fortified against market shifts.",
    icon: <ShieldCheck className="w-5 h-5" />
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">The Kintsugii Path</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-navy mb-6">Your Onboarding Journey</h3>
          <p className="text-slate-500 max-w-xl mx-auto italic text-sm">A rigorous, master-planned transition from fragmentation to architecture.</p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[2.5rem] left-10 right-10 h-0.5 bg-slate-100"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center mb-10 relative z-10 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold mb-2">{step.time}</span>
                  <h4 className="font-bold text-navy text-lg mb-4">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
