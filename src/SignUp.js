import React from "react";
import Header from "./Header";
const WSignUp =()=> {
  const [FormData, setFormData] = React.useState(
    {
      firstName : "",
      lastName : "",
      email: "",
      password : "",
      passwordConfirm : "",
      signNewsLetter : false,
      sex : ""
    })
    
      //FUNCTIONS STAYS HERE
    
      const handleChange = (event)=> {
    
      // console.log(FormData)
      const {name, value, checked, type} = event.target
     setFormData(prevState => ({
       ...prevState,
       [name] : type === "checkbox" ? checked : value 
    
     }))
    
      // console.log(FormData)
        } 
        function handleSubmit (event) {
          event.preventDefault()
          console.log(FormData)
        }
 return (
 <section className="header-wrapper">
   <Header />
   <div className="sign-in-form">
  <form onSubmit={handleSubmit}>
  <label htmlFor="first-name">First Name</label>
  <input 
  id= "first-name"
   name="firstName"
  type="text"
  placeholder="First Name"
  required
  onChange ={handleChange} 
  value = {FormData.firstName}
  />
<label htmlFor="first-name">Last Name</label>
  <input 
  id= "last-name"
   name="lastName"
  type="text"
  placeholder="Last Name"
  required
  onChange ={handleChange}
  value = {FormData.lastName }
  />
<label htmlFor="email">Email</label>
  <input 
  id= "email"
   name="email"
  type="email"
  placeholder="example@gmail.com"
  required
  onChange ={handleChange} 
  value = {FormData.email}
  />
<label htmlFor="password">Set password</label>
    <input 
  id= "password"
   name="password"
  type="password"
  placeholder="*****"
  required
  onChange ={handleChange} 
  value = {FormData.password}
  />
   <label htmlFor="passwordConfirm">Confirm password</label>
    <input 
  id= "passwordConfirm"
   name="passwordConfirm"
  type="password"
  placeholder="*****"
  required
  onChange ={handleChange} 
  value = {FormData.passwordConfirm}
  />
  <fieldset>
  <legend>state your gender</legend>
  
    <input 
  id= "male"
   name="sex"
  type="radio"
  value="male"
  onChange ={handleChange} 
 checked = {FormData.sex==="male"}
  />
  <label htmlFor="male">male</label>
  <input 
  id= "female"
   name="sex"
  type="radio"
  value="female"
  onChange ={handleChange} 
 checked = {FormData.sex==="female"}
  />
  <label htmlFor="female">female</label> 
     </fieldset>
   <label htmlFor="news-letter"> Subscribe to our news letter</label>
    <input 
  id= "news-letter"
   name="signNewsLetter"
  type="checkbox"
  onChange ={handleChange} 
 checked = {FormData.signNewsLetter}
  />
  
  
  <div className="button-par">
    <button>Sign In</button>
<button type="reset">Reset</button>
</div>
 </form>
</div>

 <footer>Finamon template </footer>
 </section>
 )
}
export default WSignUp