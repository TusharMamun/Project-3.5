import React, { useState } from 'react'

const PriceSection = () => {
    const [Productcunt,setProduct] = useState(1)
// // calculation
const startePrice = Math.round(4000* (Productcunt/50))
const besenussPrice = Math.round(7500* (Productcunt/50))
  return (
   <section className='py-20 px-4'>
<div className='max-w-6xl mx-auto'>
<h1 className='text-3q md:text-4xl lg:text-5xl text-center mb-4'>Service Priceing </h1>
<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
  <div className='bg-white p-8 rounded-lg shadow-lg'>
    <h1 className='text-xl text-gray-600 mb-4'>Strtert plan</h1>
    <p className='text-3xl font-bold mt-3'>${startePrice}/mo</p>
  </div>
  <div className='bg-white p-8 rounded-lg shadow-lg'>
    <h1 className='text-xl text-gray-600 mb-4'>Beseness  plan</h1>
    <p className='text-3xl font-bold mt-3'>${besenussPrice}/mo</p>
  </div>
</div>
<div className='max-w-xl mx-auto'>
  <p className='text-center text-gray-600 mb-4 mt-4  '>{Productcunt}</p>
</div>
<div>
  <div className='relative px-4`'>
    <div className='flex items-center gap-2 '>
      <span className='text-xs sm:text-sm text-gray-600 '>{Productcunt}</span>
      <input className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none curso-pi' type='range' min="1" max="50" value={Productcunt} onChange={(e)=> setProduct(parseInt(e.target.value))} />
      <span className='text-xs sm:text-sm text-gray-600'>{Productcunt}</span>
    </div>
  </div>
</div>
<div className='text-center mt-6'>
  <p className=' text-xl text-gray-700 mb-4 '>Ready to get Started?</p>
  <button className='bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-950 transition-colors cursor-pointer '> Get Started</button>
</div>
</div>
   </section>
  )
}

export default PriceSection