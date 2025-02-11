const AboutUs = () => {
 
  return (
    <>
    
      <div className="flex flex-col md:flex-row items-center text-black text-center">
       
        <div className="bg-yellow-500 w-full flex-1 flex justify-center items-center py-5 px-8 font-semibold relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span>
            LESS THAN <span className="font-bold"> 30 MIN</span> ARRIVAL
          </span>
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-yellow-500 "></div>
        </div>

       
        <div className="bg-black w-full text-white flex-1 flex justify-center items-center py-5 px-8 font-semibold relative">
          <span>
          <span className="text-yellow-500"> (+91 )</span> <span className="font-bold text-yellow-500"> 9131667821 </span>
          </span>
          <div className="mx-3 flex justify-center items-center bg-yellow-500 rounded-full">
        
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-black "></div>
        </div>

        
        <div className="bg-yellow-500 w-full flex-1 flex justify-center items-center py-5 px-8 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="text-white size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <span>
         <span className="font-bold"> LIVE 24/7</span> TOWING SERVICE
          </span>
        </div>
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
                <span className="font-bold"> 30 years of experience</span>
              </li>
              <li className="flex items-center border-t border-gray-300 py-3">
                <span className="text-yellow-400 text-xl mr-3">✔</span>
                Short arrival time of{" "}
                <span className="font-bold">30 minutes or less</span>
              </li>
              <li className="flex items-center border-t border-gray-300 py-3">
                <span className="text-yellow-400 text-xl mr-3">✔</span>
                Honest competitive prices -{" "}
                <span className="font-bold">zero hidden fees</span>
              </li>
              <li className="flex items-center border-t border-gray-300 py-3">
                <span className="text-yellow-400 text-xl mr-3">✔</span>
                Friendly and{" "}
                <span className="font-bold">professional service</span>
              </li>
              <li className="flex items-center border-t border-b border-gray-300 py-3">
                <span className="text-yellow-400 text-xl mr-3">✔</span>
                Available <span className="font-bold">24 hours</span> a day,{" "}
                <span className="font-bold">7 days</span> a week
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
