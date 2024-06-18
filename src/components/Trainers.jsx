import React from "react";
import trainer1 from "../assets/trainer1.png";
import trainer2 from "../assets/trainer2.png";
import coach1 from "../assets/coach1.png"
import coach2 from "../assets/coach2.png"


function Trainers() {
  return (
    <section id="trainers">
    <div className="lg:py-10">
      <div className="flex justify-center">
        <div>
          <div className="pt-7 space-y-4 ">
            <h1 className="text-4xl font-bold text-center">
              Meet our Trainers
            </h1>
            <p className="text-lg text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quia.
            </p>
          </div>

          <div className="flex overflow-auto p-4 justify-center space-x-16">
            <img
              src={trainer1}
              className="w-1/3 lg:w-56 drop-shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            />
            <img
              src={trainer2}
              className="w-1/3 lg:w-56 drop-shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            />
            <img
              src={trainer1}
              className="w-1/3 lg:w-56  drop-shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hidden lg:block"
            />
          </div>
        </div>
      </div>

    <div className=" flex justify-center lg:p-20 p-10">
      <div className="flex items-center  ">
        <img src={coach1} className="w-40 lg:block hidden h-full" />
        <img src={coach2} className="w-56 lg:block hidden h-full"/>
      </div>

      <div className="px-5 lg:w-[40%] lg:pt-5 py-7 space-y-6 ">
        <h1 className="text-3xl font-bold ">Are you looking for Mentor?</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          eveniet dolorem suscipit! Nobis aliquid dicta alias quos iure
          recusandae dolor.
        </p>
        <button className="relative flex h-[50px] bg-gray-900 w-40 items-center justify-center overflow-hidden   text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-600 before:duration-500 before:ease-out   hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Explore More</span>
                
              </button>
      </div>

      </div>
    </div>
    </section>
  );
}

export default Trainers;
