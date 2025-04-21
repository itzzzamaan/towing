import { useState } from "react";
import dashformimg from "./assets/dashformimg.jpg"

const DashForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    towFrom: "",
    towTo: "",
    vehicleType: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="flex justify-center max-w-6xl md:bg-cover md:bg-center md:bg-no-repeat mx-auto bg-fixed items-center gap-0 p-8 min-h-screen flex-col md:flex-row"
      style={{
         backgroundImage: `url(${dashformimg})`,
        
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-1/2 bg-yellow-500/80 bg-opacity-80 p-8 shadow-lg min-h-[400px] flex flex-col justify-center items-center">
        <div className="grid gap-1 text-center">
          <h2 className="text-2xl  font-semibold">Join Our Team</h2>
          <p className="text-gray-800 md:text-xl text-lg font-semibold">Fast & Courtus Specialists</p>
          <div className="">
            <p className="text-gray text-sm md:text-base">
              Doner hamburger elit magna fatback salami. Picanha ad
              reprehenderit anim pancetta alcatra ham tempor meatball shankle do
              sunt drumstick. Venison bresaola labons, jowl do labore pastrami
              magna voluptate fatback sed. In beef ribs shankle hamburger beef
              ea turkey cupim venison jowl pig ut biltong sint do capicola ham jowl do labore pastrami
              magna voluptate fatback.
            </p>
          </div>
          <button className="bg-black border-2 border-solid border-black hover:bg-yellow-500/70 hover:text-black text-yellow-400 font-bold py-2 px-4 mt-4">
            Apply Today
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 min-h-[400px] bg-black/70 bg-opacity-70 p-8 shadow-lg flex flex-col justify-center items-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Get A Quote</h2>
          <p className="text-gray-300 text-xl">Delivers The Best</p>
          <form onSubmit={handleSubmit} className="mt-4 w-full max-w-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-bold"
                ></label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block font-bold "
                ></label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div>
                <label
                  htmlFor="towFrom"
                  className="block font-bold md:mb-4 mb-2"
                ></label>
                <input
                  type="text"
                  id="towFrom"
                  name="towFrom"
                  placeholder="Tow From"
                  required
                  value={formData.towFrom}
                  onChange={handleChange}
                  className="appearance-none border w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="towTo" className="block font-bold md:mb-4 mb-2 "></label>
                <input
                  type="text"
                  id="towTo"
                  name="towTo"
                  placeholder="Tow To"
                  required
                  value={formData.towTo}
                  onChange={handleChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div>
                <label
                  htmlFor="vehicleType"
                  className="block font-bold md:mb-4 mb-2"
                ></label>
                <input
                  type="text"
                  id="vehicleType"
                  name="vehicleType"
                  placeholder="Vehicle Type"
                  required
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="date" className="block font-bold md:mb-4 mb-2"></label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="YYYY-MM-DD"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 border-2 border-solid border-yellow-400 hover:bg-transparent hover:text-yellow-400 text-white font-bold py-1.5 px-4 mt-4"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashForm;
