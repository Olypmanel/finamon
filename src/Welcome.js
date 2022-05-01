import React from "react"
import WSignUp from "./WSignUp"
import JSingnUp from "./JSingUp.json"
const Welcome =(props) => {
  
 const [formInput, setFormInput] = React.useState({
  firstName: "",
  lastName: "",
  email : "",
  checked: false
 })
 function handleChange(event) {
const { value, name,type, checked} = event.target
setFormInput(prevState => ({
           ...prevState,
           [name] : type === "checkbox" ? checked : value
}))
 }
console.log(formInput)

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
    // IGNORE UPWARD
  function signUp() {
  const item = JSingnUp.map(items => <WSignUp />) // YOU STOP HERE
  setPage(


   )}

 return  page
 
}
export default Welcome