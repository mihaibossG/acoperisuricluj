import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/roofing_hero_1.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Montserrat'] text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight"
        >
          ACOPERISURI CLUJ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Montserrat'] text-2xl md:text-3xl lg:text-4xl text-orange-500 mb-12"
        >
          Reparații Și Montaj Acoperișuri
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-['Inter'] text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto"
        >
          Oferim servicii profesionale de montaj și reparații acoperișuri în Cluj-Napoca.
          Echipa noastră de specialiști garantează calitate superioară și durabilitate pe termen lung pentru acoperișul tău.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="tel:+40742823435"
            className="inline-block bg-orange-600 text-white px-10 py-4 font-['Inter'] text-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            SUNĂ ACUM
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
