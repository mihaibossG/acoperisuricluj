import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '12+', label: 'Ani Experiență' },
  { icon: Users, value: '3500+', label: 'Acoperișuri Instalate' },
  { icon: Clock, value: '7 Zile', label: 'Deschis Săptămânal' },
  { icon: TrendingUp, value: '#1', label: 'Evaluați în Cluj' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 bg-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-black mb-6">
              EXPERȚI ÎN ACOPERIȘURI CLUJ-NAPOCA
            </h2>
            <div className="w-24 h-1 bg-orange-600 mb-8" />

            <p className="font-['Inter'] text-lg text-gray-700 mb-6 leading-relaxed">
              Suntem specialiști în montaj și reparații acoperișuri în Cluj-Napoca și zonele limitrofe.
              Cu o experiență de peste 12 ani în domeniu, am construit o reputație solidă bazată pe
              calitate superioară, profesionalism și respectarea strictă a termenelor promise.
            </p>

            <p className="font-['Inter'] text-lg text-gray-700 mb-6 leading-relaxed">
              Echipa noastră de experți combină tehnici dovedite cu materiale premium de la cei mai
              de încredere furnizori. Fie că aveți nevoie de un acoperiș nou complet, reparații,
              înlocuire șarpantă, montaj jgheaburi sau sisteme pluviale, livrăm rezultate
              excepționale de fiecare dată.
            </p>

            <p className="font-['Inter'] text-lg text-gray-700 mb-8 leading-relaxed">
              Suntem mai mult decât o firmă de acoperișuri - suntem partenerii care vă protejează
              investiția. Ne mândrim cu fiecare proiect realizat, asigurându-ne că atunci când
              lucrarea este finalizată, casa dumneavoastră este protejată perfect și arată
              impecabil. Am realizat peste 3500 de acoperișuri în Cluj și împrejurimi.
            </p>

            <a
              href="tel:+40742823435"
              className="inline-block bg-orange-600 text-white px-8 py-3 font-['Inter'] text-base font-medium hover:bg-orange-700 transition-colors duration-300"
            >
              SOLICITĂ CONSULTAȚIE
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-300 p-8 text-center hover:border-orange-600 transition-all duration-300 group"
              >
                <stat.icon
                  className="w-10 h-10 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <div className="font-['Montserrat'] text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="font-['Inter'] text-sm text-gray-700 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
