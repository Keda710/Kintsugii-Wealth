import { motion } from 'motion/react';

export function FounderSection() {
  return (
    <section id="founder" className="section-padding bg-paper">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-md text-navy mb-8">The Legacy of Expertise</h2>
          <div className="space-y-6 text-muted">
            <p>
              Kintsugii Wealth was founded by <strong>Priyank Vora</strong>, a seasoned financial professional with
              over 15 years of experience in the banking and wealth management industry.
            </p>
            <p>
              Before establishing Kintsugii, Priyank held pivotal leadership roles at global financial institutions:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                <span>
                  <strong>HDFC Bank:</strong> Served as Manager, overseeing complex portfolio strategies.
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                <span>
                  <strong>ANZ Bank:</strong> Served as Associate Director, managing high-value private wealth accounts.
                </span>
              </li>
            </ul>
            <p>
              His philosophy is rooted in the Japanese art of <em>Kintsugi</em>—the belief that something becomes more
              beautiful and stronger after being mended. We apply this to financial legacies, strengthening them for
              the future.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white p-8 border border-slate-100 shadow-sm">
              <div className="text-gold font-serif text-3xl mb-2">15+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-navy">Years Experience</div>
            </div>
            <div className="bg-white p-8 border border-slate-100 shadow-sm">
              <div className="text-gold font-serif text-3xl mb-2">100+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-navy">HNI Clients</div>
            </div>
          </div>
          <div className="pt-12">
            <div className="bg-navy p-8 text-white shadow-xl">
              <div className="text-gold font-serif text-3xl mb-2">100+ Cr</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/60">AUM Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
