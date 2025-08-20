import React from 'react'
import ContactForm from '../components/ContactComp/ContactForm';

import  ProcessSection from '../components/AboutComp/ProcessSection';
import WhyChooseUs from '../components/AboutComp/WhyChooseUs';

const Contact = () => {
  return (
    <>
      <main className='mt-1'>
        <ContactForm/>
        <ProcessSection/>
        <WhyChooseUs/>
      </main>
    </>
  )
}

export default Contact