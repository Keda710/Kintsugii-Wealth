import {
  Navbar,
  Hero,
  TrustBar,
  FounderSection,
  Solutions,
  Services,
  Insights,
  Calculator,
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
      <Booking />
      <Footer />
    </div>
  );
}
