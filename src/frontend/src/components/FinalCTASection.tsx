import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/cta-bg.dim_1600x900.png"
          alt="Luxury background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-blush/80 to-cream/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-chocolate mb-8 leading-tight">
          Your Next Sweet Obsession Awaits.
        </h2>
        
        <p className="text-xl sm:text-2xl text-chocolate/80 max-w-2xl mx-auto mb-10">
          Order online or visit us in Jhansi today.
        </p>
        
        <Link to="/contact">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-chocolate font-semibold px-12 py-7 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Order Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
