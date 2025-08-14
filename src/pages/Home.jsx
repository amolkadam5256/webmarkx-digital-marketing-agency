import React from 'react'
import HomeSection from "../components/HomeComp/HeroSection";
import HomeAboutUs from '../components/HomeComp/HomeAboutUs';
import HomeServiceSection from '../components/HomeComp/HomeServiceSection';

const Home = () => {
  return (
    <>
      <main className='mt-1'>
        <HomeSection />
        <HomeAboutUs />
        <HomeServiceSection />
      </main>
    </>
  )
}

export default Home