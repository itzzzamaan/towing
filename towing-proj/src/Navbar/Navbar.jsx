/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import hook from "../assets/hook.png"

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsPagesOpen(false);
        setIsServicesOpen(false);
        setIsGalleryOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-black/70 text-white fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-center items-center shadow-lg">
      <div className=" items-center hidden md:flex space-x-12">
      <Link to="/" className="text-md hover:text-yellow-500">
          Home
        </Link>

        <Link to="/aboutus" className="text-md hover:text-yellow-500">
          About Us
        </Link>


       

        {/* <div
          className="relative dropdown"
          onMouseEnter={() => {
            setIsServicesOpen(true);
            setIsPagesOpen(false);
            setIsGalleryOpen(false);
          }}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button className="text-md flex items-center hover:text-yellow-500">
            Services <ChevronDown className="ml-1" size={18} />
          </button>
          {isServicesOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md py-2">
              {["Car Towing", "Accident Insurance", "Motorcycle Towing"].map(
                (item, index, array) => (
                  <a
                    key={index}
                    href="#"
                    className={`flex items-center px-6 py-3 text-lg hover:text-yellow-500 ${
                      index !== array.length - 1
                        ? "border-b border-gray-300"
                        : ""
                    }`}
                  >
                    <Settings className="mr-3 text-gray-500" size={18} /> {item}
                  </a>
                )
              )}
            </div>
          )}
        </div> */}

        <div className="items-center flex space-x-12 md:space-x-5">
          <a
            className="flex items-center mr-0"
          >
            <img
              src= {hook}
              className=" w-9 h-18"
              alt=""
              decoding="async"
              loading="eager"
            />
            <span className=" ml-2 flex md:flex-row sm:flex-row  flex-col justify-between">
              <span className=" text-yellow-400 font-bold text-md sm:text-sm">
              UNIVERSAL RECOVERY 
              
              </span>
              
            </span>
          </a>
        </div>

        <Link to="/gallery" className="text-md hover:text-yellow-500">
          Gallery
        </Link>

        <Link to="/blog" className="text-md hover:text-yellow-500">
          Blog
        </Link>

        <Link to="/single-contact-page" className="text-md hover:text-yellow-500">
          Contacts
        </Link>
      </div>

      <div className=" right-4 md:hidden flex justify-between h-7 w-full gap-2 items-center px-4">
      <div className="md:hidden items-center flex space-x-20 ">
    <a className="logo logo-left with-image flex items-center">
      <img src={hook} className="attachment-full w-7 h-14 mt-2 mr-2" alt="logo" />
      <span className="flex flex-col justify-between">
        <span className="text-yellow-400 font-semibold text-lg">
          UNIVERSAL RECOVERY
        </span>
      </span>
    </a>
  </div>
  
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-yellow-500" size={28} />
          ) : (
            <Menu className="text-yellow-500" size={28} />
          )}
        </div>
      </div>

      <div
        className={`absolute top-16 left-0 w-full block md:hidden bg-black text-white text-2xl py-6 px-8 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-8  text-center">
          <li>
          <Link to="/" className="text-md hover:text-yellow-500">
          Home
        </Link>
          </li>
          <li>
             <Link to="/aboutus" className="text-md hover:text-yellow-500">
              About Us
            </Link>
            {/* <button
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="flex items-center justify-center w-full hover:text-yellow-500"
            >
              Pages <ChevronDown className="ml-1" size={16} />
            </button>
            {isPagesOpen && (
              <ul className="mt-2 space-y-2 bg-gray-800 p-4 rounded-md">
                {[
                  "About",
                  "FAQ",
                  "Shop",
                  "Predefined Sections",
                  "Testimonials",
                  "404",
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-md block hover:text-yellow-500">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
          {/* <li>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-center w-full hover:text-yellow-500"
            >
              Services <ChevronDown className="ml-1" size={16} />
            </button>
            {isServicesOpen && (
              <ul className="mt-2 space-y-2 bg-gray-800 p-4 rounded-md">
                {["Car Towing", "Accident Insurance", "Motorcycle Towing"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-md block hover:text-yellow-500"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            )}
          </li> */}
          <li>
            <Link to="/gallery" className="text-md hover:text-yellow-500">
              Gallery
            </Link>
            {/* <button
              onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              className="flex items-center justify-center w-full hover:text-yellow-500"
            >
              Gallery <ChevronDown className="ml-1" size={16} />
            </button>
            {isGalleryOpen && (
              <ul className="mt-2 space-y-2 bg-gray-800 p-4 rounded-md">
                <li>
                  <a href="#" className="text-md block hover:text-yellow-500">
                    Single Gallery
                  </a>
                </li>
              </ul>
            )} */}
          </li>
          <li>
          <Link to="/blog" className="text-md hover:text-yellow-500">
          Blog
        </Link>
          </li>
          <li>
          <Link to="/single-contact-page" className="text-md hover:text-yellow-500">
          Contacts
        </Link>
          </li>
        </ul>
      </div>
    
    </nav>
  );
};

export default Navbar;
