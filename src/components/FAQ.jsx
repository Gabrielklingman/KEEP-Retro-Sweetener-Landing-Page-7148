import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiChevronDown, FiHelpCircle, FiCheck } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Does it really have zero calories?",
      answer: "Yes—both stevia and yacón are naturally zero-calorie."
    },
    {
      question: "What's yacón? I've never heard of it.",
      answer: "Yacón is a plant native to Peru, known for its sweet, gut-friendly prebiotic syrup."
    },
    {
      question: "Is it safe for diabetics?",
      answer: "Yes, both ingredients have a low glycemic impact and are diabetic-friendly."
    },
    {
      question: "Can I return it if I don't like it?",
      answer: "100%. We offer a no-hassle money-back guarantee."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F6E2B6]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-20"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753390699910-Image%20creation%20from%20Seelab%20%283%29.png"
                alt="Friendly customer service"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover md:object-contain lg:object-cover filter sepia-[0.1] saturate-110 brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E3891A]/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-[#E3891A] text-white p-4 rounded-full shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <SafeIcon icon={FiHelpCircle} className="text-2xl" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 bg-[#D0D5A3] text-[#3F200F] p-4 rounded-2xl shadow-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-bold text-sm">Always Here to Help</p>
            </motion.div>
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#3F200F] mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Common <span className="text-[#E3891A]">Questions</span>...
              </motion.h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#F6E2B6] rounded-2xl overflow-hidden shadow-lg"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#E3891A]/10 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-[#E3891A] font-bold text-lg">Q:</span>
                      <h3 className="font-bold text-[#3F200F] text-lg">{faq.question}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SafeIcon icon={FiChevronDown} className="text-[#C06611] text-xl" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="flex items-start space-x-3 bg-white p-4 rounded-xl">
                            <SafeIcon icon={FiCheck} className="text-[#D0D5A3] text-xl flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[#D0D5A3] font-bold text-lg">A:</span>
                              <span className="text-[#3F200F] ml-2">{faq.answer}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;