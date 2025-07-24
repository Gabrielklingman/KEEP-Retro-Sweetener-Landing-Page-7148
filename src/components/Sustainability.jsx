import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiBox, FiRefreshCw, FiTarget } from 'react-icons/fi';

const Sustainability = () => {
  const features = [
    {
      icon: FiTarget,
      title: "Responsibly sourced ingredients",
      description: "Ethically harvested from sustainable farms"
    },
    {
      icon: FiBox,
      title: "Recyclable, eco-friendly packaging",
      description: "Minimal waste, maximum protection"
    },
    {
      icon: FiRefreshCw,
      title: "No unnecessary waste",
      description: "Every element serves a purpose"
    }
  ];

  return (
    <section className="py-20 bg-[#F6E2B6] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <circle cx="20" cy="20" r="2" fill="#E3891A"/>
          <circle cx="80" cy="20" r="1.5" fill="#C06611"/>
          <circle cx="20" cy="80" r="1" fill="#D0D5A3"/>
          <circle cx="80" cy="80" r="2.5" fill="#E3891A"/>
          <circle cx="50" cy="50" r="1.5" fill="#C06611"/>
        </svg>
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
                <span className="text-[#D0D5A3]">Sustainable</span> packaging
              </motion.h2>
              
              <motion.p
                className="text-xl text-[#3F200F] mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                From ingredient to packaging, we believe good products shouldn't cost the planet.
              </motion.p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-[#D0D5A3] p-3 rounded-full flex-shrink-0">
                    <SafeIcon icon={feature.icon} className="text-[#3F200F] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3F200F] text-lg mb-1">• {feature.title}</h3>
                    <p className="text-[#3F200F]/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <p className="text-[#3F200F] text-lg font-semibold italic text-center">
                "Minimal footprint. Maximum flavor."
              </p>
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
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753388922373-876F29F8-4171-4F05-916B-01B8E7FE684F.png"
                alt="Eco-friendly packaging"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover md:object-contain lg:object-cover filter sepia-[0.1] saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D0D5A3]/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -top-6 -left-6 bg-[#D0D5A3] text-[#3F200F] p-4 rounded-2xl shadow-lg"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SafeIcon icon={FiTarget} className="text-2xl" />
              <p className="font-bold text-sm mt-1">Eco-Friendly</p>
            </motion.div>
            
            {/* Recycling Symbol */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white text-[#D0D5A3] p-4 rounded-full shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <SafeIcon icon={FiRefreshCw} className="text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;