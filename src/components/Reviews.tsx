import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Andrei Popescu',
    location: 'Cluj-Napoca',
    rating: 5,
    text: 'Am renovat complet acoperișul casei și sunt extrem de mulțumit! Echipa a fost profesionistă, lucrarea impecabilă și prețul corect. Recomand cu încredere!',
  },
  {
    name: 'Maria Ionescu',
    location: 'Florești, Cluj',
    rating: 5,
    text: 'Am avut nevoie de reparații urgente la acoperiș după furtună. Au venit rapid, au rezolvat problema și au lăsat totul curat. Mulțumesc pentru profesionalism!',
  },
  {
    name: 'Ioan Mureșan',
    location: 'Cluj-Napoca',
    rating: 5,
    text: 'Cel mai bun montaj de acoperiș din Cluj! Materialele premium, execuție perfectă și respectarea termenului promis. Cei mai profesioniști din domeniu!',
  },
  {
    name: 'Elena Popa',
    location: 'Apahida, Cluj',
    rating: 5,
    text: 'Am montat acoperiș nou complet și rezultatul este spectaculos. Finisajele sunt impecabile, echipa serioasă. Merită fiecare ban investit!',
  },
  {
    name: 'Vasile Rus',
    location: 'Baciu, Cluj',
    rating: 5,
    text: 'Au înlocuit șarpanta și acoperișul casei părintești. Lucrare de calitate superioară, preț onest și garanție completă. Recomand fără ezitare!',
  },
  {
    name: 'Carmen Moldovan',
    location: 'Cluj-Napoca',
    rating: 5,
    text: 'Montaj jgheaburi și sistem pluvial complet. Rapid, curat și profesionist. Cea mai bună firmă de acoperișuri din Cluj! Mulțumim!',
  },
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="reviews" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-black mb-4">
            RECENZII CLIENȚI
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
          <p className="font-['Inter'] text-lg text-gray-700 max-w-2xl mx-auto">
            Nu ne credeți pe cuvânt. Iată ce spun clienții noștri mulțumiți despre
            experiența lor cu serviciile noastre de acoperișuri în Cluj-Napoca.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-300 p-6 hover:border-orange-600 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-600 text-orange-600"
                  />
                ))}
              </div>
              <p className="font-['Inter'] text-gray-700 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="font-['Montserrat'] text-lg font-semibold text-gray-900">
                  {review.name}
                </p>
                <p className="font-['Inter'] text-sm text-gray-600">
                  {review.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
