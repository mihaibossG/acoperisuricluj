import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  {
    src: '/images/poza_2_site.jpg',
    alt: 'Montaj acoperiș premium realizat de experții noștri în Cluj-Napoca',
  },
  {
    src: '/images/poza_3_site_roofing.jpg',
    alt: 'Lucrări profesionale de acoperișuri și învelitori în Cluj',
  },
  {
    src: '/images/poza_4_site_roofing.jpg',
    alt: 'Sisteme complete de acoperișuri instalate de specialiști',
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" className="py-20 bg-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-black mb-4">
            GALERIA NOASTRĂ
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
          <p className="font-['Inter'] text-lg text-gray-700 max-w-2xl mx-auto">
            Fiecare acoperiș este o operă de artă. Explorați portofoliul nostru cu lucrări de acoperișuri
            realizate cu precizie și atenție la detalii în Cluj-Napoca și împrejurimi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative overflow-hidden group aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
