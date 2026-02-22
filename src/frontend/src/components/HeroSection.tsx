import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Your Cafe Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-cafe.dim_1920x1080.png"
          alt="Elegant desserts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/40 via-chocolate/20 to-cream/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <Badge className="mb-6 bg-gold/90 text-chocolate border-none px-4 py-2 text-sm font-medium animate-fade-in">
          Freshly baked daily
        </Badge>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-chocolate mb-6 leading-tight animate-fade-in-up">
          Where Aesthetics Meet Indulgence.
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-chocolate/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
          Handcrafted cupcakes, decadent brownies, and signature bakes that taste as beautiful as they look.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <Button
            onClick={() => scrollToSection('order')}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-chocolate font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Order Now
          </Button>
          <Button
            onClick={() => scrollToSection('location')}
            size="lg"
            variant="outline"
            className="border-2 border-chocolate text-chocolate bg-cream/90 hover:bg-cream font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Visit Us Today
          </Button>
        </div>
      </div>
    </section>
  );
}
