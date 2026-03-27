import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-['Montserrat'] text-2xl font-extrabold mb-4">
              REPARAȚII ȘI MONTAJ ACOPERIȘURI
            </h3>
            <p className="font-['Inter'] text-gray-400 leading-relaxed">
              Firma de încredere din Cluj-Napoca pentru reparații și montaj acoperișuri. Rezultate excepționale, îngrijire profesională și servicii premium.
            </p>
          </div>

          <div>
            <h4 className="font-['Montserrat'] text-lg font-semibold mb-4">
              LINKURI RAPIDE
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="font-['Inter'] text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Servicii
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="font-['Inter'] text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Despre Noi
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="font-['Inter'] text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="font-['Inter'] text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Recenzii
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Montserrat'] text-lg font-semibold mb-4">
              SERVICII
            </h4>
            <ul className="space-y-2 font-['Inter'] text-gray-400">
              <li>Montaj Acoperișuri Noi</li>
              <li>Reparații Acoperișuri</li>
              <li>Înlocuire Tigla</li>
              <li>Hidroizolații</li>
              <li>Системе Pluviale</li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Montserrat'] text-lg font-semibold mb-4">
              CONTACT
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="font-['Inter'] text-gray-400 text-sm leading-relaxed">
                  Strada București 88, 400394 Cluj-Napoca, România
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a
                  href="tel:+40742823435"
                  className="font-['Inter'] text-gray-400 hover:text-orange-500 transition-colors"
                >
                  +40 742 823 435
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['Inter'] text-gray-400 text-sm text-center md:text-left">
              {currentYear} Reparații Și Montaj Acoperișuri. Toate drepturile rezervate.
            </p>
            <p className="font-['Inter'] text-gray-400 text-sm">
              Acoperișuri Cluj | Reparații Acoperișuri | Montaj Acoperișuri Cluj-Napoca
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
