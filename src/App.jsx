import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterMe from './components/form';
import Inspiration from './components/Inspirations';
import SteiStoryPage from './components/stei-story';
import Vision from './components/Vision';
import FounderPage from './components/FounderPage';
import ProductsServices from './components/Productservices';
import TermsConditions from './components/Termcondition';
import CookiePolicy from './components/Cookiespolicy';

function App() {
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/products-services" element={<Services />} /> */}
          <Route path="/Inspirations" element={<Inspiration />} />
          <Route path="/form" element={<RegisterMe />} />
          <Route path="/stei-story" element={<SteiStoryPage />} />
          <Route path="/Vision" element={<Vision />} />
          <Route path="/founder" element={<FounderPage />} />
            <Route path="/products-services" element={<ProductsServices />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;