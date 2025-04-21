import { Clock, PhoneCall, Target } from "lucide-react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className="flex flex-col md:flex-row items-center text-black text-center">
        {isHome && (
          <>
            <div className="bg-yellow-500 w-full flex-1 flex justify-center items-center py-5 px-8 font-semibold relative">
              <Clock size={26} className="gap-2" />
              <span className="text-lg">
                LESS THAN <span className="font-bold"> 30 MIN</span> ARRIVAL
              </span>
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-yellow-500 "></div>
            </div>

            <div className="bg-black w-full flex-1 flex justify-center items-center py-5 px-8 font-semibold relative">
              <PhoneCall size={24} className="text-yellow-500" />

              <div className="relative group ml-2">
                <a
                  href="tel:+447398984847"
                  className="font-semibold text-lg text-yellow-500 hover:underline"
                >
                  (+44) 73-9898-4847
                </a>

                <div className="absolute bottom-full  left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-500 text-black text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Call me
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 w-full flex-1 flex justify-center items-center py-5 px-8 font-semibold">
              <Target size={26} />
              <span className="text-lg">
                <span className="font-bold gap-4"> LIVE 24/7</span> TOWING
                SERVICE
              </span>
            </div>
          </>
        )}
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <img
              src="https://webdesign-finder.com/towy-v2/wp-content/uploads/2022/10/truck.png"
              alt="Tow Truck"
              className="w-full max-w-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 uppercase text-gray-800">
              WHAT <span className="text-black font-extrabold">WE OFFER</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-6">
              We provide fast, courteous and inexpensive towing services in New
              York. We are fully insured and have been in business since 1986.
              We are ready to respond to all your vehicle emergency needs 24
              hours a day, seven days a week.
            </p>
            <ul className="text-sm sm:text-lg md:text-lg text-gray-800 list-none space-y-4">
              <li className="flex items-center border-t border-gray-300 py-3">
                <span className="text-yellow-400 text-xl mr-3">✔</span>
                More than
                <span className="font-bold ml-1"> 30 years of experience</span>
              </li>
              <li className="flex items-center border-t border-gray-300 py-3">
                <span className="text-yellow-400 text-xl mr-3">✔</span>
                Short arrival time of
                <span className="font-bold ml-1">30 minutes or less</span>
              </li>
              <li className="flex items-center border-t border-gray-300 py-3">
                <span className="text-yellow-400 text-xl ">✔</span>
                Honest competitive prices
                <span className="font-bold ml-1">zero hidden fees</span>
              </li>
              <li className="flex items-center border-t border-gray-300 py-3">
                <span className="text-yellow-400 text-xl mr-3">✔</span>
                Friendly and
                <span className="font-bold ml-1">professional service</span>
              </li>
              <li className="flex items-center border-t border-b border-gray-300 py-3">
                <span className="text-yellow-400 text-xl mr-3">✔</span>
                Available <span className="font-bold ml-1">24 hours</span> <span className="ml-1"> a day,</span>
                <span className="font-bold mr-1 ml-1">7 days</span> a week
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
