import React, { useState, useEffect } from "react";
import homeimage from "../assets/homeimage.png";
import { Facebook, Github, Instagram, Linkedin, Play } from "lucide-react";
import Aboutus from "./Aboutus";
import Whychooseus from "./Whychooseus";
import Trainers from "./Trainers";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Reviews from "./Reviews";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Slide-up animation configuration
const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideUpVariants}
    >
      {children}
    </motion.div>
  );
};

function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a loading time of 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full mx-auto h-screen [perspective:1000px] bg-white">
          <div className="font-sans sm:h-[250px] sm:w-[250px] xs:h-[150px] xs:w-[150px] absolute sm:top-[30%] sm:left-[30%] xs:top-[40%] xs:left-[30%] lg:left-[40%] [transform-style:preserve-3d] animate-[roll_5s_infinite]">
            <div className="box sm:[transform:translateZ(125px)] xs:[transform:translateZ(75px)]">Persistence</div>
            <div className="box sm:[transform:translateZ(-125px)] xs:[transform:translateZ(-75px)]">Consistency</div>
            <div className="box sm:right-[125px] xs:right-[75px] [transform:rotateY(-90deg)]">Dedication</div>
            <div className="box sm:left-[125px] xs:left-[75px] [transform:rotateY(90deg)]">Hard work</div>
            <div className="box sm:bottom-[125px] xs:bottom-[75px] [transform:rotateX(90deg)]">Passion</div>
            <div className="box sm:top-[125px] xs:top-[75px] [transform:rotateX(-90deg)]">Goal</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="homepage" className="relative">
      <AnimatedSection>
        <div className="w-full z-10 lg:z-0 lg:flex lg:items-center lg:bg-white lg:justify-evenly bg-black/90 space-y-4 lg:space-y-6 relative">
          <div className="lg:w-1/3 p-5 lg:pt-16">
            <h1 className="text-slate-50 lg:text-black/90 lg:text-6xl text-5xl font-bold lg:pl-10 text-center lg:text-left">
              Elevate Your Workout
            </h1>
            <p className="text-slate-50 lg:text-black/90 py-3 text-sm lg:pl-10 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
              iusto voluptas esse quisquam aut illo, inventore neque aliquam
              asperiores cumque in quia molestias adipisci laborum!
            </p>
            <div className="flex justify-evenly mt-4">
              <button className="relative flex px-8 border border-red-600 lg:border-0 py-3 lg:h-[50px] lg:w-40 items-center justify-center overflow-hidden  bg-red-600 lg:bg-gray-900 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-600 before:duration-500 before:ease-out lg:hover:shadow-red-600  hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Get Started</span>
                
              </button>
              <a href="https://youtu.be/FlBUw7UzIjw?si=FmeFh-8CETHW_rJ3" target="_blank" rel="noopener noreferrer">
              <button className="before:ease relative px-6 py-3 lg:h-12 lg:w-40 overflow-hidden border border-white lg:border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 lg:before:bg-red-600 before:transition-all before:duration-300 lg:text-black/90 text-white lg:hover:text-white lg:hover:shadow-red-600 hover:before:-rotate-180 lg:hover:border-red-600  ">
      <span className="relative z-10 flex justify-center">
                  <Play className="mr-2" />
                  Play Video
                  </span>
                </button>
              </a>
            </div>
            <div className="text-white lg:text-black/90 flex justify-evenly pt-5">
              <Facebook />
              <Instagram />
              <Linkedin />
              <Github />
            </div>
          </div>
          <div className="lg:flex lg:justify-center">
            <img src={homeimage} alt="Home" className="lg:relative lg:w-2/3" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Aboutus />
      </AnimatedSection>
      <AnimatedSection>
        <Whychooseus />
      </AnimatedSection>
      <AnimatedSection>
        <Trainers />
      </AnimatedSection>
      <AnimatedSection>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection>
        <Reviews />
      </AnimatedSection>
      <AnimatedSection>
        <Footer/>  
          </AnimatedSection>
    </section>
  );
}

export default Homepage;
