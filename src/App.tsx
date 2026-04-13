import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar, Footer } from './sections';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import InsightsPage from './pages/Insights';
import Tools from './pages/Tools';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div className="font-sans bg-slate-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
