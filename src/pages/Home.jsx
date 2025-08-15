import React from 'react'
import HomeSection from "../components/HomeComp/HeroSection";
import HomeAboutUs from '../components/HomeComp/HomeAboutUs';
import HomeServiceSection from '../components/HomeComp/HomeServiceSection';
import OurBenefits from '../components/HomeComp/OurBenefits';

const Home = () => {
  return (
    <>
      <main className='mt-1'>
        <HomeSection />
        <HomeAboutUs />
        <HomeServiceSection />
        <OurBenefits/>
      </main>
    </>
  )
}

export default Home