import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterMe from './components/form';

function App() {
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/products-services" element={<Services />} /> */}
          {/* <Route path="/impressions" element={<Inspiration />} /> */}
          <Route path="/form" element={<RegisterMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;