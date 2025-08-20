import React from 'react'
import PricingSection from '../components/PriceComp/PricingSection';
import CustomPlanSection from '../components/PriceComp/CustomPlanSection';

const Pricing = () => {
  return (
      <main className='mt-10'>
        <PricingSection />
        <CustomPlanSection />
      </main>
  )
}

export default Pricing