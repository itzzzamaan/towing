import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="text-3xl bg-yellow-400 mt-[68px] md:mt-28 w-full text-center h-25 font-bold flex items-center justify-center">
        About Us
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
