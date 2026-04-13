import { Hero, TrustBar, Solutions, Services, Insights, Partners, InstitutionalFAQ, FounderSection } from '../sections';
import { PageTransition } from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <TrustBar />
      <FounderSection />
      <Partners />
      <Solutions />
      <Services />
      <Insights />
      <InstitutionalFAQ />
    </PageTransition>
  );
}
