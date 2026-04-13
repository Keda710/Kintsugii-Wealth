import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'motion/react';

const PORTFOLIOS = [
  {
    name: "Capital Preservation",
    desc: "For those prioritizing safety and steady income over high growth.",
    allocation: [
      { name: "Debt", value: 70, color: "#0A1A2F" },
      { name: "Equity", value: 20, color: "#A87F4A" },
      { name: "Gold", value: 10, color: "#C0C0C0" }
    ]
  },
  {
    name: "Balanced Growth",
    desc: "A core strategy designed to capture market upside while maintaining a safety net.",
    allocation: [
      { name: "Equity", value: 50, color: "#A87F4A" },
      { name: "Debt", value: 40, color: "#0A1A2F" },
      { name: "Gold", value: 10, color: "#C0C0C0" }
    ]
  },
  {
    name: "Capital Expansion",
    desc: "Aggressive allocation for long-term wealth compounding and inflation beat.",
    allocation: [
      { name: "Equity", value: 80, color: "#A87F4A" },
      { name: "Debt", value: 10, color: "#0A1A2F" },
      { name: "Gold", value: 10, color: "#C0C0C0" }
    ]
  }
];

export function Portfolios() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">Sample Architectures</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-navy mb-6">Tailored Asset Allocation</h3>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Every legacy is unique. We architect diverse portfolios that synchronize with your risk profile and financial objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {PORTFOLIOS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-sm group"
            >
              <h4 className="font-serif text-2xl text-navy text-center mb-4">{item.name}</h4>
              <p className="text-slate-400 text-xs text-center mb-10 min-h-[40px] leading-relaxed italic">
                "{item.desc}"
              </p>

              <div className="h-[200px] w-full mb-10">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={item.allocation}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {item.allocation.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                {item.allocation.map((alloc, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: alloc.color }}></div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-navy/60">{alloc.name}</span>
                    </div>
                    <span className="text-sm font-bold text-navy">{alloc.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
