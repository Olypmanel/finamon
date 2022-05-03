import React from "react"
import WSignUp from "./WSignUp"
import signUpData from "./JSingUp.json"
import Welcome from "./Welcome"
import Header from "./Header"
import './ztyle.css';
import "./ZSingnUp.css"


const WelcomePage =(props) => {
  //STATES STAYS HERE
  const [FormData, setFormData] = React.useState(
{
  firstName : "",
  lastName : "",
  email: "",
  password : "",
  password : "",
  checked : false
})

  //FUNCTIONS STAYS HERE

  const handleChange = (event)=> {
  console.log(FormData)
  const {name, value, checked, type} = event.target
 setFormData(prevState => ({
   ...prevState,
   [name] : type === "checkbox" ? checked : value 

 }))
  // console.log(FormData)

    } 
     const handleSubmit =(event) => {
    event.preventDefault()
    console.log(FormData.name)
  }

  function signUp() {
    const items = signUpData.map(item => {
      return (
 
         <WSignUp 
         key={item.id}
         {...item} 
          value={}
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