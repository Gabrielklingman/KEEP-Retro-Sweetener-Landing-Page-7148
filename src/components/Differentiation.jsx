import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import {FiX, FiHeart, FiStar, FiShield} from 'react-icons/fi';

const Differentiation = () => {
  return (
    <section className="py-20 bg-[#F6E2B6] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#3F200F] leading-tight">
              Not your <span className="text-[#E3891A] italic">average</span> stevia...
            </h2>
            
            <div className="space-y-6 text-lg text-[#3F200F]">
              <motion.p
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.1}}
                viewport={{once: true}}
              >
                We've all tried it, and it's sort of okay... Until the aftertaste hits <span className="inline-block ml-2 text-2xl">😖</span>
              </motion.p>
              
              <motion.div
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.2}}
                viewport={{once: true}}
                className="bg-[#D0D5A3] p-6 rounded-2xl"
              >
                <p className="font-semibold text-[#3F200F] mb-2">
                  Yacón is the not-so-secret ingredient here.
                </p>
                <p>Yacón is a bit of a superfood that is incredibly sweet.</p>
              </motion.div>
              
              <motion.p
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.3}}
                viewport={{once: true}}
              >
                When combined with stevia... You'll want to put it in <strong>EVERYTHING</strong>.
              </motion.p>
              
              <motion.div
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.4}}
                viewport={{once: true}}
                className="flex items-center space-x-2 text-xl font-semibold"
              >
                <SafeIcon icon={FiHeart} className="text-[#E3891A]" />
                <span>It is the sweetener you've been missing your whole life.</span>
                <span className="text-2xl">✨❤️ 🌈</span>
              </motion.div>
              
              <motion.div
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.5}}
                viewport={{once: true}}
                className="bg-white p-6 rounded-2xl border-2 border-[#E3891A]"
              >
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiShield} className="text-[#E3891A] text-2xl" />
                  <div>
                    <p className="font-bold text-[#3F200F]">Don't believe us?</p>
                    <p className="text-[#3F200F]">We offer a no-hassle money-back guarantee if you don't absolutely love it.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}
            viewport={{once: true}}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Before Image - Regular Stevia */}
              <motion.div 
                className="relative"
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}
              >
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-center mb-3">
                    <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                      <SafeIcon icon={FiX} className="text-3xl text-red-500" />
                    </div>
                  </div>
                  <img 
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753391140966-Stevia.jpg" 
                    alt="Regular stevia with disappointed expression" 
                    className="w-full h-32 md:h-40 lg:h-48 object-cover md:object-contain lg:object-cover rounded-xl filter grayscale"
                  />
                  <p className="text-center mt-3 text-[#3F200F] font-semibold">Regular Stevia</p>
                  <p className="text-center text-sm text-red-500">That aftertaste... 😖</p>
                </div>
              </motion.div>
              
              {/* After Image - Cravely */}
              <motion.div 
                className="relative"
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}
              >
                <div className="bg-[#E3891A] p-4 rounded-2xl shadow-lg text-white">
                  <div className="text-center mb-3">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <SafeIcon icon={FiStar} className="text-3xl text-white" />
                    </div>
                  </div>
                  <img 
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753391666807-Image%20edition%20from%20Seelab%20%281%29.png" 
                    alt="Happy face enjoying Cravely sweetener" 
                    className="w-full h-32 md:h-40 lg:h-48 object-cover md:object-contain lg:object-cover rounded-xl filter brightness-110 saturate-110"
                  />
                  <p className="text-center mt-3 font-semibold">Cravely</p>
                  <p className="text-center text-sm opacity-90">Pure sweetness! 😍</p>
                </div>
              </motion.div>
            </div>
            
            {/* Floating Arrow */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{x: [0, 10, 0]}}
              transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
            >
              <div className="bg-white rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-[#E3891A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;