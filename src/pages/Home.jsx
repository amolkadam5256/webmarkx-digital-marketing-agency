import React from 'react'
import HomeSection from "../components/HomeComp/HeroSection";
import HomeAboutUs from '../components/HomeComp/HomeAboutUs';
import HomeServiceSection from '../components/HomeComp/HomeServiceSection';
import OurBenefits from '../components/HomeComp/OurBenefits';
import StatsBanner from '../components/HomeComp/StatsBanner';
import Testimonials from '../components/HomeComp/Testimonials';
import BlogSection from '../components/HomeComp/BlogSection';

const Home = () => {
  return (
    <>
      <main className='mt-1'>
        <HomeSection />
        <HomeAboutUs />
        <HomeServiceSection />
        <OurBenefits/>
        <StatsBanner/>
        <Testimonials/>
        <BlogSection/>
      </main>
    </>
  )
}

export default Home