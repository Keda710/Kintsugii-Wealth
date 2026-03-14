import { MapPin, Mail, Phone } from 'lucide-react';
import { SocialLinks } from '../components/SocialLinks';

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
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
            <div className="flex gap-6 mt-10">
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
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Bakrol Office</h4>
              <div className="space-y-4 text-sm text-white/60">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 text-gold" />
                  <span>SF 04, Bakrol Square, Nr Vaibhav Cinema, Bakrol 388315</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            &copy; 2025 Kintsugii Wealth. Private & Confidential.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
