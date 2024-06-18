import React from 'react'


function Footer() {
  return (
    <section id="contact">
    <div>
        <div>
            <div className='bg-black/90 p-5 text-center text-white space-y-2'>
            <h1 className='text-xl '>Call us Today</h1>
            <h1 className='text-3xl '>+123 456 789</h1>
            <p className='text-gray-300 text-sm px-5 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, officia!</p>

            </div>
            <div className='flex justify-evenly'>
              <div className=' px-4'>
                <h1 className='text-xl font-bold py-5  '>Solid Gym</h1>
                <p className='w-1/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus!</p>
              </div>
            <div className='py-5 px-4' >
                <h1 className='text-xl font-bold'>Menu</h1>
                <ul className='text-lg spaace-y-2'>
                    <li>Home</li>
                    <li>About </li>
                    <li>Reviews</li>
                    <li>Contact</li>
                    <li>Support</li>
                </ul>
                
            </div>

            <div className='py-5 px-4' >
                <h1 className='text-xl font-bold'>Social Media</h1>
                <ul className='text-lg spaace-y-2'>
                    <li>Linkedin</li>
                    <li>Facebook </li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>whatsapp</li>
                </ul>
               
            </div>
            
            </div>
            <p className='text-center  py-5'>Copyright @contact 2022</p>
        </div>
    </div>
    </section>
  )
}

export default Footer