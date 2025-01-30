import AboutUs from "./AboutUs"
import BlogPage from "./BlogPage"
import DashForm from "./DashForm"
import FaqPage from "./FaqPage"
import Footer from "./Footer"
import Homepage from "./Homepage"
import Navbar from "./Navbar/Navbar"
import OurClients from "./OurClients"
import OurServices from "./OurServices"
import StatsSection from "./StatsSection"

function App() {


  return (
    <>
     <Navbar /> 
     <Homepage/>
     <AboutUs/>
     <StatsSection/>
     <OurServices/>
     <DashForm/>
     <BlogPage/>
     <OurClients/>
     <FaqPage/>
     <Footer/>
    </>
  )
}

export default App
