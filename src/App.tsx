import {
  Navbar,
  Hero,
  TrustBar,
  FounderSection,
  Solutions,
  Services,
  Insights,
  Calculator,
  RiskAssessment,
  Booking,
  Footer,
} from './sections';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <TrustBar />
      <FounderSection />
      <Solutions />
      <Services />
      <Insights />
      <Calculator />
      <RiskAssessment />
      <Booking />
      <Footer />
    </div>
  );
}
