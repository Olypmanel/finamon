import React from "react"
import WSignUp from "./WSignUp"
import signUpData from "./JSingUp"
import Welcome from "./Welcome"
import Header from "./Header"
import "./ZSingnUp.css"
import './ztyle.css';


const WelcomePage =(props) => {
  //STATES STAYS HERE
  const [FormData, setFormData] = React.useState(
 [
{
  // id: "firstname",
  firstName: ""
},
{
  //  id : "lastname",
  lastName: ""
} ,
 {
    // id : "email",
   email : ""
  },

  {
    // id : "password",
  password : ""
}
  ])
  //FUNCTIONS STAYS HERE

  const handleChange = (event)=> {
  // console.log(FormData)
  const {name, value, checked, type} = event.target
  setFormData( prevState => {
    // if(name===FormData)
  return {
    ...prevState,
     [name] : type === "checkbox"  ?  checked : value
  }
  })
    } 
     const handleSubmit =(event) => {
    event.preventDefault()
    console.log()
  }
  console.log(FormData)
  function signUp() {
    const items = signUpData.map(item => {
      return (
 
         <WSignUp 
         key={item.id}
         {...item} 
          value={FormData[item]}
         handleChange={ handleChange}
         />
      )})
    setPage(
      <section className="header-wrapper">
   <Header />
<form onSubmit={handleSubmit}>
  {items}
  <p className="button-par">
  <button>Sign Up</button>
  <button type="reset">Reset</button>
  </p>

</form>
<footer>Finamon template </footer>
</section>
    )}
  const [page, setPage] = React.useState(
 <section className="header-wrapper">
    <Header />
  <Welcome 
                  signUp={signUp} />
                  </section>
                  )
 return  page
}
export default WelcomePage