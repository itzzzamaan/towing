import { useState } from "react";
import { motion } from "framer-motion";
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";
import car3 from "./assets/car3.jpg";
import car4 from "./assets/car4.jpg";
import mouse from "./assets/mouse.png";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [car1, car2, car3, car4];

  const animations = [
    { opacity: 0, y: -30 },
    { opacity: 0, x: -50 },
    { opacity: 0, y: 30 },
    { opacity: 0, x: 50 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-100">
      <header
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        className="relative bg-cover bg-no-repeat bg-top h-[95vh] text-white overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="bg-black/70 absolute inset-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <motion.h1
            key={currentSlide}
            className="text-xl sm:text-2xl  md:text-4xl font-bold mb-1 text-center"
            initial={animations[currentSlide]}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            WE PROVIDE HIGHEST QUALITY
          </motion.h1>

          <motion.h2
            key={`subtitle-${currentSlide}`}
            className="text-yellow-500 text-lg sm:text-xl md:text-3xl font-bold text-center md:text-start"
            initial={animations[(currentSlide + 1) % animations.length]}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            UNIVERSAL BREAKDOWN RECOVERY SERVICE
          </motion.h2>

          <motion.p
            key={`desc-${currentSlide}`}
            className="md:mt-3 mt-1 text-sm sm:text-lg md:text-xl text-center font-light md:font-semibold max-w-md sm:max-w-xl lg:max-w-4xl md:max-w-2xl"
            initial={animations[(currentSlide + 2) % animations.length]}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            We provides reliable and efficient roadside assistance for all types of vehicles, ensuring you’re never stranded.
            Whether you experience a mechanical failure, flat tire, dead battery, or require emergency towing, Our expert team is available 24/7 to get you back on the road quickly.
          </motion.p>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col items-center cursor-pointer animate-bounce hidden sm:flex">
          <img className="text-white mb-1" src={mouse} alt="Mouse Icon" />
          <span className="text-white text-sm">SCROLL</span>
        </div>

        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-[100] hidden sm:block">
          <button
            className="bg-black/10 text-white px-1 py-1 rounded-full"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-10 cursor-pointer hover:text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-[100] hidden sm:block">
          <button
            className="bg-black/10 text-white px-1 py-1 rounded-full"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-10 cursor-pointer hover:text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Homepage;
