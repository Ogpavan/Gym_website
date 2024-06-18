import React from 'react'

function Aboutus() {
  return (
    <section id="aboutus">
    <div className='flex justify-center lg:bg-black/90 lg:w-full'>
        <div className='px-5 py-4 lg:text-slate-50  text-gray-800 grid lg:flex   grid-cols-2 '>
        <div className='text-sm grid  p-2 lg:px-10 '>
            <h1 className='text-lg font-bold lg:text-xl '>500+</h1>
            <p>Happy Members</p>
            
        </div>
        <div className='text-sm grid p-2 lg:px-10'>
            <h1 className='text-lg font-bold lg:text-xl'>5+</h1>
            <p>Years Experiance</p>
           
        </div>
        <div className='text-sm grid p-2 lg:px-10'>
            <h1 className='text-lg font-bold lg:text-xl'>13+</h1>
            <p>Certified Trainers</p>
            
        </div>
        <div className='text-sm grid p-2 lg:px-10'>
            <h1 className='text-lg font-bold lg:text-xl '>90%</h1>
            <p>Customer Satiscfaction</p>
            
        </div>
        </div>
    </div>
    </section>
  )
}

export default Aboutus