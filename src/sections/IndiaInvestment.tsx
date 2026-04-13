import { motion } from 'motion/react';
import { TrendingUp, Building2, Mountain, Coins } from 'lucide-react';

export function IndiaInvestment() {
  const assetClasses = [
    {
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      title: "Indian Equities",
      subtitle: "The Growth Engine",
      content: "As India transitions into the world's third-largest economy, its corporate sector is undergoing a massive structural transformation. We identify high-conviction businesses driving the 'India Decade'—from manufacturing renaissance to digital infrastructure—capturing alpha through active equity mutual funds, PMS, and direct equity selection."
    },
    {
      icon: <Mountain className="w-8 h-8 text-gold" />,
      title: "Fixed Income & Bonds",
      subtitle: "The Stability Anchor",
      content: "In a world of macro uncertainty, Indian debt markets offer a compelling combination of sovereign stability and attractive real yields. We construct robust bond portfolios using AAA-rated corporate deposits, government securities, and dynamic debt funds to preserve capital and ensure predictable cash flows."
    },
    {
      icon: <Coins className="w-8 h-8 text-gold" />,
      title: "Gold",
      subtitle: "The Strategic Hedge",
      content: "Deeply entrenched in the Indian cultural psyche, gold remains the ultimate non-correlated asset. We modernize this traditional asset class by allocating capital into Sovereign Gold Bonds (SGBs) and Gold ETFs—delivering inflation protection, currency hedging, and tax efficiency without the burden of physical storage."
    },
    {
      icon: <Building2 className="w-8 h-8 text-gold" />,
      title: "Real Estate & REITs",
      subtitle: "The Tangible Yield",
      content: "Commercial and residential real estate in India's tier-1 hubs continue to demonstrate resilient demand. Beyond traditional property investments, we architect exposure through Real Estate Investment Trusts (REITs) and Alternative Investment Funds (AIFs), unlocking institutional-grade commercial yield for private portfolios."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-6">Macro Perspective</h2>
            <h3 className="font-serif text-4xl lg:text-5xl text-navy mb-6 leading-tight">
              Architecting Wealth in <br />
              <span className="italic text-slate-400">The Indian Century</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-slate-600 leading-relaxed max-w-xl">
              True wealth architecture doesn't rely on a single asset class. It requires a synchronized allocation across the entire economic spectrum. By harnessing India's distinct demographic and structural advantages, we build diversified portfolios that balance aggressive growth with ironclad preservation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {assetClasses.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-navy group-hover:border-navy transition-colors duration-500">
                  {asset.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xl text-navy">{asset.title}</h4>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold">{asset.subtitle}</span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed pl-[5.5rem]">
                {asset.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
