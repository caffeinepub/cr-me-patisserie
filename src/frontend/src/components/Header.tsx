import { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useIsAdmin } from '../hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Shield, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { identity } = useInternetIdentity();
  const { data: isAdmin } = useIsAdmin();
  const location = useLocation();

  const isAuthenticated = !!identity;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/menu', label: 'Menu' },
    { to: '/celebrations', label: 'Celebrations' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

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
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-chocolate font-medium transition-colors hover:text-gold ${
                  isActive(link.to) ? 'text-gold border-b-2 border-gold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            {isAuthenticated && isAdmin && (
              <Link to="/admin" className="hidden sm:block">
                <Button
                  variant="outline"
                  className="border-gold text-chocolate hover:bg-gold/10 font-medium px-4 py-2 rounded-full transition-all duration-300"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              </Link>
            )}
            
            <Link to="/contact" className="hidden sm:block">
              <Button
                className="bg-gold hover:bg-gold/90 text-chocolate font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              >
                Order Now
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-chocolate hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-chocolate/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-chocolate font-medium transition-colors hover:text-gold px-4 py-2 ${
                    isActive(link.to) ? 'text-gold bg-gold/10 rounded-lg' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated && isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-chocolate font-medium transition-colors hover:text-gold px-4 py-2 flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Admin
                </Link>
              )}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  className="w-full bg-gold hover:bg-gold/90 text-chocolate font-medium px-6 py-2 rounded-full transition-all duration-300"
                >
                  Order Now
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
