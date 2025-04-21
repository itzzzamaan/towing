import AboutUs from "./AboutUs"
import BlogPage from "./BlogPage"
import DashForm from "./DashForm"
import FaqPage from "./FaqPage"
import FloatingBtn from "./Floating Buttons/FloatingBtn"
import Footer from "./Footer"
import Cookies from "./GDPR Cookies/Cookies"
import Homepage from "./Homepage"
import Navbar from "./Navbar/Navbar"
import OurClients from "./OurClients"
import OurServices from "./OurServices"
import StatsSection from "./StatsSection"

function App() {


  return (
    <>
    <Cookies/>
     <Navbar /> 
     <Homepage/>
     <AboutUs/>
     <StatsSection/>
     <OurServices/>
     <DashForm/>
     <BlogPage/>
     <OurClients/>
     <FaqPage/>
     <FloatingBtn/>
     <Footer/>
    </>
  )
}

export default App
