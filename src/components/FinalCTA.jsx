import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiClock, FiStar, FiGift, FiMail, FiUser } from 'react-icons/fi';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef(null);

  // Effect to expose the section reference to window for scrolling
  useEffect(() => {
    // Make the reference available globally for direct scrolling
    window.finalCTASection = sectionRef.current;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && firstName) {
      setIsSubmitting(true);
      setError('');
      try {
        // Send data to the webhook
        const response = await fetch(
          'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZhMDYzNTA0MzU1MjZmNTUzMjUxMzYi_pc',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              firstName,
              source: 'final_cta',
              timestamp: new Date().toISOString()
            }),
          }
        );

        if (response.ok) {
          setIsSubmitted(true);
          console.log('Final CTA email submitted:', email, 'First name:', firstName);
        } else {
          console.error('Failed to submit form:', response.statusText);
          setError('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setError('Network error. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="early-bird-pricing"
      className="py-20 bg-gradient-to-br from-[#E3891A] to-[#C06611] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8 max-w-2xl mx-auto"
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4 text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Don't Miss Out—
                <br />
                <span className="text-[#F6E2B6]">Early Bird</span> Pricing!
              </motion.h2>

              <motion.p
                className="text-xl mb-6 opacity-90 text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Lock in your discount before we launch
              </motion.p>

              <motion.p
                className="text-lg mb-8 text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Join our VIP list now and save <strong>25%</strong> when we launch + free shipping on your first order
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3 flex flex-col items-center"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-md mx-auto">
                {[
                  "25% launch discount",
                  "Free shipping on first order",
                  "Exclusive VIP access",
                  "Money-back guarantee"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiStar} className="text-[#F6E2B6] text-lg" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Email Form */}
            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md mx-auto"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C06611] text-xl" />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-white/20 focus:border-white focus:outline-none text-[#3F200F] text-lg bg-white placeholder-[#3F200F]/60"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="relative">
                  <SafeIcon icon={FiMail} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C06611] text-xl" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for VIP access"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-white/20 focus:border-white focus:outline-none text-[#3F200F] text-lg bg-white placeholder-[#3F200F]/60"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {error && (
                  <p className="text-red-100 text-sm text-center">{error}</p>
                )}

                <motion.button
                  type="submit"
                  className="w-full bg-white text-[#E3891A] font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#F6E2B6] transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#E3891A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Secure My 25% Discount"
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm max-w-md mx-auto"
              >
                <SafeIcon icon={FiStar} className="text-4xl text-[#F6E2B6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-center">Welcome to the VIP List, {firstName}!</h3>
                <p className="text-center opacity-90">
                  You'll be the first to know when Cravely launches, with your exclusive 25% discount ready to go.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-20 pt-8 border-t border-white/20 text-center text-white/80"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p>&copy;2025 Cravely. The sweetener you've been missing your whole life.</p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;