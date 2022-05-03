import Header from "./Header";
import Footer from "./Footer"
import React from "react";
import "./ZLogin.css"
const LoginPage = () => {
 const [loginCredential, setCredential] = React.useState({
  userName: "",
  password : ""
 })
 function handleChange(event) {
  const {name , value} = event.target
  setCredential(prevState => ({...prevState, [name] : value}))
 }
 const handleSubmit =(event) => {
event.preventDefault()
console.log(loginCredential)
 }
return(
 <section className="header-wrapper">
  <Header />
  <div className="login-div">

  <form 
   id="login-form"
    onSubmit={handleSubmit}>
  <label htmlFor="userName">enter User Name or Email</label>
  <input 
  id= "userName"
   name="userName"
  type="text"
  placeholder="User Name"
  required
  onChange ={handleChange} 
  value = {loginCredential.userName}
  />
<label htmlFor="password">Enter your password</label>
    <input 
  id= "password"
   name="password"
  type="password"
  placeholder="*****"
  required
  onChange ={handleChange} 
  value = {loginCredential.password}
  />
   <button>Login</button>
  
   </form>
   </div>
  <Footer />
 </section>
)
}
export default LoginPage