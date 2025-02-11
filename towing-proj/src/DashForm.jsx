import { useState } from "react";

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
      className="flex justify-center bg-fixed items-center gap-0 p-8 min-h-screen flex-col md:flex-row"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1660081516570-de4e4b3831fb?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-1/2 bg-yellow-500/70 bg-opacity-70 p-8 shadow-lg min-h-screen flex flex-col justify-center items-center">
        <div className="grid gap-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-gray-800">Fast and Courteous Specialists</p>
          <div className="mt-8">
            <p className="text-gray-800">
              Doner hamburger elit magna fatback salami. Picanha ad
              reprehenderit anim pancetta alcatra ham tempor meatball shankle do
              sunt drumstick. Venison bresaola labons, jowl do labore pastrami
              magna voluptate fatback sed. In beef ribs shankle hamburger beef
              ea turkey cupim venison jowl pig ut biltong sint do capicola ham.
            </p>
          </div>
          <button className="bg-black border-2 border-solid border-black hover:bg-yellow-500/70 hover:text-black text-yellow-400 font-bold py-2 px-4 mt-8">
            Apply Today
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-black/70 bg-opacity-70 p-8 shadow-lg min-h-screen flex flex-col justify-center items-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Get A Quote</h2>
          <p className="text-gray-300">Delivers The Best</p>
          <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-bold mb-2"
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
                  className="block font-bold mb-2"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="towFrom"
                  className="block font-bold mb-2"
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
                <label htmlFor="towTo" className="block font-bold mb-2"></label>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="vehicleType"
                  className="block font-bold mb-2"
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
                <label htmlFor="date" className="block font-bold mb-2"></label>
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
              className="bg-yellow-400 border-2 border-solid border-yellow-400 hover:bg-transparent hover:text-yellow-400 text-white font-bold py-2 px-4 mt-8"
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
