import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiHeart, FiTrendingDown, FiUsers } from 'react-icons/fi';

const Benefits = () => {
  const benefits = [
    {
      icon: FiTrendingDown,
      title: "Low glycemic impact",
      description: "Won't spike your blood sugar."
    },
    {
      icon: FiUsers,
      title: "Gut-friendly",
      description: "Yacón contains natural prebiotics that feed healthy gut bacteria."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6E2B6]/20 via-transparent to-[#D0D5A3]/20"></div>
      
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
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753389797210-AD73BDB8-8F4F-4231-9BB5-20DAFA9BB029.png" 
                alt="Health and gut wellness"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover md:object-contain lg:object-cover filter sepia-[0.1] saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D0D5A3]/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-[#E3891A] text-white p-4 rounded-2xl shadow-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SafeIcon icon={FiHeart} className="text-2xl" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-[#D0D5A3] text-[#3F200F] p-4 rounded-2xl shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-bold text-sm">100% Natural</p>
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
                <span className="text-[#E3891A]">Gut-friendly</span> & Low Glycemic
              </motion.h2>
              
              <motion.p 
                className="text-xl text-[#3F200F] mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Unlike synthetic sweeteners or sugar alcohols that can upset your gut, stevia and yacón support it.
              </motion.p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-[#F6E2B6] p-6 rounded-2xl"
                >
                  <div className="bg-[#E3891A] p-3 rounded-full flex-shrink-0">
                    <SafeIcon icon={benefit.icon} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3F200F] text-lg mb-2">{benefit.title}:</h3>
                    <p className="text-[#3F200F]">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-[#D0D5A3] p-6 rounded-2xl border-l-4 border-[#E3891A]"
            >
              <p className="text-[#3F200F] text-lg font-semibold italic">
                "Sweetness you can feel good about—literally."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;