import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import EmailOptIn from '../components/EmailOptIn';
import Differentiation from '../components/Differentiation';
import Benefits from '../components/Benefits';
import Servings from '../components/Servings';
import GoToSweetener from '../components/GoToSweetener';
import Sustainability from '../components/Sustainability';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

const LandingPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-[#F6E2B6]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      <EmailOptIn />
      <Differentiation />
      <Benefits />
      <Servings />
      <GoToSweetener />
      <Sustainability />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </motion.div>
  );
};

export default LandingPage;