import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage,
   BlogPage, 
   ContactPage, 
   HomePage,
    ProductPage,
     ServicePage
     } from "./pages";
import Navba from "./components/Navba";

function App() {
  return (
    <Router>
      <Navba />
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/blog" element={<BlogPage />}/>
      <Route path="/service" element={<ServicePage />}/>
      <Route path="/products" element={<ProductPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
