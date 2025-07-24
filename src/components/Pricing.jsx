import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import {FiDollarSign,FiCalendar,FiCoffee,FiShoppingBag} from 'react-icons/fi';

const Pricing=()=> {
  // Function to handle scrolling to Final CTA section
  const scrollToFinalCTA=()=> {
    // Find the Final CTA section by looking for the heading text
    const finalCTASection=document.querySelector('h2[class*="text-4xl"][class*="font-bold"]:not([class*="text-[#3F200F]"])');
    
    if (finalCTASection) {
      // Get the parent section element
      let targetSection=finalCTASection;
      while (targetSection && targetSection.tagName !=='SECTION') {
        targetSection=targetSection.parentElement;
      }
      
      if (targetSection) {
        targetSection.scrollIntoView({behavior: 'smooth',block: 'start'});
      }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#D0D5A3] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#E3891A] rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-[#C06611] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{x: -50,opacity: 0}}
            whileInView={{x: 0,opacity: 1}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-[#3F200F] mb-6"
                initial={{y: 20,opacity: 0}}
                whileInView={{y: 0,opacity: 1}}
                transition={{duration: 0.6,delay: 0.2}}
                viewport={{once: true}}
              >
                An Investment in <span className="text-[#E3891A]">Sweetness</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-[#3F200F] mb-8"
                initial={{y: 20,opacity: 0}}
                whileInView={{y: 0,opacity: 1}}
                transition={{duration: 0.6,delay: 0.3}}
                viewport={{once: true}}
              >
                One jar. Months of perfect sweetness.
              </motion.p>
            </div>
            
            <motion.div
              initial={{y: 20,opacity: 0}}
              whileInView={{y: 0,opacity: 1}}
              transition={{duration: 0.6,delay: 0.4}}
              viewport={{once: true}}
              className="bg-[#F6E2B6]/50 p-8 rounded-2xl border-l-4 border-[#E3891A]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#E3891A] p-3 rounded-full flex-shrink-0 mr-4">
                  <SafeIcon icon={FiDollarSign} className="text-white text-xl" />
                </div>
                <p className="text-2xl font-bold text-[#3F200F]">
                  For just <span className="text-[#E3891A]">$30</span>,you unlock over 200 servings of pure,guilt-free flavor.
                </p>
              </div>
              <p className="text-[#3F200F] ml-16">
                That's less than 15 cents to transform your daily coffee,bake a batch of cookies,or sweeten your favorite yogurt.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                {
                  icon: FiCoffee,
                  title: "Value that adds up",
                  description: "No more wasted money on products with a bitter aftertaste or hidden junk."
                },
                {
                  icon: FiCalendar,
                  title: "Long-lasting satisfaction",
                  description: "This is an investment in taste and wellness that truly pays for itself."
                }
              ].map((point,index)=> (
                <motion.div 
                  key={index}
                  initial={{y: 30,opacity: 0}}
                  whileInView={{y: 0,opacity: 1}}
                  transition={{duration: 0.6,delay: 0.5 + index * 0.1}}
                  viewport={{once: true}}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-[#D0D5A3] p-3 rounded-full flex-shrink-0">
                    <SafeIcon icon={point.icon} className="text-[#3F200F] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3F200F] text-lg mb-1">{point.title}</h4>
                    <p className="text-[#3F200F]/80">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{y: 30,opacity: 0}}
              whileInView={{y: 0,opacity: 1}}
              transition={{duration: 0.6,delay: 0.7}}
              viewport={{once: true}}
              className="text-center py-4"
            >
              <p className="text-[#3F200F] text-xl font-bold italic">
                One-time cost. Months of delight.
              </p>
            </motion.div>
            
            <motion.div
              initial={{y: 30,opacity: 0}}
              whileInView={{y: 0,opacity: 1}}
              transition={{duration: 0.6,delay: 0.8}}
              viewport={{once: true}}
              className="flex justify-center"
            >
              <motion.button
                className="bg-[#E3891A] hover:bg-[#C06611] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={scrollToFinalCTA}
              >
                <SafeIcon icon={FiShoppingBag} className="text-xl" />
                <span>Sign up for early access and save 25%</span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Visual Content */}
          <motion.div
            initial={{x: 50,opacity: 0}}
            whileInView={{x: 0,opacity: 1}}
            transition={{duration: 0.8,delay: 0.2}}
            viewport={{once: true}}
            className="relative"
          >
            <div className="relative">
              {/* Price Breakdown Card */}
              <motion.div 
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#D0D5A3]"
                whileHover={{y: -5}}
                transition={{duration: 0.3}}
              >
                <div className="bg-[#D0D5A3] py-4 px-6">
                  <h3 className="text-2xl font-bold text-[#3F200F] text-center">Value Breakdown</h3>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mb-8">
                    <div className="text-center">
                      <p className="text-base sm:text-lg text-[#3F200F]/70 mb-2">Price</p>
                      <div className="text-2xl sm:text-3xl font-bold text-[#3F200F]">$30</div>
                    </div>
                    <div className="text-center">
                      <p className="text-base sm:text-lg text-[#3F200F]/70 mb-2">Servings</p>
                      <div className="text-2xl sm:text-3xl font-bold text-[#3F200F]">200+</div>
                    </div>
                    <div className="text-center">
                      <p className="text-base sm:text-lg text-[#3F200F]/70 mb-2">Cost Per Serving</p>
                      <div className="text-2xl sm:text-3xl font-bold text-[#E3891A]">~$0.15</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#3F200F] mb-2">What This Replaces:</h4>
                    
                    <div className="flex items-center justify-between bg-[#F6E2B6]/30 p-4 rounded-xl">
                      <div className="flex items-center">
                        <SafeIcon icon={FiCoffee} className="text-[#C06611] mr-3 text-xl" />
                        <span className="text-[#3F200F] text-sm sm:text-base">Coffee Shop Sweetener Packets</span>
                      </div>
                      <span className="font-bold text-[#3F200F] text-sm sm:text-base">$0.30/serving</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-[#F6E2B6]/30 p-4 rounded-xl">
                      <div className="flex items-center">
                        <SafeIcon icon={FiDollarSign} className="text-[#C06611] mr-3 text-xl" />
                        <span className="text-[#3F200F] text-sm sm:text-base">Grocery Store Stevia</span>
                      </div>
                      <span className="font-bold text-[#3F200F] text-sm sm:text-base">$0.25/serving</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-[#F6E2B6]/30 p-4 rounded-xl">
                      <div className="flex items-center">
                        <SafeIcon icon={FiShoppingBag} className="text-[#C06611] mr-3 text-xl" />
                        <span className="text-[#3F200F] text-sm sm:text-base">Premium Sugar</span>
                      </div>
                      <span className="font-bold text-[#3F200F] text-sm sm:text-base">$0.20/serving</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-[#E3891A]/10 rounded-xl border-l-4 border-[#E3891A]">
                    <p className="text-[#3F200F] font-medium text-sm sm:text-base">
                      <span className="font-bold">Think of it this way:</span> It's a small price for ending the search for the perfect sweetener.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-[#E3891A] text-white p-4 rounded-full shadow-lg"
                animate={{y: [-5,5,-5]}}
                transition={{duration: 3,repeat: Infinity,ease: "easeInOut"}}
              >
                <div className="text-center">
                  <p className="text-sm font-bold">SAVE</p>
                  <p className="text-xl font-bold">25%</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-[#D0D5A3] text-[#3F200F] p-4 rounded-2xl shadow-lg"
                animate={{rotate: [0,5,-5,0]}}
                transition={{duration: 4,repeat: Infinity,ease: "easeInOut"}}
              >
                <p className="font-bold text-sm">Best Value</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;