import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const NavBer = () => {
  const[activeLink,SetActiveLink] = useState("#home")
  const [IsMenuOpen,SetMenuOpen] =useState(false)
  const navlink=[
    {
      hraf:"#home" , lebel:"HOME"
    },
    {
      hraf:"#about" , lebel:"ABOURT"
    },
    {
      hraf:"#service" , lebel:"Our SERVICE"
    },
   
    {
      hraf:"#testomonia" , lebel: "TESTIMONIALS"
    },
 
    
  ]
  return (
  <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
<div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
    {/* logo section */}
<div className='flex items-center gap-1 cursor-pointer'>
    <div className='w-4 h-4 bg-blue-600 gap-1 cursor-pointer rounded-full hover:opacity-78 opacity-100 transition-all'>

    </div>
    <div className='w-4 h-4 bg-red-600 -ml-2 cursor-pointer rounded-full transition-all'> 

    </div>

</div>
   {/* mobille Section iconMenu */}
   <button onClick={()=>SetMenuOpen(!IsMenuOpen)} className='md:hidden p-2 w-2 h-2 rounded-full`'>
   {
    IsMenuOpen ? <HiX/> : <HiMenu/>
   }
   </button>

    {/* desktop Navber */}
    <div className='hidden md:flex items-center gap-10 '>
      {
        navlink.map((link,index)=>(
          <a onClick={()=>SetActiveLink(link.hraf)} key={index} href={link.hraf} className={`text-sm font-medium relative after:absolute after:-bottom-4                     after:left-0  after:h-0.5 after:w-0 hover:after:w-full after:bg-red-700 after:transition-all${activeLink === link.hraf ? "text-blue-600 after:w-full":"text-gray-600 hover:text-red-900"}`}>{link.lebel}</a>
        ))
      }
  
    </div>
<button className='hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-900 rtext-sm hover:shadow-blue-500 ml-2'>
  <a href="#newsLeatter">
    GET IN TUCH
  </a>
</button>
 

</div>
{/* mobile menu items */}
{
  IsMenuOpen  && (
    <div className='md:hidden bg-yellow-100 border-t border-gray-100 py-4 '>
      <div className='container mx-auto px-4 space-y-4'>
        {
        navlink.map((link,index)=>(
          <a onClick={()=>
         {SetActiveLink(link.hraf);
          SetMenuOpen(false)
         }
          } className={`block text-sm font-medium py-2  text-center ${activeLink === link.hraf ? "text-blue-600 ho":"text-gray-600 hover:text-gray-900 "}`} key={index} href={link.hraf}>{link.lebel}</a>
        ))
        }
        <button className=' w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-900 rtext-sm hover:shadow-blue-500'>
  <a href="#newsLeatter">
    GET IN TUCH
  </a>
</button>
      </div>
    </div>
  )
}
  </nav>
  )
}

export default NavBer