import React from "react"
import { HashRouter as Router ,Routes,Route } from "react-router-dom"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
export default function App() {
  return (
  
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Herosection/>}/>
        <Route exact path="/Services" element={<Services/>}/>
      </Routes>
      </Router>
   
  )
}
//this is test