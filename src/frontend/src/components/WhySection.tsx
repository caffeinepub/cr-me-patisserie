import { Check } from 'lucide-react';

export default function WhySection() {
  const features = [
    'Premium ingredients',
    'Beautiful presentation',
    'Perfect for gifting & celebrations',
    'Loved by Jhansi'
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate mb-6">
            More Than A Bakery. An Experience.
          </h2>
          
          <p className="text-lg sm:text-xl text-chocolate/80 mb-12 leading-relaxed">
            At Crème Patisserie, every dessert is crafted with precision, flavor, and elegance. 
            From crowd-favorite cupcakes to rich, fudgy brownies — each bite is a moment worth savoring.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-blush/30 rounded-2xl p-5 transition-all duration-300 hover:bg-blush/50 hover:scale-105"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                  <Check className="w-5 h-5 text-chocolate" strokeWidth={3} />
                </div>
                <span className="text-chocolate font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
