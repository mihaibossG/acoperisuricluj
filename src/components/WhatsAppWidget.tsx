import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/40742823435', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-['Inter'] text-sm font-medium"
      >
        Scrie-ne pe WhatsApp
      </motion.span>
    </motion.button>
  );
};

export default WhatsAppWidget;
