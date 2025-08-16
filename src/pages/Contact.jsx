import React from 'react'
import ContactForm from '../components/ContactComp/ContactForm';

import  ProcessSection from '../components/AboutComp/ProcessSection';
import WhyChooseUs from '../components/AboutComp/WhyChooseUs';

import CTASection from '../components/HomeComp/CTASection';

const Contact = () => {
  return (
    <>
      <main className='mt-1'>
        <ContactForm/>
        <ProcessSection/>
        <WhyChooseUs/>
        <CTASection/> 
      </main>
    </>
  )
}

export default Contact