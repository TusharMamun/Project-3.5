import React from 'react'

const FeatureSction = () => {
      const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]

  return (
    <div className='max-w-7xl mx-auto px-4 py-16 ' id='about'>
      {/* heading seaction */}
  <div className='text-center'>
<h1 className='text-5xl text-gray-600 sm:text-3xl font-extrabold mb-2'>How can we help your Business?</h1>
<p  className='text-sm text-gray-600 font-bold '>When you resell besnik, your buld and increas </p>
  </div>
{/* three section */}

<div className='grid grid-cols-1 md:grid-cols-3 gap-8  mt-12'>
{
 features.map((featur,index)=>(
    <div key={index} className='flex flex-col items-center p-6 text-center'>
        <div className=' w-24 h-24 rounded-full mb-6 flex items-center justify-center' style={{
    backgroundColor:index === 0 ? "#F1EFFD" : index ===1 ? " #FEE7E7" : "#FFF3E4"
        }}>
          <div className='text-3xl '>{featur.icon}</div>
      
        </div>
    <h1 className='text-2xl sm:text-xl text-gray-700 font-bold'>{featur.title}</h1>   
    <p className=' text-sm font-light mt-2'>{featur.description}</p>
    </div>
 ))
}
</div>
<div className='text-center mt-12'>
  <button className=' bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-amber-900 transition-colors relative '>
    Beacom A Partner
    <div className=' absolute -z-10 w-full h-full rounded-ful bg-blue-950/50 top-0 left-0 blur-xl'>

    </div>
  </button>
</div>
    </div>
  )
}

export default FeatureSction