import { Star, StarIcon } from 'lucide-react'
import React from 'react'

function Reviews() {
  return (
    <section id="reviews">
    <div className='p-5 lg:px-16'>
         <div className='px-5 pt-10'>
        <div className='flex justify-between'>
            <div>
                <p className='text-lg text-gray-600'>Reviews</p>
                <h1 className='text-3xl font-bold '>FROM YOU</h1>
            </div>
            <div>
                
                <button className='text-md shadow-xl bg-black text-white px-3 py-2 rounded-lg flex items-center '>Give <Star/></button>
            </div>
        </div>
        <div className='flex overflow-auto py-7 space-x-4'>
        <div className='min-w-80  border-[1px] rounded-lg p-4 border-black space-y-2'>
            <h1 className='text-xl font-semibold'>Name</h1>
            <p className='flex'>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/></p>
            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit incidunt ipsum debitis et quas iusto neque minima pariatur nemo?</p>
        </div>

        <div className='min-w-80  border-[1px] rounded-lg p-4 border-black space-y-2'>
            <h1 className='text-xl font-semibold'>Name</h1>
            <p className='flex'>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/></p>
            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit incidunt ipsum debitis et quas iusto neque minima pariatur nemo?</p>
        </div>

        <div className='min-w-80  border-[1px] rounded-lg p-4 border-black space-y-2'>
            <h1 className='text-xl font-semibold'>Name</h1>
            <p className='flex'>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/></p>
            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit incidunt ipsum debitis et quas iusto neque minima pariatur nemo?</p>
        </div>

        </div></div>
    </div>
    </section>
  )
}

export default Reviews