import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleContactPage from './pages/SingleContactPage.jsx';
import Blog from './Blog.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog/>} />  
        <Route path="/single-contact-page" element={<SingleContactPage />} />  
      </Routes>
    </Router>
   
  </StrictMode>,
)
