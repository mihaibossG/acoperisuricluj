import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Acasă', id: 'hero' },
    { name: 'Servicii', id: 'services' },
    { name: 'Despre Noi', id: 'about' },
    { name: 'Galerie', id: 'gallery' },
    { name: 'Recenzii', id: 'reviews' },
    { name: 'Întrebări', id: 'faq' },
    { name: 'Locație', id: 'location' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-4">
              <h2
                className={`font-['Montserrat'] text-lg md:text-xl font-extrabold tracking-tight transition-colors ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                ACOPERISURI CLUJ
              </h2>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-['Montserrat'] text-sm font-semibold transition-colors hover:text-orange-600 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:+40742823435"
                className="bg-orange-600 text-white px-6 py-2 font-['Inter'] text-sm font-medium hover:bg-orange-700 transition-colors"
              >
                SUNĂ ACUM
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-white shadow-lg lg:hidden">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-['Montserrat'] text-base font-semibold text-gray-900 hover:text-orange-600 hover:bg-gray-50 transition-colors px-6 py-3 text-left"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+40742823435"
              className="bg-orange-600 text-white px-6 py-3 font-['Montserrat'] text-base font-semibold hover:bg-orange-700 transition-colors mx-6 mt-2 text-center"
            >
              SUNĂ ACUM
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
