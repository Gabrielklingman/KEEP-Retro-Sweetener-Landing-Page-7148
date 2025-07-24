import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import {FiHeart} from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6E2B6] via-[#F6E2B6] to-[#D0D5A3] opacity-50"></div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-20 right-10 text-[#C06611] opacity-40"
        animate={{y: [-10, 10, -10]}}
        transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
      >
        <SafeIcon icon={FiHeart} className="text-4xl" />
      </motion.div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left pt-8 lg:pt-0" // Keeping padding on mobile, removing on desktop
          initial={{x: -50, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-[#3F200F] mb-6 leading-tight"
            initial={{y: 30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.4}}
          >
            Stevia, <span className="text-[#E3891A] italic">evolved</span> <br />
            Thanks to <span className="bg-gradient-to-r from-[#C06611] to-[#E3891A] bg-clip-text text-transparent">Yacón</span>.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#3F200F] mb-4 font-medium"
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.6}}
          >
            No synthetic junk, no bad aftertaste.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-[#C06611] font-semibold italic"
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
          >
            The best sweetener you'll ever have.
          </motion.p>
        </motion.div>
        
        {/* Image Content */}
        <motion.div 
          className="relative"
          initial={{x: 50, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.4}}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753389558262-blob" 
              alt="Person enjoying coffee with warm lighting"
              className="w-full h-[500px] md:h-[550px] lg:h-[600px] object-cover md:object-contain lg:object-cover filter sepia-[0.2] saturate-110 brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3F200F]/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-[#E3891A] text-white px-6 py-4 rounded-2xl shadow-lg"
            animate={{y: [-5, 5, -5]}}
            transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
          >
            <p className="font-bold text-lg">100% Natural</p>
            <p className="text-sm opacity-90">Zero Calories</p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path d="M0,120 C300,80 600,40 900,60 C1050,70 1150,90 1200,100 L1200,120 Z" fill="#F6E2B6" fillOpacity="0.8"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;