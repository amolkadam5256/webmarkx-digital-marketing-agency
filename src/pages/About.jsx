import React from 'react'
import AboutHeroSection from '../components/AboutComp/AboutHeroSection';
import AboutBannerSection from '../components/AboutComp/AboutBannerSection';
import  ProcessSection from '../components/AboutComp/ProcessSection';
import WhyChooseUs from '../components/AboutComp/WhyChooseUs';
import ContactSection from '../components/AboutComp/ContactSection';

import StatsBanner from '../components/HomeComp/StatsBanner';
import Testimonials from '../components/HomeComp/Testimonials';
import CTASection from '../components/HomeComp/CTASection';

const About = () => {
  return (
    <>
      <main className='mt-1'>
        <AboutHeroSection/>
        <AboutBannerSection />
        <ProcessSection/>
        <WhyChooseUs/>
        <ContactSection/>
        <StatsBanner/>
        <Testimonials/>
        <CTASection/> 
      </main>
    </>
  )
}

export default About