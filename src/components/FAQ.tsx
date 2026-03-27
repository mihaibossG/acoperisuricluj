import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'informational',
    question: 'Cât durează montajul unui acoperiș?',
    answer: 'Durata depinde de dimensiunea și complexitatea proiectului. Un acoperiș standard la o casă medie durează 3-7 zile lucrătoare, în funcție de condițiile meteo. Oferim estimări precise după evaluarea la fața locului și vă ținem la curent cu progresul zilnic.',
  },
  {
    category: 'informational',
    question: 'Ce tipuri de acoperișuri instalați?',
    answer: 'Instalăm toate tipurile de acoperișuri: țiglă metalică, țiglă ceramică, tablă simplă sau fălțuită, șindrilă bituminoasă și sisteme complete de șarpantă. Fiecare lucrare este executată cu materiale premium și garanție completă.',
  },
  {
    category: 'informational',
    question: 'Oferiți garanție pentru lucrările executate?',
    answer: 'Da, oferim garanție completă pentru toate lucrările noastre. Garanția acoperă atât manopera cât și materialele folosite. Stăm în spatele fiecărei lucrări realizate și ne asigurăm că sunteți complet mulțumit.',
  },
  {
    category: 'informational',
    question: 'Care este prețul pentru reparații acoperișuri?',
    answer: 'Prețul depinde de amploarea reparației necesare. Oferim evaluări gratuite la fața locului și cote detaliate înainte de a începe orice lucrare. Sunați la +40 742 823 435 pentru o programare rapidă și o ofertă personalizată.',
  },
  {
    category: 'informational',
    question: 'Lucrați și în weekend?',
    answer: 'Da, suntem disponibili 7 zile pe săptămână, Luni-Duminică: 08:00-18:00. Apelați-ne la +40 742 823 435 pentru programări sau consultații și în weekend.',
  },
  {
    category: 'objection',
    question: 'De ce să vă aleg pe voi în loc de alte firme de acoperișuri?',
    answer: 'Suntem pasionați de calitate și profesionalism. Cu peste 12 ani experiență și 3500+ acoperișuri instalate în Cluj, echipa noastră folosește doar materiale premium și tehnici dovedite. Garantăm rezultate impecabile la prețuri corecte, cu servicii complete de la A la Z.',
  },
  {
    category: 'objection',
    question: 'Ce materiale folosiți pentru acoperișuri?',
    answer: 'Folosim exclusiv materiale premium de la furnizori de încredere: țiglă Bilka, Lindab, Wetterbest, Bramac și alte branduri de top. Selectăm cele mai bune materiale pentru a asigura durabilitate maximă și aspect impecabil al acoperișului dumneavoastră.',
  },
  {
    category: 'objection',
    question: 'Realizați și lucrări de șarpantă și structură?',
    answer: 'Absolut! Suntem specialiști în construcții și reparații șarpante, consolidări structurale, înlocuiri complete de acoperiș și mansardări. Avem experiență și expertiza necesară pentru orice proiect, de la case mici până la clădiri comerciale.',
  },
  {
    category: 'objection',
    question: 'Oferiți și montaj de jgheaburi și sistem pluvial?',
    answer: 'Da, oferim servicii complete: montaj jgheaburi, burlane, sisteme pluviale complete, inclusiv evacuare apă pluvială. Toate sistemele sunt instalate profesional pentru a asigura protecție maximă împotriva infiltrațiilor.',
  },
  {
    category: 'objection',
    question: 'Ce se întâmplă dacă nu sunt mulțumit de lucrare?',
    answer: 'Satisfacția dumneavoastră este prioritatea noastră. Dacă nu sunteți complet mulțumit de lucrarea realizată, vă rugăm să ne anunțați imediat și vom rezolva problema fără costuri suplimentare. Echipa noastră este dedicată să vă ofere rezultate perfecte. Încrederea dumneavoastră contează cel mai mult pentru noi.',
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-100" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-black mb-4">
            ÎNTREBĂRI FRECVENTE
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
          <p className="font-['Inter'] text-lg text-gray-700 max-w-2xl mx-auto">
            Aveți întrebări? Noi avem răspunsuri. Găsiți tot ce trebuie să știți despre
            serviciile noastre și de ce suntem firma numărul 1 pentru acoperișuri în Cluj-Napoca.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-gray-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-['Montserrat'] text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="font-['Inter'] text-gray-700 px-6 pb-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-['Inter'] text-gray-700 mb-4">
            Mai aveți întrebări? Suntem aici să vă ajutăm.
          </p>
          <a
            href="tel:+40742823435"
            className="inline-block bg-orange-600 text-white px-8 py-3 font-['Inter'] text-base font-medium hover:bg-orange-700 transition-colors duration-300"
          >
            SUNĂ ACUM: +40 742 823 435
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
