import React from "react"
import WSignUp from "./WSignUp"
import Welcome from "./Welcome"
import Header from "./Header"
import LoginPage from "./WLogin"
import './ztyle.css';
import "./ZSingnUp.css"


const WelcomePage =(props) => {

  const [page, setPage] = React.useState(
 <section className="header-wrapper">
    <Header />
  <Welcome 
                  signUp={signUp}
                  logIn = {logIn} 
                  />
                  </section>
   )
   function signUp (){ setPage(prevState => <WSignUp  />)}
   function logIn (){ setPage(prevState => <LoginPage  />)}

      return  page 
  }
export default WelcomePage