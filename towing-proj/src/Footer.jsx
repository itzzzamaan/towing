import { Mail, MapPin, Phone, Clock, Twitter } from "lucide-react";
import hook from "./assets/hook.png"

const Footer = () => {
  return (
    <footer className="bg-black/85 text-white text-sm md:text-md">
      <div className="flex flex-col md:flex-row items-center text-black text-center">
 
  <div className="bg-yellow-500 w-full flex-1 flex justify-center items-center py-5 px-8 font-semibold relative">
    <span>REGISTER FOR <span className="font-bold">OUR NEWSLETTER</span></span>
    <div className="absolute right-0 top-0 bottom-0 w-10 bg-yellow-500"></div>
  </div>


  <div className="bg-black w-full text-white flex-1 flex justify-center items-center py-5 px-8 font-semibold relative">
    <span>ENTER <span className="font-bold">E-MAIL ADDRESS</span></span>
    <div className="mx-3 flex justify-center items-center  bg-yellow-500 rounded-full">
      ✉ 
    </div>
    <div className="absolute right-0 top-0 bottom-0 w-10 bg-black"></div>
  </div>

 
  <div className="bg-yellow-500 w-full flex-1 flex justify-center items-center py-5 px-8 font-semibold">
    <span>GET <span className="font-bold">LATEST</span> COMPANY NEWS</span>
  </div>
</div>


      <div className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 justify-items-center text-center md:text-left">
        <div>
          <h2 className="text-yellow-500 font-bold text-2xl flex items-center">
            <span className="mr-3">
                
                <a
            className="logo logo-left with-image flex items-center"
            href="https://webdesign-finder.com/towy-v2/"
            rel="home"
            itemProp="url"
          >
            <img
              src= {hook}
              className="attachment-full w-9 h-18"
              alt=""
              decoding="async"
              loading="eager"
            /> </a>
                
                </span> UNIVERSAL RECOVERY
          </h2>
          <p className="text-gray-400 mt-4 sm:text-sm leading-relaxed">
            Providing fast, affordable universal breakdown recovery service. We are ready
            to assist you 24/7.
          </p>
          <div className="flex justify-center space-x-5 mt-6 text-2xl">
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="facebook"
                fill="currentColor"
                strokeWidth={3}
                width="24"
                height="24"
                className="text-white hover:text-blue-600"
              >
                <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 16 16"
                id="twitter"
                fill="currentColor"
                width="24"
                height="24"
                className="text-white hover:text-blue-400"
              >
                <path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 16 16"
                id="instagram"
                fill="currentColor"
                width="24"
                height="24"
                className="text-white hover:text-yellow-400"
              >
                <path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path>
                <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path>
                <circle cx="12.3" cy="3.7" r=".533"></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 16 16"
                id="pinterest"
                fill="currentColor"
                width="24"
                height="24"
                className="text-white hover:text-red-600"
              >
                <path d="M8.717 0C4.332 0 2 2.81 2 5.874c0 1.421.794 3.193 2.065 3.755.193.087.298.05.341-.129.038-.136.205-.791.286-1.1a.283.283 0 0 0-.068-.278c-.422-.488-.757-1.377-.757-2.211 0-2.137 1.699-4.212 4.59-4.212 2.5 0 4.249 1.624 4.249 3.947 0 2.625-1.389 4.441-3.194 4.441-.999 0-1.743-.784-1.507-1.754.285-1.155.844-2.397.844-3.23 0-.747-.422-1.365-1.284-1.365-1.017 0-1.842 1.007-1.842 2.359 0 .859.304 1.439.304 1.439l-1.193 4.823c-.316 1.285.043 3.366.074 3.545.019.099.13.13.192.049.099-.13 1.315-1.865 1.656-3.119.124-.457.633-2.31.633-2.31.335.605 1.302 1.112 2.332 1.112 3.064 0 5.278-2.693 5.278-6.035C14.988 2.397 12.246 0 8.717 0"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 16 16"
                id="linkedin"
                fill="currentColor"
                width="24"
                height="24"
                className="text-white hover:text-blue-500"
              >
                <path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path>
                <circle cx="1.75" cy="1.75" r="1.75"></circle>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl mb-4">
            USEFUL <span className="text-yellow-500">LINKS</span>
          </h3>
          <div className="grid grid-cols-2 gap-x-12">
            <ul className="space-y-6">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Gallery
                </a>
              </li>
              
            </ul>
            <ul className="space-y-6">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  FAQ
                </a>
              </li>
             
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl mb-4">
            GET <span className="text-yellow-500">IN TOUCH</span>
          </h3>
          <ul className="mt-3 space-y-6 text-gray-400">
            <li className="flex items-center">
              <MapPin className="text-yellow-500 mr-3" size={16} /> 255 Kohefiza, Bhopal, MP
            </li>
            <li className="flex items-center">
              <Phone className="text-yellow-500 mr-3" size={16} /> (+44) 73-9898-4847
            </li>
            <li className="flex items-center">
              <Mail className="text-yellow-500 mr-3" size={16} />{" "}
              universal@recovery.com
            </li>
            <li className="flex items-center">
              <Clock className="text-yellow-500 mr-3" size={16} /> 24 hours a
              day, 7 days a week
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl mb-4">
            LATEST <span className="text-yellow-500">TWEETS</span>
          </h3>
          <ul className="mt-3 space-y-6 text-gray-400">
            <li className="flex items-center">
              <Twitter className="text-yellow-500 mr-3" size={16} /> January 26,
              2025 - 2:53 pm
            </li>
            <li className="flex items-center">
              <Twitter className="text-yellow-500 mr-3" size={16} /> January 28,
              2025 - 10:33 pm
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t  bg-black/90 border-gray-700 text-center py-6 text-gray-400 text-xl">
        UNIVERSAL RECOVERY - Towing Services <span className="text-yellow-500"></span>{" "}
        All Rights Reserved © 2025
      </div>
    </footer>
  );
};

export default Footer;
