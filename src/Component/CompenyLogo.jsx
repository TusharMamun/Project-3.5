import React from 'react'
import arogga from "../assets/arogga.png"
import arogga2 from "../assets/arogga2.png"
import slack from "../assets/slack.png"
import meundies from "../assets/meundies.png"
import sidpoint from "../assets/sitepoint.png"
import Woocomerce from "../assets/woocommerce.png"
const CompenyLogo = () => {
    const logos=[sidpoint,meundies,slack,arogga,arogga2,Woocomerce]
  return (
    <div className='w-full container mx-auto overflow-hidden py-20  flex sm:flex-row flex-col  sm:items-center items-center  '>
      <div className=' w-[300px] shrink-0 px-8 text-gray-600  border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-center text-xl text-left '>
          Porud partner at <br /> Hubspot & segment
        </div> 
       <div className=' flex whitespace-nowrap animation-marquee sm:mt-6 '>
        {
            logos.map((logo,index)=>(
                <img className=' mx-12 h-8 w-36 object-contain grayscale opacit-70 hover:grayscale-0 opacity-100 transition-all' key={index} src={logo} alt="" />
            ))
        }
        {
            logos.map((logo,index)=>(
                <img className=' mx-12 h-8 w-36 object-contain grayscale opacit-70 hover:grayscale-0 opacity-100 transition-all' key={`duplicate${index}`} src={logo} alt="" />
            ))
        }
       </div>
       
     
       </div>
  )
}

export default CompenyLogo