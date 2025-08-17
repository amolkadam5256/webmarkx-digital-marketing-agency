import React from 'react'
import ServiceHeroSection from '../components/ServicesComp/ServiceHeroSection';
import HomeAboutUs from '../components/HomeComp/HomeAboutUs';
import StatsBanner from '../components/HomeComp/StatsBanner';
import Testimonials from '../components/HomeComp/Testimonials';
import CTASection from '../components/HomeComp/CTASection';
import ContentMarketingFAQ from '../components/ServicesComp/ContentMarketingFAQ';

const Services = () => {
  return (
    <>
      <main className=''>
        <ServiceHeroSection />
        <HomeAboutUs/>
        <StatsBanner/>
        <Testimonials/>
        <CTASection/> 
        <ContentMarketingFAQ/>
      </main>
    </> 
  )
}

export default Services