import React from "react"
import { HashRouter as Router ,Routes,Route,Navigate } from "react-router-dom"
import Herosection from "./components/herosection"
import Services from "./components/Services"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Herosection/>}/>
        <Route exact path="/Services" element={<Services/>}/>
      </Routes>
      </Router>

  )
}
//this is test