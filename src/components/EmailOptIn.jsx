import React, {useState} from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import {FiMail, FiStar, FiUser} from 'react-icons/fi';

const EmailOptIn = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && firstName) {
      setIsSubmitting(true);
      setError('');
      
      try {
        // Send data to the webhook
        const response = await fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZhMDYzNTA0MzU1MjZmNTUzMjUxMzYi_pc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            firstName,
            source: 'email_optin',
            timestamp: new Date().toISOString()
          }),
        });
        
        if (response.ok) {
          setIsSubmitted(true);
          console.log('Email submitted:', email, 'First name:', firstName);
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#E3891A] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#D0D5A3] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#C06611] rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#F6E2B6] p-4 rounded-full">
              <SafeIcon icon={FiStar} className="text-3xl text-[#E3891A]" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#3F200F] mb-6">
            Sign up for <span className="text-[#E3891A]">exclusive</span> early access.
          </h2>
          
          <p className="text-xl text-[#3F200F] mb-12 max-w-2xl mx-auto">
            Be the first to try it—get early access + an exclusive launch discount!
          </p>
          
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
              initial={{scale: 0.9, opacity: 0}}
              whileInView={{scale: 1, opacity: 1}}
              transition={{duration: 0.5, delay: 0.2}}
              viewport={{once: true}}
            >
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <SafeIcon
                    icon={FiUser}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C06611] text-xl"
                  />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-[#D0D5A3] focus:border-[#E3891A] focus:outline-none text-[#3F200F] text-lg bg-[#F6E2B6]/30 placeholder-[#3F200F]/60"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="relative">
                  <SafeIcon
                    icon={FiMail}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C06611] text-xl"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-[#D0D5A3] focus:border-[#E3891A] focus:outline-none text-[#3F200F] text-lg bg-[#F6E2B6]/30 placeholder-[#3F200F]/60"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                
                <motion.button
                  type="submit"
                  className="bg-[#E3891A] hover:bg-[#C06611] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : "Get Early Access"}
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{scale: 0.8, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{duration: 0.5}}
              className="bg-[#D0D5A3] p-8 rounded-2xl max-w-md mx-auto"
            >
              <SafeIcon icon={FiStar} className="text-4xl text-[#E3891A] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#3F200F] mb-2">You're In, {firstName}!</h3>
              <p className="text-[#3F200F]">
                We'll notify you when Cravely launches with your exclusive discount.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailOptIn;