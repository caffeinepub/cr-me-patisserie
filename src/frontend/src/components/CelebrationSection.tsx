export default function CelebrationSection() {
  const occasions = [
    { name: 'Birthdays', icon: '🎂' },
    { name: 'Anniversaries', icon: '💝' },
    { name: 'Surprise gifts', icon: '🎁' },
    { name: 'Corporate orders', icon: '🏢' }
  ];

  return (
    <section className="py-20 bg-blush/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="/assets/generated/celebration-bg.dim_1600x900.png"
          alt="Celebration"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate mb-12">
            Make Every Occasion Sweeter.
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <div
                key={index}
                className="bg-cream/95 backdrop-blur-sm rounded-3xl p-8 transition-all duration-300 hover:bg-cream hover:scale-105 shadow-sm hover:shadow-md"
              >
                <div className="text-5xl mb-4">{occasion.icon}</div>
                <h3 className="font-serif text-xl text-chocolate">{occasion.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
