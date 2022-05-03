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
      checked : false
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
   <label htmlFor="checkbox"> Subscribe to our news letter</label>
    <input 
  id= "checkbox"
   name="checked"
  type="checkbox"
  onChange ={handleChange} 
  value = {FormData.checked}
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