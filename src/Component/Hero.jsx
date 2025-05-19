import React from 'react'

const Hero = () => {
  return (
   <section className='container mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8  flex flex-col md:flex-row justify-between items-center'>
 {/* left section */}
<div className='w-full md:w-1/2 space-y-8'>
<div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
  <span className='text-xl text-blue-600 group-hover:scale-110 transition-all group-hover:text-amber-200'>★</span>
  <span className='text-sm font-medium '>Jump Start Your Growth</span>

</div>

<h1 className=' text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'> We Boost the growth for
<span className='text-blue-600 relative inline-block '>Startup to fertune 500
  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
  </span> Companies <span className='inline-block ml-2 animate-pulse'>
    🕒</span>
     </h1>
</div>





 {/* right SEction */}
<div className='w-full md:w-1/2'>
write cal
</div>



   </section>
  )
}

export default Hero