import React from 'react';


function Pricing() {
  return (
    <section id='pricing'>
    <div className='px-5 pt-10 lg:px-16'>
      <div className='flex justify-between'>
        <div>
          <p className='text-lg text-gray-600'>Pricing Plan</p>
          <h1 className='text-2xl font-bold '>JOIN TODAY</h1>
        </div>
        <div>
          <button className='text-sm shadow-xl px-3 py-2'>Monthly</button>
          <button className='text-sm shadow-xl bg-black text-white px-3 py-2 rounded-lg'>Yearly</button>
        </div>
      </div>

      <div className='flex overflow-auto'>
        <div className='p-5'>
          <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg px-4 py-4 space-y-4 min-w-80'>
            <h1 className='text-gray-600 text-lg font-semibold'>Beginner Plan</h1>
            <h1 className='text-4xl font-bold flex items-center'>$05
              <p className='text-lg font-thin'>/month</p>
            </h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, amet?</p>
            <ul className='list-disc text-md ml-8 pb-5'>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
         
              <button className='bg-black/90 font-semibold text-white px-3 w-full py-3 text-lg rounded-lg'>Choose Plan</button>
            
          </div>
        </div>

        <div className='p-5'>
          <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg px-4 py-4 space-y-4 bg-black text-white min-w-80'>
            <h1 className='text-gray-200 text-lg font-semibold'>Premium Plan</h1>
            <h1 className='text-4xl font-bold flex items-center'>$15
              <p className='text-lg font-thin'>/month</p>
            </h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, amet?</p>
            <ul className='list-disc text-md ml-8 pb-5'>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <button className='bg-white text-black font-semibold px-3 w-full py-3 text-lg rounded-lg'>Choose Plan</button>
          </div>
        </div>

        <div className='p-5'>
          <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg px-4 py-4 space-y-4 min-w-80'>
            <h1 className='text-gray-600 text-lg font-semibold'>Expert Plan</h1>
            <h1 className='text-4xl font-bold flex items-center'>$20
              <p className='text-lg font-thin'>/month</p>
            </h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, amet?</p>
            <ul className='list-disc text-md ml-8 pb-5'>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <button className='bg-black/90 font-semibold text-white px-3 w-full py-3 text-lg rounded-lg'>Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Pricing;
