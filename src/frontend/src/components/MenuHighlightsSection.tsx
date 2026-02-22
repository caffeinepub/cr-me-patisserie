import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Download, Eye } from 'lucide-react';

export default function MenuHighlightsSection() {
  const menuItems = [
    {
      name: 'Cupcakes',
      image: '/assets/generated/menu-cupcakes.dim_800x600.png',
      description: 'Handcrafted perfection'
    },
    {
      name: 'Brownies',
      image: '/assets/generated/menu-brownies.dim_800x600.png',
      description: 'Rich & fudgy'
    },
    {
      name: 'Korean Bun',
      image: '/assets/generated/menu-korean-bun.dim_800x600.png',
      description: 'Soft & delightful'
    },
    {
      name: 'Custom Cakes',
      image: '/assets/2024-12-23 (2).webp',
      description: 'Made for your moments'
    },
    {
      name: 'Celebration Cakes',
      image: '/assets/2024-12-23 (1).webp',
      description: 'Just perfect'
    }
  ];

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

  const handleDownloadMenu = () => {
    const link = document.createElement('a');
    link.href = '/assets/2024-12-23.webp';
    link.download = 'creme-patisserie-menu.webp';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate mb-4">
            Signature Menu Highlights
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Badge className="bg-blush/50 text-chocolate border-none px-4 py-2 text-sm">
              Limited batch production
            </Badge>
            <Badge className="bg-gold/30 text-chocolate border-none px-4 py-2 text-sm">
              High demand — pre-order recommended
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl text-chocolate mb-2">{item.name}</h3>
                <p className="text-chocolate/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-chocolate text-chocolate hover:bg-chocolate hover:text-cream font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Full Menu
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/2024-12-23.webp"
                  alt="Crème Pâtisserie Full Menu"
                  className="w-full h-auto"
                />
                <Button
                  onClick={handleDownloadMenu}
                  size="sm"
                  className="absolute top-4 right-4 bg-gold hover:bg-gold/90 text-chocolate font-semibold rounded-full shadow-lg"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Menu
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            onClick={() => scrollToSection('order')}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-chocolate font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-md"
          >
            Order Online
          </Button>
        </div>
      </div>
    </section>
  );
}
