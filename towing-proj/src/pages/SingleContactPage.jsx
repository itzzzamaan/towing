import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { useEffect } from "react";
const SingleContactPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); 
    
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="text-3xl bg-yellow-400 mt-28 w-full text-center h-25 font-bold flex items-center justify-center">
        CONTACT
      </div>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.17518603248!2d77.3685248!3d23.259682490582527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67e4f1e60851%3A0x3b126df665f7b425!2sFour%20Seasons%20Lawn!5e0!3m2!1sen!2sin!4v1738229101222!5m2!1sen!2sin"
    className="w-full h-full"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         

          <div className=" ">
            <h2 className="text-3xl font-bold mb-6">
              CONTACT <span className="font-extrabold">FORM</span>
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="border p-3 w-full text-gray-700"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border p-3 w-full text-gray-700"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border p-3 w-full text-gray-700"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 w-full text-gray-700"
                />
              </div>
              <textarea
                placeholder="Message"
                className="border p-3 w-full h-32 text-gray-700"
              ></textarea>
              <button className="bg-black text-yellow-500 px-6 py-3 font-bold">
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="ml-15">
            <h2 className="text-3xl font-bold mb-6">
              CONTACT <span className="font-extrabold">INFO</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <ul className="mt-3 space-y-6 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="text-yellow-500 mr-3" size={24} /> 255 Kohefiza, Bhopal, MP
                </li>
                <li className="flex items-center">
                  <Phone className="text-yellow-500 mr-3" size={24} />{" "}
                  +91 9131667821
                </li>
                <li className="flex items-center">
                  <Mail className="text-yellow-500 mr-3" size={24} />{" "}
                  universal@recovery.com
                </li>
                <li className="flex items-center">
                  <Clock className="text-yellow-500 mr-3" size={24} /> 24 hours
                  a day, 7 days a week
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleContactPage;
