import { Calculator, RiskAssessment, RetirementSimulator, Partners } from '../sections';
import { PageTransition } from '../components/PageTransition';

export default function Tools() {
  return (
    <PageTransition>
      <div className="pt-24 min-h-screen bg-slate-50">
        <RetirementSimulator />
        <Calculator />
        <RiskAssessment />
        <Partners />
      </div>
    </PageTransition>
  );
}
