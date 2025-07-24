import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiDroplet, FiPackage, FiZap } from 'react-icons/fi';

const Servings = () => {
  return (
    <section className="py-20 bg-[#F6E2B6]/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#E3891A] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#D0D5A3] rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#C06611] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753395075099-Image%20creation%20from%20Seelab.png" 
                alt="Small wooden spoon with a pinch of sweetener" 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover filter sepia-[0.1] saturate-110 brightness-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D0D5A3]/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-[#E3891A] text-white p-4 rounded-2xl shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <SafeIcon icon={FiDroplet} className="text-2xl" />
              <p className="font-bold text-sm mt-1">Just a Pinch</p>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white text-[#3F200F] p-4 rounded-full shadow-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <p className="font-bold text-xl text-[#E3891A]">200+</p>
                <p className="text-xs">servings</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Text Content */}
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
                A Little Goes a <span className="text-[#E3891A]">Long Way</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-[#3F200F] mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Small jar, big impact. Our unique stevia and yacón blend is so naturally potent that a single package contains 200 servings of pure sweetness.
              </motion.p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: FiPackage,
                  title: "One jar = 200+ servings",
                  description: "Lasting much longer than conventional sweeteners"
                },
                {
                  icon: FiDroplet,
                  title: "Just a pinch replaces a tablespoon of sugar",
                  description: "Perfect sweetness without the calories"
                },
                {
                  icon: FiZap,
                  title: "Economical & long-lasting",
                  description: "A staple for your pantry that keeps on giving"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md"
                >
                  <div className="bg-[#D0D5A3] p-3 rounded-full flex-shrink-0">
                    <SafeIcon icon={feature.icon} className="text-[#3F200F] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3F200F] text-lg mb-2">{feature.title}</h3>
                    <p className="text-[#3F200F]/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#E3891A]/10 p-6 rounded-2xl border-l-4 border-[#E3891A]"
            >
              <p className="text-[#3F200F] text-lg font-semibold italic text-center">
                "Sweetness that lasts and lasts."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Servings;