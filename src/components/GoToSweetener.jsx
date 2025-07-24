import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiCoffee, FiHome, FiDroplet, FiSun, FiStar } from 'react-icons/fi';

const GoToSweetener = () => {
  const uses = [
    {
      icon: FiCoffee,
      title: "Morning Coffee & Tea",
      description: "Starts your day right, without the sugar crash."
    },
    {
      icon: FiHome,
      title: "Baking & Cooking",
      description: "Perfectly sweetens cookies, cakes, and even savory sauces."
    },
    {
      icon: FiDroplet,
      title: "Smoothies & Yogurt",
      description: "Boosts flavor without adding a single calorie."
    },
    {
      icon: FiSun,
      title: "Oatmeal & Cereal",
      description: "A guilt-free way to sweeten your breakfast bowl."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#E3891A] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#D0D5A3] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#C06611] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-[#3F200F] mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Your Go-To for <span className="text-[#E3891A]">Everything Sweet</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-[#3F200F] mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Finally, a sweetener that does it all. With a pure, clean taste and no aftertaste, our blend is the perfect sugar replacement in all your favorite recipes and daily rituals.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-[#3F200F] mb-6">Try it in:</h3>
            </motion.div>
            
            <div className="space-y-6">
              {uses.map((use, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-[#F6E2B6] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-[#E3891A] p-3 rounded-full flex-shrink-0">
                    <SafeIcon icon={use.icon} className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3F200F] text-lg mb-2">{use.title}:</h4>
                    <p className="text-[#3F200F]/80">{use.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-[#E3891A]/10 p-6 rounded-2xl border-l-4 border-[#E3891A] text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                <SafeIcon icon={FiStar} className="text-[#E3891A] text-2xl" />
                <p className="text-[#3F200F] text-xl font-bold italic">
                  If you can dream it, you can sweeten it.
                </p>
                <SafeIcon icon={FiStar} className="text-[#E3891A] text-2xl" />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Various sweet treats and beverages with natural sweetener" 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover filter sepia-[0.1] saturate-110 brightness-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E3891A]/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-[#D0D5A3] text-[#3F200F] p-4 rounded-2xl shadow-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SafeIcon icon={FiStar} className="text-2xl" />
              <p className="font-bold text-sm mt-1">Versatile</p>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-[#E3891A] text-white p-4 rounded-full shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <SafeIcon icon={FiCoffee} className="text-2xl mx-auto mb-1" />
                <p className="text-xs font-bold">Perfect Match</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoToSweetener;