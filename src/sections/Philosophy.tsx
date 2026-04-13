import { motion } from 'motion/react';
import { Target, Shield, LineChart } from 'lucide-react';

export function Philosophy() {
  const pillars = [
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Preservation First",
      description: "Like kintsugi repairing broken pottery with gold, we identify vulnerabilities in existing portfolios and fortify them against market volatility."
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Purpose-Driven Architecture",
      description: "Wealth without purpose is merely capital. We architecture your wealth to serve specific life goals, family legacy, and philanthropic ambitions."
    },
    {
      icon: <LineChart className="w-8 h-8 text-gold" />,
      title: "Institutional Agility",
      description: "We utilize institutional-grade strategies combined with boutique agility to navigate complex market cycles effectively."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-6">Our Philosophy</h2>
            <h3 className="font-serif text-4xl lg:text-5xl text-navy mb-8 leading-tight">
              The Art of <br /> <span className="text-gold italic">Financial Repair</span>
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The Japanese art of Kintsugii teaches us that broken objects are not something to hide, but to display with pride. The repair becomes part of the history of an object, making it more beautiful and resilient than before.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              We apply this exact philosophy to wealth management. We take fragmented, underperforming, or unnecessarily complex financial situations and restructure them with precision, creating a unified, stronger financial architecture.
            </p>
          </motion.div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-6 p-8 bg-slate-50 border border-slate-100 hover:border-gold/30 transition-colors"
              >
                <div className="shrink-0">{pillar.icon}</div>
                <div>
                  <h4 className="font-bold text-navy mb-3">{pillar.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
