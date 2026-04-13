import { Solutions, Services, WealthProcess, Partners } from '../sections';
import { PageTransition } from '../components/PageTransition';
import { HistoricalMarketChart } from '../components/Visuals/HistoricalMarketChart';

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen bg-slate-50">
        <Solutions />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-white border-y border-slate-100">
           <HistoricalMarketChart />
        </div>
        <WealthProcess />
        <Services />
        <Partners />
      </div>
    </PageTransition>
  );
}
