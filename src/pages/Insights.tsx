import { PageTransition } from '../components/PageTransition';
import { Insights, IndiaInvestment, IndiaDecade } from '../sections';
import { PerformanceChart } from '../components/Visuals/PerformanceChart';

export default function InsightsPage() {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen bg-slate-50">
        {/* Full header for the page */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
          <h1 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-6">Market Intelligence</h1>
          <h2 className="font-serif text-4xl lg:text-6xl text-navy mb-8">Insights & Resources</h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            In-depth perspectives on macroeconomics, asset allocation, and wealth preservation strategies from our investment committee.
          </p>
        </div>
        
        {/* Reusing existing insights component but allowing it to stretch */}
        <div className="-mt-16">
          <Insights />
        </div>

        <IndiaInvestment />
        <IndiaDecade />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <PerformanceChart />
        </div>
      </div>
    </PageTransition>
  );
}
