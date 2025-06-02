import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Fotter = () => {
    const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }
  return (
<footer className='bg-gray-50'>
<div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
  {/* brend section and icon */}
  <div className='lg:col-span-4 '>
  <div className='flex items-center gap-8'>
    <div className='flex items-center gap-1 cursor-pointer'>
    <div className='w-4 h-4 bg-blue-600 gap-1 cursor-pointer rounded-full hover:opacity-78 opacity-100 transition-all'>

    </div>
    <div className='w-4 h-4 bg-red-600 -ml-2 cursor-pointer rounded-full transition-all'> 

    </div>

</div>
<h1 className='text-xl font-medium '>The Next Desing</h1>
  </div>
  <p className='text-gray-600 mt-6 '>The copy Warned the Little Blind Text ,that wher it came form it would have been rewritten a Thousand times</p>
  <div className='flex gap-4 mt-6'>
    <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200' >
    <FaFacebook className='size-8'/></a>
    <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200' >
    <FaInstagram className='size-8'/></a>
    <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200' >
    <FaLinkedin className='size-8'/></a>

  </div>
</div>
{/* footer navigation */}
<div className='lg:col-span-8'>
<div className='grid grid-cols-2 md:grid-cols-4  gap-8'>
  {Object.entries(footerLinks).map(([category, links],categorindex)=>(
    <div key={categorindex}>
      <h3 className='text-lg font-bold mb-4 uppercase'>{category}</h3>
      <ul className='space-y-3'>
        {links.map((link,index)=>(
          <li key={index} >
            <a className=' text-gray-600 hover:text-gray-500 ' href="#">{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
</div>
</div>
{/* footer Bootom secton */}
<div className='border-t border-gray-200 mt-12 pt-8'>
  <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
    <p className='text-gray-600 text-sm'>copyright © {new Date().getFullYear()} learbyTeotorialPoint.com</p>
    <p className='text-gray-600 text-sm'>created By Tushar Mamun</p>
  </div>
</div>

</div>

</footer>
  )
}

export default Fotter