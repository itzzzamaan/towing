import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";
import car3 from "./assets/car3.jpg";
import car4 from "./assets/car4.jpg";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import Footer from "./Footer";

const Gallery = () => {
  const images = [car1, car2, car3, car4, blog1, blog2];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="text-3xl bg-yellow-400 mt-[68px] md:mt-28 w-full text-center h-20 font-bold flex items-center justify-center">
        Gallery
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-4 px-6">
        {images.map((img, index) => (
          <div key={index} className="bg-white overflow-hidden ">
            <img
              src={img}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-52 sm:h-60 md:h-72 object-cover"
            />
            <div className="p-4 text-center">
              <h1 className="text-xl font-semibold">Car Towing</h1>
              <p className="text-gray-700 text-sm sm:text-base">
                Car towing is the process of moving a vehicle that can&apos;t be
                driven safely, using a tow truck or other vehicle. Towing can be
                used for many reasons, including accidents, mechanical failures.
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
