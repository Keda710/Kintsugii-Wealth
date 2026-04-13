import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, ArrowRight, RefreshCcw, ShieldCheck, Zap, Scale } from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    text: "What is your primary investment goal?",
    options: [
      { label: "Capital Preservation", value: "conservative", desc: "Avoiding losses is more important than returns." },
      { label: "Steady Wealth Growth", value: "moderate", desc: "A balance between risk and reward." },
      { label: "Aggressive Expansion", value: "aggressive", desc: "Maximize returns over a long horizon." }
    ]
  },
  {
    id: 2,
    text: "What is your typical investment horizon?",
    options: [
      { label: "1 - 3 Years", value: "conservative" },
      { label: "3 - 7 Years", value: "moderate" },
      { label: "7+ Years", value: "aggressive" }
    ]
  },
  {
    id: 3,
    text: "How would you react to a 15% market dip in a month?",
    options: [
      { label: "Sell immediately", value: "conservative" },
      { label: "Hold and wait", value: "moderate" },
      { label: "Buy more at discount", value: "aggressive" }
    ]
  }
];

const PROFILES = {
  conservative: {
    name: "Preservation Focused",
    icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
    allocation: { equity: "20%", debt: "70%", gold: "10%" },
    strategy: "Focuses on high-quality debt instruments and liquid assets to ensure your capital remains intact while beating inflation."
  },
  moderate: {
    name: "Balanced Growth",
    icon: <Scale className="w-12 h-12 text-gold" />,
    allocation: { equity: "50%", debt: "40%", gold: "10%" },
    strategy: "A core-and-satellite approach designed to capture market upside while maintaining a safety net for volatility."
  },
  aggressive: {
    name: "Capital Expansion",
    icon: <Zap className="w-12 h-12 text-orange-500" />,
    allocation: { equity: "80%", debt: "10%", gold: "10%" },
    strategy: "High-exposure to mid/small cap equities and sectoral themes to maximize long-term wealth compounding."
  }
};

export function RiskProfiler() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ conservative: 0, moderate: 0, aggressive: 0 });
  const [result, setResult] = useState<string | null>(null);

  const handleOption = (val: string) => {
    const nextScores = { ...scores, [val]: (scores as any)[val] + 1 };
    setScores(nextScores);
    
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate winner
      const winner = Object.keys(nextScores).reduce((a, b) => (nextScores as any)[a] >= (nextScores as any)[b] ? a : b);
      setResult(winner);
    }
  };

  const reset = () => {
    setStep(0);
    setScores({ conservative: 0, moderate: 0, aggressive: 0 });
    setResult(null);
  };

  return (
    <section className="py-24 bg-navy relative min-h-[600px] flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">Diagnostic Tool</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-6">Institutional Risk Profiler</h3>
          <p className="text-white/50 max-w-xl mx-auto italic text-sm">Understand your psychological financial blueprint in 60 seconds.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-between items-center mb-12">
                   <span className="text-gold font-bold tracking-widest text-[10px] uppercase">Question {step + 1} / {QUESTIONS.length}</span>
                   <div className="flex gap-1">
                     {[0, 1, 2].map(i => (
                       <div key={i} className={`h-1 w-8 rounded-full ${i <= step ? 'bg-gold' : 'bg-white/10'}`}></div>
                     ))}
                   </div>
                </div>
                
                <h4 className="text-2xl md:text-3xl text-white font-serif mb-12 leading-tight">
                  {QUESTIONS[step].text}
                </h4>

                <div className="space-y-4">
                  {QUESTIONS[step].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOption(opt.value)}
                      className="w-full text-left p-6 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 transition-all rounded-xl group flex justify-between items-center"
                    >
                      <div>
                        <p className="text-white font-bold mb-1">{opt.label}</p>
                        {opt.desc && <p className="text-white/40 text-xs leading-relaxed">{opt.desc}</p>}
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mb-8 flex justify-center">
                  {PROFILES[result as keyof typeof PROFILES].icon}
                </div>
                <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Your Recommended Profile</h4>
                <h3 className="text-4xl text-white font-serif mb-6">{PROFILES[result as keyof typeof PROFILES].name}</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {Object.entries(PROFILES[result as keyof typeof PROFILES].allocation).map(([k, v]) => (
                    <div key={k} className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{k}</p>
                      <p className="text-white text-xl font-bold">{v}</p>
                    </div>
                  ))}
                </div>

                <p className="text-white/60 leading-relaxed mb-10 max-w-md mx-auto italic text-sm">
                  "{PROFILES[result as keyof typeof PROFILES].strategy}"
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={reset}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white/60 hover:text-white transition-all text-sm uppercase tracking-widest font-bold border border-white/10 hover:border-white/20"
                  >
                    <RefreshCcw className="w-4 h-4" /> Reset Profiler
                  </button>
                  <a 
                    href="#booking"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy hover:bg-white transition-all text-sm uppercase tracking-widest font-bold"
                  >
                    Get Architectural Blueprint
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
