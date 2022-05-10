import React from "react"
import SignUp from "./SignUp"
import Welcome from "./Welcome"
import LoginPage from "./Login"
import About from "./About"
import './Z_Style.css';
import "./Z_SignUp.css"
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom"


const WelcomePage =(props) => {

  return(
 <section className="header-wrapper">
   <Router>
   <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="about/*" element={<About />} />
        <Route path="login/*" element={<LoginPage />} />
        <Route path="signup/*" element={<SignUp />} />

      </Routes>
     </Router>
     </section>
   )
  }
export default WelcomePage

