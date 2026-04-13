import { FounderSection, Philosophy } from '../sections';
import { PageTransition } from '../components/PageTransition';
import { ResilienceChart } from '../components/Visuals/ResilienceChart';

export default function About() {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen bg-white">
        <FounderSection />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <ResilienceChart />
        </div>
        <Philosophy />
      </div>
    </PageTransition>
  );
}
