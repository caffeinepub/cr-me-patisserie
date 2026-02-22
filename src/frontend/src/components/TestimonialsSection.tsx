import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-blush/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate mb-4">
            Rated 4.9 ⭐ by Dessert Lovers
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="text-5xl font-bold text-chocolate">4.9</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
          </div>

          <Badge className="mb-8 bg-gold/90 text-chocolate border-none px-4 py-2 text-sm font-medium">
            Most loved cupcakes in Jhansi
          </Badge>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-cream rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-chocolate/90 text-lg mb-4 italic leading-relaxed">
                "I've tried almost all the cupcake flavors — loved every single one!"
              </p>
              <p className="text-chocolate font-medium">— Sanskriti Mishra</p>
            </div>
            
            <div className="bg-gradient-to-br from-gold/20 to-blush/30 rounded-3xl p-8 shadow-md border-2 border-gold/30 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-chocolate text-xl sm:text-2xl font-serif mb-4 leading-relaxed">
                "Tasted as good as its aesthetics."
              </p>
              <p className="text-chocolate font-semibold">— Ajit Singh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
