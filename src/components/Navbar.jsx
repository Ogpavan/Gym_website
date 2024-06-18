import { AlignCenter } from 'lucide-react';
import React, { useState } from 'react';
import Pricingplan1 from './Pricingplan1';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [showPricingPlan, setShowPricingPlan] = useState(false);

    const togglePricingPlan = () => {
        setShowPricingPlan(prevShowPricingPlan => !prevShowPricingPlan);
    };

    const toggleMenu = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <div className='sticky z-50 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] top-0'>
            <div className='flex justify-between items-center p-3 lg:px-8'>
                <div>
                    <h1 className='text-2xl font-bold'>Solid Gym</h1>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex text-black/80 cursor-pointer flex-wrap space-x-4 justify-center items-center font-semibold text-md w-full'>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#homepage">Home</a>
                        </li>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#services">Services</a>
                        </li>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#trainers">Trainers</a>
                        </li>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='space-x-3 flex items-center'>




                    <button onClick={togglePricingPlan} className='bg-black/90  z-50  px-5 py-2 text-md relative flex  items-center justify-center overflow-hidden bg-gray-900 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-600 before:duration-500 before:ease-out hover:shadow-red-600  hover:before:h-56 hover:before:w-56 '>
                      <span className="relative z-10">  Join Now</span>
                    </button>
                    <button onClick={toggleMenu} className='lg:hidden'>
                        <AlignCenter />
                    </button>
                </div>
            </div>
            {showPricingPlan && <Pricingplan1 togglePricingPlan={togglePricingPlan} />}
            {open && (
                <div className='bg-white transition-all absolute w-full px-3 py-4 z-20'>
                    <ul className='flex cursor-pointer flex-wrap space-x-4 justify-center items-center font-semibold text-lg w-full'>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#homepage">Home</a>
                        </li>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#services">Services</a>
                        </li>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#trainers">Trainers</a>
                        </li>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li className='hover:bg-black/90 hover:text-slate-50 px-2 py-1 rounded-lg'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
