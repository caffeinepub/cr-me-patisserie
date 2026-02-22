import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import TestimonialsSection from './components/TestimonialsSection';
import MenuHighlightsSection from './components/MenuHighlightsSection';
import CelebrationSection from './components/CelebrationSection';
import LocationSection from './components/LocationSection';
import FinalCTASection from './components/FinalCTASection';
import CustomerQuerySection from './components/CustomerQuerySection';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <TestimonialsSection />
        <MenuHighlightsSection />
        <CelebrationSection />
        <LocationSection />
        <FinalCTASection />
        <CustomerQuerySection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
