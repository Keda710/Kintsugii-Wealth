import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingDown, PieChart, Info, IndianRupee } from 'lucide-react';

export function RetirementSimulator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentExpenses, setCurrentExpenses] = useState(100000); // 1 Lakh
  const [inflationRate, setInflationRate] = useState(6);
  const [expectedReturns, setExpectedReturns] = useState(10);

  const stats = useMemo(() => {
    const yearsToRetire = retirementAge - currentAge;
    // Future Monthly Expense = P * (1 + r)^n
    const futureMonthlyExpense = currentExpenses * Math.pow(1 + (inflationRate / 100), yearsToRetire);
    
    // Using a rule of thumb: 20x annual expenses as a base corpus for a 4% withdrawal rate
    const futureAnnualExpense = futureMonthlyExpense * 12;
    const requiredCorpus = futureAnnualExpense * 25; // 25x rule

    return {
      yearsToRetire,
      futureMonthlyExpense,
      requiredCorpus
    };
  }, [currentAge, retirementAge, currentExpenses, inflationRate]);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">Precision Planning</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-navy mb-6">Lifestyle Retirement Simulator</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">Standard calculators ignore the silent thief: <span className="text-navy font-bold">Inflation</span>. We help you visualize your real-world future expenses.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-10 bg-slate-50 p-8 border border-slate-100 h-full">
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/60">Current Age</label>
                <span className="text-navy font-bold">{currentAge} Years</span>
              </div>
              <input 
                type="range" min="20" max="60" value={currentAge} 
                onChange={(e) => setCurrentAge(parseInt(e.target.value))}
                className="w-full accent-navy"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/60">Retirement Age</label>
                <span className="text-navy font-bold">{retirementAge} Years</span>
              </div>
              <input 
                type="range" min={currentAge + 1} max="80" value={retirementAge} 
                onChange={(e) => setRetirementAge(parseInt(e.target.value))}
                className="w-full accent-navy"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/60">Monthly Expenses (Today)</label>
              </div>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/40" />
                <input 
                  type="number" value={currentExpenses} 
                  onChange={(e) => setCurrentExpenses(parseInt(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-gold outline-none font-bold text-navy"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/60">Annual Inflation</label>
                  <TrendingDown className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-navy font-bold">{inflationRate}%</span>
              </div>
              <input 
                type="range" min="4" max="10" step="0.5" value={inflationRate} 
                onChange={(e) => setInflationRate(parseFloat(e.target.value))}
                className="w-full accent-navy"
              />
              <p className="text-[9px] text-slate-400 italic">India's historical average: ~6%</p>
            </div>
          </div>

          {/* Visualization / Results */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                key={stats.futureMonthlyExpense}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 bg-navy text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:scale-110 transition-transform"></div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-6">Future Monthly Needs</h4>
                <p className="text-4xl md:text-5xl font-serif mb-4">₹{Math.round(stats.futureMonthlyExpense).toLocaleString()}</p>
                <p className="text-white/40 text-xs leading-relaxed">
                  In {stats.yearsToRetire} years, this amount will buy you exactly what ₹{currentExpenses.toLocaleString()} buys you today.
                </p>
              </motion.div>

              <motion.div 
                key={stats.requiredCorpus}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 bg-gold text-navy relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-navy/5 -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:scale-110 transition-transform"></div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-navy/60 mb-6">Target Corpus Required</h4>
                <p className="text-4xl md:text-5xl font-serif mb-4">₹{(stats.requiredCorpus / 10000000).toFixed(2)} Cr</p>
                <p className="text-navy/50 text-xs leading-relaxed">
                  Estimated total capital needed at age {retirementAge} to sustain your lifestyle indefinitely using institutional-grade withdrawal strategies.
                </p>
              </motion.div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
              <div className="w-24 h-24 bg-white flex items-center justify-center rounded-full shadow-lg shrink-0 border border-slate-100">
                <PieChart className="w-10 h-10 text-gold" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-navy">
                  <Info className="w-4 h-4 text-gold" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Strategic Insight</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "At {inflationRate}% inflation, your purchasing power drops by 50% every {Math.round(72/inflationRate)} years. Building a 'Lifestyle Corpus' isn't about saving—it's about architecture."
                </p>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="#booking"
                className="inline-flex items-center gap-3 bg-navy text-white px-10 py-5 hover:bg-gold hover:text-navy transition-all duration-500 uppercase tracking-widest text-[11px] font-bold group"
              >
                Request Custom Retirement Audit
                <IndianRupee className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
