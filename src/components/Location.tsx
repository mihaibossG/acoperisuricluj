import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleGetDirections = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=Strada+București+88+400394+Cluj-Napoca+Romania',
      '_blank'
    );
  };

  return (
    <section id="location" className="py-20 bg-gray-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-black mb-4">
            VIZITEAZĂ-NE
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="bg-orange-600 p-3 flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Montserrat'] text-xl font-semibold text-black mb-2">
                  ADRESĂ
                </h3>
                <p className="font-['Inter'] text-gray-700 leading-relaxed">
                  Strada București 88<br />
                  400394 Cluj-Napoca<br />
                  România
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-600 p-3 flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Montserrat'] text-xl font-semibold text-black mb-2">
                  TELEFON
                </h3>
                <a
                  href="tel:+40742823435"
                  className="font-['Inter'] text-gray-700 hover:text-orange-600 transition-colors"
                >
                  +40 742 823 435
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-600 p-3 flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Montserrat'] text-xl font-semibold text-black mb-2">
                  PROGRAM
                </h3>
                <div className="font-['Inter'] text-gray-700 leading-relaxed text-sm space-y-1">
                  <p><strong>Luni-Vineri:</strong> 08:00 - 21:00</p>
                  <p><strong>Sâmbătă:</strong> 08:30 - 20:30</p>
                  <p><strong>Duminică:</strong> 08:30 - 20:00</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleGetDirections}
              className="w-full bg-orange-600 text-white px-8 py-4 font-['Inter'] text-base font-medium hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              OBȚINE INDICAȚII
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="h-[500px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.089!2d23.5923!3d46.7663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e32d6c3949d%3A0x1234567890!2sStrada%20Bucure%C8%99ti%2088%2C%20Cluj-Napoca%20400394!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
