import React from 'react'
import heroimg from '../assets/hero-image.png'
import { motion } from "framer-motion"
import { textVariant } from '../ulties/motion'
const Hero = () => {
  
  return (
   <section id='home' className='container mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8  flex flex-col md:flex-row justify-between items-center'>
 {/* left section */}
<div className='w-full md:w-1/2 space-y-8'>
<div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
  <span className='text-xl text-blue-600 group-hover:scale-110 transition-all group-hover:text-amber-200'>★</span>
  <span className='text-sm font-medium '>Jump Start Your Growth</span>

</div>

<motion.h1
variants={textVariant(.03)}
initial="hidden"
whileInView="show"

className=' text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'> We Boost the growth for
<span className='text-blue-600 relative inline-block '>Startup to fertune 500
  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
  </span> Companies <span className='inline-block ml-2 animate-pulse'>
    🕒</span>
     </motion.h1>
     <p className='text-gray-600 text-lg md:text-xl max-w-xl'>Get the most accureate leads, sales people tranining and conversitos, tools and more all within the same one billing.</p>
     <div className='flex gap-2 max-w-md'>
      <input  className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-blue-200 transition-all' type="email" placeholder='Email Addres' />
<button className='bg-blue-600 text-xl text-white rounded-2xl hover:bg-amber-500 px-8 py-4  hover:text-black'>
  →
</button>
     </div>
</div>
 




 {/* right SEction */}
<div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:p-12'>
<div className='relative'>
  <img src={heroimg} className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-500' alt="" />
</div>
</div>



   </section>
  )
}

export default Hero