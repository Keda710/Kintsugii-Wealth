import {
  Navbar,
  Hero,
  TrustBar,
  FounderSection,
  Solutions,
  Insights,
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
      <Insights />
      <Booking />
      <Footer />
    </div>
  );
}
