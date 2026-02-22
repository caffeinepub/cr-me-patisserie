import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useIsAdmin } from '../hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { identity } = useInternetIdentity();
  const { data: isAdmin } = useIsAdmin();
  const navigate = useNavigate();

  const isAuthenticated = !!identity;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Navigate to home page first if not already there
    navigate({ to: '/' }).then(() => {
      setTimeout(() => {
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
      }, 100);
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-serif text-2xl sm:text-3xl text-chocolate font-bold tracking-tight hover:text-chocolate/80 transition-colors">
              Crème Patisserie
            </h1>
          </Link>
          
          <div className="flex items-center gap-3">
            {isAuthenticated && isAdmin && (
              <Link to="/admin">
                <Button
                  variant="outline"
                  className="border-gold text-chocolate hover:bg-gold/10 font-medium px-4 py-2 rounded-full transition-all duration-300"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              </Link>
            )}
            
            <Button
              onClick={() => scrollToSection('order')}
              className="bg-gold hover:bg-gold/90 text-chocolate font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
