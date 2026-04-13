import { motion } from 'motion/react';
import { TrendingUp, Globe, Users, Zap } from 'lucide-react';

export function IndiaDecade() {
  const pillars = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Demographic Dividend",
      desc: "With a median age of 28, India possesses the world's largest young, productive workforce, driving unparalleled domestic consumption and global service exports."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digital Infrastructure",
      desc: "Lowest data costs globally and the unified public digital stack (UPI/ONDC) have leapfrogged traditional development cycles, creating a high-velocity economy."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Supply Chain Shift",
      desc: "As the world seeks 'China+1' strategy, India's manufacturing capability and policy initiatives like PLI are attracting massive foreign direct investment."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Financially Savvy Savings",
      desc: "The 'Financialization of Savings' is underway. Household capital is moving from physical assets like gold/land into financial assets, fueling capital markets."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-6">Institutional Research</h2>
            <h3 className="font-serif text-4xl lg:text-6xl text-navy mb-8 leading-tight">
              The Structural Case <br /> for <span className="text-gold italic">India Wealth</span>
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed mb-10">
              <p>
                We believe the next decade belongs to Bharat. As the nation prepares to become the world's 3rd largest economy, the wealth creation opportunity is not just cyclical—it is structural.
              </p>
              <p>
                At Kintsugii Wealth, our investment committee focuses on "Alpha Generation" by identifying the tectonic shifts in the Indian economy before they become mainstream news.
              </p>
            </div>
            <div className="p-8 border-l-4 border-gold bg-white shadow-xl">
              <span className="text-3xl font-serif text-navy block mb-2">US$ 7 Trillion</span>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Projected GDP by 2030</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 border border-slate-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-navy mb-4">{pillar.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
