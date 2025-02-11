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

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    console.log(slides[currentSlide]);

    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="bg-gray-100">
      <header
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        className={`relative bg-cover bg-no-repeat bg-center h-[95vh] text-white overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="bg-black/70 absolute inset-0"></div>
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative bg-contain z-10 flex flex-col items-center justify-center h-full px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            WE PROVIDE HIGHEST QUALITY
          </motion.h1>

          <motion.h2
            className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            TOWING SERVICES
          </motion.h2>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center  max-w-2xl">
            Fast, courteous and inexpensive towing and roadside assistance in
            San Diego in fernal of our unit.
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col items-center cursor-pointer animate-bounce hidden sm:flex">
  <img className="text-white mb-1" src={mouse} alt="Mouse Icon" />
  <span className="text-white text-sm">SCROLL</span>
</div>

        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-[100]  hidden sm:block">
          <button
            className="bg-black/10 z-[1000]  text-white px-3 py-2 rounded-full "
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-12 cursor-pointer hover:text-yellow-400"
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
            className="bg-black/10 z-[1000] text-white px-3 py-2 rounded-full "
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-12 cursor-pointer hover:text-yellow-400"
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
