import React from 'react'
import FinancingHero from './comp/hero'
import WhyFinance from './comp/whyFinance'
import FinancingSteps from './comp/finacesteps'
import FinancingCalculator from './comp/calculator'
import FinancingForm from './comp/application'
import FinancingFAQ from './comp/FAQ'
import FinancingCTA from './comp/CTA'

const page = () => {
  return (
    <div>
        <FinancingHero/>
        <WhyFinance/>
        <FinancingSteps/>
        <FinancingCalculator/>
        <FinancingForm/>
        <FinancingFAQ/>
        <FinancingCTA/>
    </div>
  )
}

export default page