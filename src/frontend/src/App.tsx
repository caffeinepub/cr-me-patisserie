import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import TestimonialsSection from './components/TestimonialsSection';
import MenuHighlightsSection from './components/MenuHighlightsSection';
import CelebrationSection from './components/CelebrationSection';
import LocationSection from './components/LocationSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
