import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SocialLinks } from '../components/SocialLinks';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-navy text-white pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div>
            <span className="font-serif text-2xl font-bold tracking-widest text-white">
              KINTSUGII <span className="text-gold">WEALTH</span>
            </span>
            <p className="text-white/40 text-sm mt-8 leading-relaxed max-w-sm">
              Founded by Priyank Vora. Dedicated to mending and strengthening financial legacies through
              institutional-grade advisory and bespoke wealth architecture.
            </p>
            <div className="mt-10 mb-8">
              <div className="w-48 mb-6">
                <img src="/AMFI_vector.svg" alt="AMFI Logo" className="w-full h-auto object-contain object-left" />
              </div>
              <div className="flex items-center gap-3 text-sm border-l-2 border-gold pl-3 py-1 whitespace-nowrap">
                <span className="text-white font-medium">AMFI Registered</span>
                <span className="text-white/40">|</span>
                <span className="text-gold tracking-wider font-bold text-xs">ARN: 356544</span>
              </div>
              <p className="text-white/40 text-xs mt-2 pl-3">Mutual Fund Distributor</p>
            </div>

            <div className="flex gap-6 mt-8">
              <SocialLinks linkClassName="p-2 text-white/40 hover:text-gold transition-colors" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:col-span-2">
            <div>
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Ahmedabad Office</h4>
              <div className="space-y-4 text-sm text-white/60">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 text-gold" />
                  <span>3, Saumil Society, Next to Himalaya Mall, Drive-in Road, 380052</span>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0 text-gold" />
                  <span>info@kintsugiiwealth.com</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 shrink-0 text-gold" />
                  <span>+91-7043268807</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Anand Office</h4>
              <div className="space-y-4 text-sm text-white/60">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 text-gold" />
                  <span>SF 04, Bakrol Square, Nr Vaibhav Cinema, Bakrol 388315</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 pb-8 text-center md:text-left">
          <p className="text-white/40 text-[11px] leading-relaxed max-w-5xl">
            <strong className="text-white/60">Disclaimer:</strong> Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns. Pragmatik Investing is not responsible for any losses incurred by the investor for relying on the information provided on this website. The information provided is for educational and informational purposes only and should not be considered as investment advice.
          </p>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            &copy; 2025 Kintsugii Wealth. Private & Confidential.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
