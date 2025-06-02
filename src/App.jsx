import React from 'react'
import NavBer from './Component/NavBer'
import Hero from './Component/Hero'
import CompenyLogo from './Component/CompenyLogo'
import PurposeSection from './Component/PurposeSection'
import FeatureSction from './Component/FeatureSction'

import MonitoringSection from './Component/MonitoringSection'
import PriceSection from './Component/PriceSection'
import ServiceSection from './Component/ServiceSection'
import TestimonialSection from './Component/TestimonialSection'
import NewsLetter from './NewsLetter'
import Fotter from './Component/Fotter'
import ShudulingSction from './Component/ShudulingSction'



const App = () => {
  return (
   <>
<NavBer></NavBer>
<Hero></Hero>
<CompenyLogo/>
<PurposeSection/>
<FeatureSction></FeatureSction>
<ShudulingSction></ShudulingSction>
<MonitoringSection></MonitoringSection>
<PriceSection></PriceSection>
<ServiceSection></ServiceSection>
<TestimonialSection></TestimonialSection>
<NewsLetter></NewsLetter>
<Fotter></Fotter>

   </>
  )
}

export default App