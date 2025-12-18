import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
