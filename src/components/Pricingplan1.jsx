import { BicepsFlexed, X } from 'lucide-react';
import React from 'react';
import gorilla from '../assets/gorilla.png';

function Pricingplan1({ togglePricingPlan }) {
  return (
    <div className='bg-black/60 backdrop-blur-sm flex justify-center items-center fixed inset-0 z-[60]'>
      <div className='px-5 flex justify-center'>     <div className='bg-white lg:w-1/3 lg:h-5/6 rounded-xl  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-5 py-4'>
        <div className='flex justify-between '>
          <div className=''>
        <div className='flex items-center w-full space-x-3'>
          <BicepsFlexed className="text-white bg-black/90 p-1 rounded-full" size={40} />
          <h1 className='text-xl font-bold text-black/90'>Basic Details</h1>
          </div>
          </div>
          <div className=''>          <button onClick={togglePricingPlan}>
            <X size={30} />
          </button>
          </div>

          
        </div>
        <div className='lg:flex lg:flex-row-reverse'>
          <div className='py-4 lg:pt-10'>
            <div className="max-w-xl px-2 lg:space-y-10">
              <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-200 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="font-medium text-gray-400">
                    Drop image to Attach, or
                    <span className="text-blue-600 underline ">&nbsp;browse</span>
                  </span>
                </span>
                <input type="file" name="file_upload" className="hidden" />
              </label>
              <div>
                <img src={gorilla} className='hidden lg:block opacity-95' alt='Gorilla' />
              </div>
            </div>
          </div>
          <div>
            <div className='space-y-4 lg:py-7 px-2'>
              <input type='text' placeholder='Enter name' className='px-2 py-1 bg-gray-200 rounded-lg text-lg' />
              <input type='text' placeholder='Enter phone no.' className='px-2 py-1 bg-gray-200 rounded-lg text-lg' />
              <input type='text' placeholder='Enter Email' className='px-2 py-1 bg-gray-200 rounded-lg text-lg' />
            </div>
            <div className='py-3 space-y-3 space-x-3 lg:flex lg:items-center lg:flex-wrap'>
              <input type='text' placeholder='Select Gender' className='px-2 py-1 ml-3 bg-gray-200 rounded-lg text-lg w-32' />
              <input type='text' placeholder='Enter age' className='px-2 py-1 bg-gray-200 rounded-lg text-lg w-32' />
              <input type='text' placeholder='Enter height' className='px-2 py-1 bg-gray-200 rounded-lg text-lg w-32' />
              <input type='text' placeholder='Enter weight' className='px-2 py-1 bg-gray-200 rounded-lg text-lg w-32' />
            </div>
          </div>
        </div>
        <div className='py-6'>
          <button className='bg-black/90 rounded-lg text-white px-5 py-2 text-md w-full'>Join Now</button>
        </div>
      </div>
    </div>
    </div>
 
  );
}

export default Pricingplan1;
