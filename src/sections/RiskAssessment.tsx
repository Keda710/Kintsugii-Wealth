import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RotateCcw, ShieldAlert, TrendingUp, Compass, AlertCircle } from 'lucide-react';

type QuestionType = 'netWorth' | 'allocation' | 'singleChoice';

interface BaseQuestion {
  type: QuestionType;
  question: string;
  subtitle?: string;
}

interface SingleChoiceQuestion extends BaseQuestion {
  type: 'singleChoice';
  options: { title: string; subtitle: string; score: number }[];
}

interface NetWorthQuestion extends BaseQuestion {
  type: 'netWorth';
}

interface AllocationQuestion extends BaseQuestion {
  type: 'allocation';
  fields: string[];
}

type Question = SingleChoiceQuestion | NetWorthQuestion | AllocationQuestion;

const QUESTIONS: Question[] = [
  {
    type: 'netWorth',
    question: "What is your total net worth?",
    subtitle: "(Excluding primary residence and net outstanding loans)"
  },
  {
    type: 'allocation',
    question: "How is your current wealth allocated?",
    subtitle: "(Please enter percentages. The sum of assets should be 100%)",
    fields: [
      "Savings Account & Fixed Deposits with banks",
      "Debt Mutual Funds",
      "Equity Mutual Funds",
      "Investment in Bonds",
      "Insurance",
      "Investment in Equities",
      "Real Estate (excluding % primary residence)",
      "Others (Gold, Art, etc.)"
    ]
  },
  {
    type: 'singleChoice',
    question: "What is your purpose of investing?",
    options: [
      { title: "Regular Cash Inflows", subtitle: "May need money periodically for expenses", score: 1 },
      { title: "Liquidity", subtitle: "May need money in short term", score: 2 },
      { title: "Growth", subtitle: "May need money in 2-3 years", score: 3 },
      { title: "Retirement", subtitle: "May need money in long-term", score: 4 }
    ]
  },
  {
    type: 'singleChoice',
    question: "What duration do you normally envisage for your investments?",
    options: [
      { title: "Less than six months", subtitle: "Immediate liquidity", score: 1 },
      { title: "Six months to one year", subtitle: "Short term horizon", score: 2 },
      { title: "One year to three years", subtitle: "Medium term horizon", score: 3 },
      { title: "More than three years", subtitle: "Long term horizon", score: 4 }
    ]
  },
  {
    type: 'singleChoice',
    question: "How much return do you expect from investments?",
    options: [
      { title: "0 - 5% p.a.", subtitle: "Relatively low risk of principal erosion or debt as alternative returns.", score: 1 },
      { title: "5 - 10% p.a.", subtitle: "Medium risk, medium returns", score: 2 },
      { title: "10 - 15% p.a.", subtitle: "Medium to high risk, high returns", score: 3 },
      { title: "> 15% p.a.", subtitle: "High risk, high returns", score: 4 }
    ]
  },
  {
    type: 'singleChoice',
    question: "What level of risk are you willing to take on your wealth?",
    options: [
      { title: "Low", subtitle: "Minimal risk", score: 1 },
      { title: "Medium", subtitle: "Small degree of risk to interest and/or principal", score: 2 },
      { title: "Medium to High", subtitle: "Principal investment could decline time to time", score: 3 },
      { title: "High", subtitle: "High volatility on investment", score: 4 }
    ]
  },
  {
    type: 'singleChoice',
    question: "Rate your ability to stick with an investment as its value fluctuates during a market cycle.",
    options: [
      { title: "Low", subtitle: "Unlikely to hold during volatility", score: 1 },
      { title: "Medium", subtitle: "Will hold with some concern", score: 2 },
      { title: "High", subtitle: "Comfortable holding through full cycles", score: 3 }
    ]
  }
];

export function RiskAssessment() {
  const [currentStep, setCurrentStep] = useState(0);

  // State for different inputs
  const [netWorth, setNetWorth] = useState<string>('');
  const [allocations, setAllocations] = useState<Record<string, number>>({});
  const [scores, setScores] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const q = QUESTIONS[currentStep];

  const handleNextStep = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleChoiceSelect = (score: number) => {
    setScores(prev => [...prev, score]);
    handleNextStep();
  };

  const handleAllocationChange = (field: string, val: string) => {
    const num = parseInt(val, 10);
    setAllocations(prev => ({ ...prev, [field]: isNaN(num) ? 0 : num }));
  };

  const totalAllocation = Object.values(allocations).reduce((a, b) => a + b, 0);

  const calculateResult = () => {
    const totalScore = scores.reduce((a, b) => a + b, 0);
    // Min score = 5, Max score = 19
    if (totalScore <= 10) {
      return {
        profile: "Lower Risk",
        description: "Your priority is safeguarding capital with minimal volatility exposure.",
        equity: 25,
        bond: 70,
        gold: 5,
        icon: <ShieldAlert className="w-8 h-8 text-gold" />
      };
    } else if (totalScore <= 15) {
      return {
        profile: "Moderate Risk",
        description: "You seek a balanced approach, accepting short-term volatility for steady long-term growth.",
        equity: 55,
        bond: 40,
        gold: 5,
        icon: <Compass className="w-8 h-8 text-gold" />
      };
    } else {
      return {
        profile: "Aggressive Risk",
        description: "You have a high tolerance for risk and prioritize maximum wealth generation.",
        equity: 75,
        bond: 20,
        gold: 5,
        icon: <TrendingUp className="w-8 h-8 text-gold" />
      };
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores([]);
    setNetWorth('');
    setAllocations({});
    setIsComplete(false);
  };

  const result = isComplete ? calculateResult() : null;

  return (
    <section id="risk-assessment" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-md text-navy mb-4">Discover Your Risk Profile</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Take our comprehensive 7-step assessment to help us precisely understand your investment appetite and suggest an optimal institutional-grade asset allocation.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-2xl rounded-2xl min-h-[500px] flex flex-col relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex-grow flex flex-col"
              >
                <div className="mb-6 flex items-center gap-1.5">
                  {QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= currentStep ? 'bg-gold' : 'bg-slate-100'}`}
                    />
                  ))}
                </div>

                <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-2">
                  Question {currentStep + 1} of {QUESTIONS.length}
                </h3>
                <h4 className="text-2xl font-serif text-navy leading-tight mb-2">
                  {q.question}
                </h4>
                {q.subtitle && (
                  <p className="text-muted text-sm mb-8">{q.subtitle}</p>
                )}

                <div className="flex-grow flex flex-col justify-center">
                  {/* Rendering Net Worth Question */}
                  {q.type === 'netWorth' && (
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <button onClick={() => setNetWorth('1000000')} className="flex-1 py-4 border border-slate-200 rounded-xl hover:border-gold hover:bg-gold/5 text-navy font-medium transition-all">₹ 10 Lacs</button>
                        <button onClick={() => setNetWorth('5000000')} className="flex-1 py-4 border border-slate-200 rounded-xl hover:border-gold hover:bg-gold/5 text-navy font-medium transition-all">₹ 50 Lacs</button>
                        <button onClick={() => setNetWorth('10000000')} className="flex-1 py-4 border border-slate-200 rounded-xl hover:border-gold hover:bg-gold/5 text-navy font-medium transition-all">₹ 1 Crore</button>
                      </div>
                      <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-navy font-bold">₹</span>
                        <input
                          type="text"
                          value={netWorth}
                          onChange={(e) => setNetWorth(e.target.value.replace(/\D/g, ''))}
                          placeholder="Or enter specific amount manually"
                          className="w-full pl-12 pr-6 py-5 bg-slate-50 border-none rounded-xl text-navy font-bold focus:ring-1 focus:ring-gold outline-none"
                        />
                      </div>
                      <button
                        onClick={handleNextStep}
                        disabled={!netWorth}
                        className="w-full mt-4 py-5 bg-navy text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue
                      </button>
                    </div>
                  )}

                  {/* Rendering Allocation Question */}
                  {q.type === 'allocation' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {q.fields.map((field) => (
                          <div key={field} className="flex items-center justify-between border border-slate-100 bg-slate-50 p-4 rounded-xl">
                            <span className="text-xs font-bold text-navy uppercase tracking-wider">{field}</span>
                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                min="0" max="100"
                                value={allocations[field] || ''}
                                onChange={(e) => handleAllocationChange(field, e.target.value)}
                                className="w-16 p-2 text-center text-navy font-bold border border-slate-200 rounded-lg outline-none focus:border-gold"
                              />
                              <span className="text-navy font-bold">%</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className={`p-4 rounded-xl flex items-center justify-between transition-colors ${totalAllocation === 100 ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          <span className="text-sm font-bold uppercase tracking-widest">Total Allocation</span>
                        </div>
                        <span className="text-lg font-bold">{totalAllocation}%</span>
                      </div>

                      <button
                        onClick={handleNextStep}
                        disabled={totalAllocation !== 100}
                        className="w-full py-5 bg-navy text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {totalAllocation === 100 ? "Continue" : "Sum must be exactly 100%"}
                      </button>
                    </div>
                  )}

                  {/* Rendering Single Choice Questions */}
                  {q.type === 'singleChoice' && (
                    <div className="space-y-4">
                      {q.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleChoiceSelect(option.score)}
                          className="w-full text-left p-6 border border-slate-200 hover:border-gold hover:bg-gold/5 transition-all duration-300 group rounded-xl flex justify-between items-center"
                        >
                          <div>
                            <span className="block text-navy text-base font-bold mb-1">{option.title}</span>
                            {option.subtitle && <span className="block text-muted text-sm">{option.subtitle}</span>}
                          </div>
                          <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full text-center flex-grow flex flex-col justify-center py-8"
              >
                <div className="mx-auto w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  {result?.icon}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-2">
                  Your Profile Result
                </h3>
                <h4 className="text-4xl font-serif text-navy mb-4">
                  {result?.profile}
                </h4>
                <p className="text-muted max-w-md mx-auto mb-12">
                  {result?.description}
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 mb-8">
                  <h5 className="font-bold text-navy text-sm uppercase tracking-widest mb-8">
                    Suggested Strategic Allocation
                  </h5>

                  {/* Allocation Visual Bar (3 Segments) */}
                  <div className="relative h-12 w-full rounded-full overflow-hidden flex mb-6">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result?.equity}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                      className="h-full bg-gold flex items-center justify-center relative border-r border-white/20"
                    >
                      {result!.equity >= 15 && (
                        <span className="text-white text-xs font-bold z-10">
                          {result?.equity}% Equity
                        </span>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result?.bond}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                      className="h-full bg-navy flex items-center justify-center relative border-r border-white/20"
                    >
                      {result!.bond >= 15 && (
                        <span className="text-white text-xs font-bold z-10">
                          {result?.bond}% Debt
                        </span>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result?.gold}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                      className="h-full bg-slate-300 flex items-center justify-center relative"
                    >
                      <span className="text-navy text-xs font-bold z-10">
                        {result?.gold}% Gold
                      </span>
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-6 text-xs text-muted font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gold rounded-full" />
                      <span>Equity Core</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-navy rounded-full" />
                      <span>Debt / Fixed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-slate-300 rounded-full" />
                      <span>Gold / Alternatives</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy hover:text-gold transition-colors duration-300"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retake Assessment
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
