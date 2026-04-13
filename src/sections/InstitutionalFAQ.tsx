import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Shield, Trophy, Users, Landmark, Scale, Zap, Globe, TrendingUp } from 'lucide-react';

const FAQS = [
  {
    question: "Why the name Kintsugii?",
    answer: "Historically, Kintsugi is the Japanese art of repairing broken pottery with liquid gold, making the object stronger and more beautiful than before. We apply this philosophy to wealth: transforming fragmented financial lives into resilient, fortified legacies of gold.",
    icon: <Landmark className="w-5 h-5" />
  },
  {
    question: "What is your Fiduciary Standard?",
    answer: "We operate on an institutional-grade fiduciary model, meaning we have a legal and moral obligation to act solely in your best interest. We are entirely transparent, fee-only advisors, removing the conflict of interest found in traditional banking.",
    icon: <Shield className="w-5 h-5" />
  },
  {
    question: "Is 'Market Timing' the secret to high returns?",
    answer: "A common myth is that entry/exit timing is the key to wealth. In reality, 'Time in the Market' significantly outperforms 'Timing the Market'. Our architecture focuses on long-term structural compounding rather than speculative short-term moves.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    question: "Is Real Estate safer than Financial Assets?",
    answer: "In India, real estate is often misinterpreted as 'safer' due to its physical nature. However, it lacks liquidity and is highly concentrated risk. A balanced architecture of Equities, Gold, and Debt provides superior risk-adjusted returns and instant liquidity.",
    icon: <Globe className="w-5 h-5" />
  },
  {
    question: "Does higher risk always lead to higher returns?",
    answer: "Not necessarily. There is 'good' risk (systematic) and 'bad' risk (uncompensated). Our goal is to eliminate bad risks—like poor diversification or high fees—while architecting a path that captures the market's systematic growth premiums.",
    icon: <Scale className="w-5 h-5" />
  },
  {
    question: "Should I wait for a 'Market Dip' to start?",
    answer: "Waiting for a dip often leads to 'Analysis Paralysis' and missed compounding. Systematic allocation—entering the market in a disciplined, architected manner—is the most reliable way to build wealth across volatile economic cycles.",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    question: "Who is an ideal Kintsugii client?",
    answer: "Our architecture is designed for High-Net-Worth individuals, business owners, and multi-generational families who seek more than just stock tips. We serve those who want a synchronized, master-planned approach to their global assets.",
    icon: <Users className="w-5 h-5" />
  },
  {
    question: "What is the Boutique Advantage?",
    answer: "Unlike large retail banks, we offer a 'Concierge' experience. Every client has direct access to our investment committee and founder. We don't use generic models; every blueprint is custom-architected for your specific life goals.",
    icon: <Trophy className="w-5 h-5" />
  }
];

export function InstitutionalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">Our Beliefs</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-navy mb-6">Institutional FAQ</h3>
          <p className="text-slate-500 max-w-xl mx-auto italic text-sm">Philosophical foundations of the Kintsugii Wealth architecture.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`border transition-all duration-500 overflow-hidden ${
                  isOpen ? 'border-gold bg-slate-50' : 'border-slate-100 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-3 rounded-full transition-colors duration-500 ${
                      isOpen ? 'bg-navy text-gold' : 'bg-slate-50 text-slate-400 group-hover:text-navy'
                    }`}>
                      {faq.icon}
                    </div>
                    <span className={`font-serif text-lg md:text-xl transition-colors duration-500 ${
                      isOpen ? 'text-navy font-bold' : 'text-slate-600'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${
                    isOpen ? 'rotate-180 text-gold' : 'text-slate-300'
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pl-[5.5rem]">
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base border-l-2 border-gold/30 pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
            <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold mb-6">Have more specific technical questions?</p>
            <a 
              href="#booking"
              className="inline-flex items-center gap-3 text-navy font-bold text-sm uppercase tracking-widest hover:text-gold transition-colors"
            >
              Consult with our Committee <Landmark className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
}
