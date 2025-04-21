import { useEffect } from "react";
import BlogPage from "./BlogPage";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="text-3xl bg-yellow-400 mt-[68px] md:mt-28 w-full text-center h-25 font-bold flex items-center justify-center">
        BLOG
      </div>
      <BlogPage />
      <div className="max-w-6xl mx-auto p-4">
        <div className="mt-8 flex-1 border-none rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://webdesign-finder.com/towy-v2/wp-content/uploads/2022/05/02-2-1170x780.jpg"
            alt="Main Blog Image"
            className="w-full h-60 sm:h-80 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold">
              Burgdoggen Andouille Turducken Kielbasa
            </h2>
            <p className="text-yellow-400 text-sm mt-2">By Emma Johnson</p>
            <p className="text-gray-600 mt-2">
              Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank.
              Spare ribs swine fatback meatloaf tail sausage chicken. Swine pork
              t-bone alcatra, picanha cupim ground round spare ribs. Turducken
              flank rump jowl sirloin landjaeger.
            </p>
          </div>
        </div>

        <div className="mt-8 border-none rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://webdesign-finder.com/towy-v2/wp-content/uploads/2022/05/post-image-1170x760.jpeg"
            alt="Second Blog Image"
            className=" w-full h-60 sm:h-80 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold">
              Burgdoggen Andouille Turducken Kielbasa
            </h2>
            <p className="text-yellow-400 text-sm mt-2">By Emma Johnson</p>
            <p className="text-gray-600 mt-2">
              Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank.
              Spare ribs swine fatback meatloaf tail sausage chicken. Swine pork
              t-bone alcatra, picanha cupim ground round spare ribs. Turducken
              flank rump jowl sirloin landjaeger.
            </p>
          </div>

          <div className="mt-8 flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <img
                src="https://webdesign-finder.com/towy-v2/wp-content/uploads/2022/05/07-1-1170x760.jpg"
                alt="Third Blog Image"
                className=" h-60 sm:h-80 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold">
                  We provide highest quality towing services
                </h2>
                <p className="text-yellow-400 text-sm mt-2">By Emma Johnson</p>
                <p className="text-gray-600 mt-2">
                  Bresaola t-bone bacon ribeye frankfurter swine sausage beef
                  shank. Spare ribs swine fatback meatloaf tail sausage chicken.
                  Swine pork t-bone alcatra, picanha cupim ground round spare
                  ribs. Turducken flank rump jowl sirloin landjaeger.
                </p>
              </div>
            </div>
            <aside className="border-none h-full p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">GET IN TOUCH</h3>
              <div className="flex flex-wrap space-x-2 mb-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mb-2">
                  Facebook
                </button>
                <button className="bg-blue-400 text-white px-3 py-1 rounded mb-2">
                  Twitter
                </button>
                <button className="bg-pink-500 text-white px-3 py-1 rounded mb-2">
                  Instagram
                </button>
              </div>
              <h3 className="text-lg font-semibold mb-2">NEWSLETTER</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="border p-2 w-full rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">CATEGORIES</h3>
              <select className="border p-2 w-full rounded mb-4">
                <option>Select Category</option>
              </select>
              <h3 className="text-lg font-semibold mb-2">ARCHIVES</h3>
              <select className="border p-2 w-full rounded">
                <option>Select Month</option>
              </select>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
