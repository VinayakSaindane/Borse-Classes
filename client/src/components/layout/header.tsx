import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import MobileMenu from '../ui/mobile-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <span className="text-xl font-bold text-neutral-900 font-poppins">Borse Classes</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`${isActive('/') ? 'text-primary' : 'text-neutral-700'} hover:text-primary font-medium`}>
              Home
            </Link>
            <Link href="/about" className={`${isActive('/about') ? 'text-primary' : 'text-neutral-700'} hover:text-primary font-medium`}>
              About
            </Link>
            <Link href="/courses" className={`${isActive('/courses') ? 'text-primary' : 'text-neutral-700'} hover:text-primary font-medium`}>
              Courses
            </Link>
            <Link href="/admissions" className={`${isActive('/admissions') ? 'text-primary' : 'text-neutral-700'} hover:text-primary font-medium`}>
              Admissions
            </Link>

            <Link href="/contact" className={`${isActive('/contact') ? 'text-primary' : 'text-neutral-700'} hover:text-primary font-medium`}>
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="px-4 py-2 text-primary font-medium hover:text-primary-dark transition-colors">
              Log In
            </Link>
            <Link href="/admissions" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
              Enroll Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-700 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="bx bx-menu text-3xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </header>
  );
}
