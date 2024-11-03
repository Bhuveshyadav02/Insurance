import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//import Hero from "./components/Hero";
import Hero from "./components/herosection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { FooterWithLogo } from "./components/Footer";
import Description from "./components/Description";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Contact />
            </>
          }
        />
       <Route exact path="/description/:idx" element={<Description/>}/>
      </Routes>
      <FooterWithLogo/>
    </Router>
  );
}
