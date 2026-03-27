import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesajul este obligatoriu';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = `Bună, sunt ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/40742823435?text=${encodeURIComponent(message)}`, '_blank');

    setFormData({
      name: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            CONTACTEAZĂ-NE
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-['Montserrat'] text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-orange-600" />
                PROGRAM LUCRU
              </h3>
              <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
                <div className="space-y-2 font-['Inter']">
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-gray-700">Luni-Vineri</span>
                    <span className="font-['Montserrat'] text-gray-900 font-semibold">08:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-gray-700">Sâmbătă</span>
                    <span className="font-['Montserrat'] text-gray-900 font-semibold">08:30 - 20:30</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-gray-700">Duminică</span>
                    <span className="font-['Montserrat'] text-gray-900 font-semibold">08:30 - 20:00</span>
                  </div>
                </div>
                <p className="font-['Inter'] text-gray-600 text-sm">
                  Suntem disponibili 7 zile pe săptămână în Cluj-Napoca. Sunați sau trimiteți mesaj pe WhatsApp pentru programări.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-['Montserrat'] text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-orange-600" />
                RĂSPUNS RAPID
              </h3>
              <p className="font-['Inter'] text-gray-700 leading-relaxed">
                Sunați-ne la +40 742 823 435 pentru oferte și programări. Răspundem rapid la toate întrebările despre serviciile de acoperișuri.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-['Montserrat'] text-gray-900 text-sm font-semibold mb-2">
                NUME COMPLET
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 font-['Inter'] text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all"
                placeholder="Numele dumneavoastră"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1 font-['Inter']">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block font-['Montserrat'] text-gray-900 text-sm font-semibold mb-2">
                TELEFON
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 font-['Inter'] text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all"
                placeholder="+40 742 823 435"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1 font-['Inter']">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block font-['Montserrat'] text-gray-900 text-sm font-semibold mb-2">
                MESAJ
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 font-['Inter'] text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all resize-none"
                placeholder="Spuneți-ne despre nevoile dumneavoastră de acoperișuri..."
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1 font-['Inter']">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white px-8 py-4 font-['Inter'] text-base font-medium hover:bg-orange-700 transition-colors duration-300"
            >
              TRIMITE MESAJ PE WHATSAPP
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
