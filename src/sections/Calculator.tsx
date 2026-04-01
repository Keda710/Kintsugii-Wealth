import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalculatorIcon, ArrowRight, IndianRupee, TrendingUp } from 'lucide-react';

export function Calculator() {
  const [type, setType] = useState<'sip' | 'lumpsum'>('sip');
  const [amount, setAmount] = useState<number>(type === 'sip' ? 10000 : 500000);
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  // Handle toggle accurately updating default amounts to avoid weird states
  const handleTypeChange = (newType: 'sip' | 'lumpsum') => {
    setType(newType);
    if (newType === 'sip' && amount > 100000) setAmount(10000);
    if (newType === 'lumpsum' && amount < 50000) setAmount(100000);
  };

  // Ensure only positive values are entered in manual inputs
  const handlePositiveInput = (value: string, setter: (val: number) => void) => {
    if (value === '') {
      setter(0);
      return;
    }
    const num = Number(value);
    if (!isNaN(num)) {
      setter(Math.max(0, num));
    }
  };

  const results = useMemo(() => {
    let investedAmount = 0;
    let estReturns = 0;
    let futureValue = 0;

    const r = rate / 100;
    
    if (type === 'lumpsum') {
      investedAmount = amount;
      futureValue = amount * Math.pow(1 + r, years);
      estReturns = futureValue - investedAmount;
    } else {
      // SIP Calculation
      investedAmount = amount * 12 * years;
      const monthlyRate = r / 12;
      const months = years * 12;
      futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      estReturns = futureValue - investedAmount;
    }

    return {
      investedAmount: Math.round(investedAmount),
      estReturns: Math.round(estReturns),
      futureValue: Math.round(futureValue)
    };
  }, [type, amount, rate, years]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <motion.div 
        animate={{ x: ["25%", "20%", "25%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 pointer-events-none" 
      />
      
      {/* Decorative Corner Element */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 -left-16 w-48 h-48 border-[6px] border-gold/40 rounded-xl pointer-events-none opacity-80" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 -right-20 w-64 h-64 border-[1px] border-gold/30 rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <CalculatorIcon className="w-5 h-5" />
              </div>
              <h2 className="heading-md text-navy">Wealth Calculator</h2>
            </div>
            <p className="text-muted">
              Project your financial trajectory. Visualize how systematic investments or a lump sum deployment can compounds over time to achieve your ambitions.
            </p>
          </div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-gold shrink-0 bg-white px-4 py-2 rounded-full shadow-sm border border-gold/10">
            Compound Your Wealth
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-navy/5 border border-slate-100"
          >
            {/* Toggle */}
            <div className="flex p-1 bg-slate-100 rounded-lg mb-10 w-fit">
              <button
                onClick={() => handleTypeChange('sip')}
                className={`px-8 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                  type === 'sip' 
                    ? 'bg-white text-navy shadow-sm' 
                    : 'text-slate-500 hover:text-navy'
                }`}
              >
                SIP 
              </button>
              <button
                onClick={() => handleTypeChange('lumpsum')}
                className={`px-8 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                  type === 'lumpsum' 
                    ? 'bg-white text-navy shadow-sm' 
                    : 'text-slate-500 hover:text-navy'
                }`}
              >
                Lump Sum
              </button>
            </div>

            <div className="space-y-10">
              {/* Amount Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-slate-700">
                    {type === 'sip' ? 'Monthly Investment' : 'Total Investment'}
                  </label>
                  <div className="flex items-center bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                    <IndianRupee className="w-4 h-4 text-slate-400 mr-1" />
                    <input 
                      type="number"
                      value={amount || ''}
                      onChange={(e) => handlePositiveInput(e.target.value, setAmount)}
                      className="bg-transparent text-navy font-semibold w-24 outline-none text-right"
                      min={0}
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  min={type === 'sip' ? 500 : 10000} 
                  max={type === 'sip' ? 1000000 : 100000000} 
                  step={type === 'sip' ? 500 : 10000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-gold h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Rate Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-slate-700">
                    Expected Return Rate (p.a)
                  </label>
                  <div className="flex items-center bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                    <input 
                      type="number"
                      value={rate || ''}
                      onChange={(e) => handlePositiveInput(e.target.value, setRate)}
                      className="bg-transparent text-navy font-semibold w-16 outline-none text-right"
                      min={0}
                      max={30}
                    />
                    <span className="text-slate-500 ml-1 font-medium">%</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={30} 
                  step={0.5}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-gold h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Years Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-slate-700">
                    Time Period
                  </label>
                  <div className="flex items-center bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                    <input 
                      type="number"
                      value={years || ''}
                      onChange={(e) => handlePositiveInput(e.target.value, setYears)}
                      className="bg-transparent text-navy font-semibold w-16 outline-none text-right"
                      min={0}
                      max={40}
                    />
                    <span className="text-slate-500 ml-2 font-medium">Years</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={40} 
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-gold h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </motion.div>

          {/* Results Summary */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 bg-navy text-white p-8 md:p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Texture inside card */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold via-navy to-navy" />
            
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-gold/80 text-sm font-medium uppercase tracking-wider mb-2">Estimated Returns</h3>
                <div className="font-serif text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white">
                  {formatCurrency(results.futureValue)}
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 font-light">Invested Amount</span>
                  <span className="font-medium text-lg">{formatCurrency(results.investedAmount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 font-light">Wealth Gained</span>
                  <span className="font-medium text-lg text-emerald-400">+{formatCurrency(results.estReturns)}</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-gold shrink-0" />
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  Your wealth could multiply by <strong className="text-white font-medium">{(results.futureValue / results.investedAmount || 1).toFixed(1)}x</strong> over {years} years. Early commitments compound exponentially.
                </p>
              </div>
            </div>
            
            <a href="#booking" className="relative z-10 mt-8 w-full block group text-center">
              <div className="bg-gold text-white tracking-wide uppercase text-sm font-bold py-4 px-6 relative overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_-10px_rgba(197,160,89,0.5)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Plan Your Wealth <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
