import { MapPin, Clock, Phone } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';

export default function LocationSection() {
  const address = 'Civil Lines, Jhansi, Uttar Pradesh 284001';
  const phone = '08004517316';
  const instagram = '@cremebyishikkarai';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate mb-12 text-center">
            Visit Us
          </h2>
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blush/30 flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-chocolate" />
                </div>
                <h3 className="font-semibold text-chocolate mb-2">Location</h3>
                <p className="text-chocolate/70 leading-relaxed">
                  Civil Lines, Jhansi,<br />Uttar Pradesh 284001
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blush/30 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-chocolate" />
                </div>
                <h3 className="font-semibold text-chocolate mb-2">Hours</h3>
                <p className="text-chocolate/70 leading-relaxed">
                  Open daily<br />Closes 10:30 PM
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blush/30 flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-chocolate" />
                </div>
                <h3 className="font-semibold text-chocolate mb-2">Phone</h3>
                <a
                  href={`tel:${phone}`}
                  className="text-chocolate/70 hover:text-chocolate transition-colors"
                >
                  {phone}
                </a>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blush/30 flex items-center justify-center mb-4">
                  <SiInstagram className="w-8 h-8 text-chocolate" />
                </div>
                <h3 className="font-semibold text-chocolate mb-2">Instagram</h3>
                <a
                  href={`https://instagram.com/${instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chocolate/70 hover:text-chocolate transition-colors"
                >
                  {instagram}
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-chocolate text-chocolate hover:bg-chocolate hover:text-cream font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold/90 text-chocolate font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              >
                <a href={`tel:${phone}`}>
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
