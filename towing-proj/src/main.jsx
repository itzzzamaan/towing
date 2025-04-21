import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleContactPage from './pages/SingleContactPage.jsx';
import Blog from './Blog.jsx';
import Gallery from './Gallery.jsx';
import AboutUsPage from './AboutUsPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import ContactForm from './ContactForm.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog/>} />  
        <Route path="/single-contact-page" element={<SingleContactPage />} />
        <Route path="/gallery" element={<Gallery />} />  
        <Route path="/aboutus" element={<AboutUsPage />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/contact-form" element={<ContactForm />} /> 
      </Routes>
    </Router>
   
  </StrictMode>,
)
