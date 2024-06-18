import React from "react";
import { BicepsFlexed, Clock, Dumbbell, HandCoins } from "lucide-react";

function Whychooseus() {
  return (
    <section id="services">
    <div>
      <div className="bg-black/90 text-slate-50 p-5 lg:py-20 flex justify-center space-y-3 lg:bg-white lg:text-black/90">
        <div className="lg:w-1/3 space-y-3">
          <h1 className="text-3xl font-bold text-center">Why Choose Us</h1>
          <p className="text-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            molestias neque, cum officiis nemo qui deserunt et explicabo
            dolorum? Impedit!
          </p>
        </div>
      </div>

      <div className="lg:flex lg:items-center lg:justify-center lg:space-x-20">
        <div className="bg-black/90 lg:bg-white lg:text-black/90 text-slate-50 flex justify-center pt-4 pb-5">
          <div className="space-y-3 px-5 lg:px-0">
            <div className="flex space-x-5 flex-wrap space-y-4">
              <div className="flex items-center space-x-2  px-4 lg:pt-4 ">
                <div className="h-full p-2 ">
                  <BicepsFlexed
                    className="text-black lg:text-white lg:bg-black/90 bg-white p-1 rounded-full"
                    size={40}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">Trainer Qualification</p>
                  <p className="flex flex-wrap lg:w-44">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 ">
                <div className="h-full p-2">
                  <Dumbbell
                    className="text-black bg-slate-50 p-1 rounded-full lg:text-white lg:bg-black/90"
                    size={40}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">Faculty Amenities</p>
                  <p className="flex flex-wrap lg:w-44">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 ">
                <div className="h-full p-2">
                  <HandCoins
                    className="text-black bg-slate-50 p-1 rounded-full lg:text-white lg:bg-black/90"
                    size={40}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">Membership Cost</p>
                  <p className="flex flex-wrap lg:w-44">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 ">
                <div className="h-full p-2">
                  <Clock
                    className="text-black bg-slate-50 p-1 rounded-full lg:text-white lg:bg-black/90"
                    size={40}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">Operating Hours</p>
                  <p className="flex flex-wrap lg:w-44">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Whychooseus;
