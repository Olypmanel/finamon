import React from "react"
import WSignUp from "./WSignUp"
import signUpData from "./JSingUp.json"
const Welcome =(props) => {
  function signUp() {
    const items = signUpData.map(item => {
      return (
         <WSignUp 
         key={item.id}
         {...item} 
         />
      )})
    setPage(
<form>
  {items}
  <button>Sign Up</button>
</form>
    )}
  
  // IGNORE DOWNWARD
  const [page, setPage] = React.useState(
    <section className="header-wrapper">
   <nav className="nav-wrapper">   
              <img src="../logo192.png" alt='' width='100px' />  
              <h1>Finamon</h1>
     </nav>
     <div className="anchor-wrapper">
              <p onClick={signUp}>sign up</p>
              <p onClick={props.login}>login</p>
              <p onClick={props.about}>about</p>
   </div>
   <footer>
     Finamon template
     </footer>
  
    </section>
    )
    //

 return  page
 
}
export default Welcome