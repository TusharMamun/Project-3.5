
import scauImg from "../assets/stats.webp"
import { FaArrowRightLong } from "react-icons/fa6";
const ShudulingSction = () => {
  return (
   <section>
    <div className='max-w-7xl mx-auto px-4 py-16 md'>
<div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6'>
    {/* left section */}
<div className='md:w-1/2 w-full'>
    <img className='w-full h-auto' src={scauImg} alt="img" />

</div>
{/* right site */}
<div className='md:w-1/2 w-full'>
<p className='text-orange-500 font-semibold'>SCHEDULE</p>
<h2 className=' text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'> 
    Streamline YOur business <br />
    With smart schedulin Solutions 
</h2>
<p className='text-gray-600 mb-8'> ake control of your time and boost productivity with our intellingent schedulin system. automate appointments, manse team availability , and deliver exceptional customer experiences throug seamless calendar managmnt</p>
<a className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 ' href="">
    Expolor Schedulin Features 
    <FaArrowRightLong className='size-8' />
</a>

</div>
</div>
    </div>
   </section>
  )
}

export default ShudulingSction