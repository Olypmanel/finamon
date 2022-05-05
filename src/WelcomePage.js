import React from "react"
import SignUp from "./SignUp"
import Welcome from "./Welcome"
import Header from "./Header"
import LoginPage from "./Login"
import About from "./About"
import './Z_Style.css';
import "./Z_SignUp.css"


const WelcomePage =(props) => {

  const [page, setPage] = React.useState(
 <section className="header-wrapper">
    <Header />
  <Welcome 
                  signUp={signUp}
                  logIn = {logIn} 
                  about ={about}
                  />
                  </section>
   )
   function signUp (){ setPage(prevState => <SignUp  />)}
   function logIn (){ setPage(prevState => <LoginPage  />)}
   function about (){ setPage(prevState => <About  />)}

  

      return  page 
  }
export default WelcomePage