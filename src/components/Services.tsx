import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Wrench } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Montaj Acoperișuri Noi',
    description: 'Oferim servicii complete de montaj acoperișuri noi cu materiale premium de la cei mai de încredere furnizori din domeniu. Lucrăm cu țiglă metalică, țiglă ceramică, tablă simplă sau fălțuită, șindrilă bituminoasă și sisteme complete de șarpantă. Fiecare proiect este executat cu atenție maximă la detalii, folosind tehnici moderne și dovedite care garantează durabilitate pe termen lung. Echipa noastră de specialiști cu peste 12 ani experiență se asigură că acoperișul dumneavoastră va rezista condițiilor meteo extreme și va proteja perfect locuința. Oferim consultanță completă pentru alegerea materialelor potrivite, execuție impecabilă și garanție extinsă pentru toată lucrarea realizată.',
  },
  {
    icon: Wrench,
    title: 'Reparații Acoperișuri',
    description: 'Suntem specialiști în reparații acoperișuri de orice tip și complexitate în Cluj-Napoca și zonele limitrofe. Fie că aveți infiltrații, țigle deteriorate, probleme la șarpantă, defecțiuni la sistemul de jgheaburi sau orice altă problemă legată de acoperiș, echipa noastră intervine rapid și eficient. Realizăm evaluări gratuite la fața locului pentru a identifica exact problema și a oferi soluția optimă. Folosim exclusiv materiale de calitate superioară care se potrivesc perfect cu acoperișul existent. Lucrăm cu profesionalism și respectăm termenele promise. Oferim garanție completă pentru toate reparațiile executate și ne asigurăm că acoperișul dumneavoastră revine la starea perfectă de funcționare.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 bg-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-black mb-4">
            SERVICII DE ACOPERIȘURI
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
          <p className="font-['Inter'] text-lg text-orange-600 max-w-2xl mx-auto">
            Descoperă gama noastră completă de servicii de acoperișuri, fiecare realizat
            cu precizie profesională și atenție la detalii.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-10 hover:border-orange-600 transition-all duration-300 group hover:shadow-xl"
            >
              <div className="mb-6">
                <service.icon
                  className="w-14 h-14 text-orange-600 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-['Montserrat'] text-3xl font-bold text-orange-600 mb-6">
                {service.title}
              </h3>
              <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="tel:+40742823435"
            className="inline-block bg-orange-600 text-white px-8 py-3 font-['Inter'] text-base font-medium hover:bg-orange-700 transition-colors duration-300"
          >
            SOLICITĂ OFERTĂ
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
