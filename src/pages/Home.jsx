import React from 'react'
import HomeSection from "../components/HomeComp/HeroSection";
import HomeAboutUs from '../components/HomeComp/HomeAboutUs';
import HomeServiceSection from '../components/HomeComp/HomeServiceSection';
import OurBenefits from '../components/HomeComp/OurBenefits';
import StatsBanner from '../components/HomeComp/StatsBanner';
import Testimonials from '../components/HomeComp/Testimonials';
import BlogSection from '../components/HomeComp/BlogSection';
import CTASection from '../components/HomeComp/CTASection';

const Home = () => {
  return (
    <>
      <main className=''>
        <HomeSection />
        <HomeAboutUs />
        <HomeServiceSection />
        <OurBenefits />
        <StatsBanner />
        <Testimonials />
        <BlogSection />
        <CTASection />
      </main>
    </>
  )
}

export default Home