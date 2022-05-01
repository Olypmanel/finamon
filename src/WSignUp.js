import React from "react";
import "./ZSingnUp.css"
const WSignUp =(props)=> {
 const {
                name, label, id, type, placeholder,
                compulsory, value,handleChange
  }    =props

 return (
 <>
  <label htmlFor={id}>{label} </label>
  <input 
           onChange={handleChange}
           name={name}
           type={type}
           placeholder={placeholder}
           compulsory={compulsory}
           id={id}
           value={value}
   />
 </>
 )
}
export default WSignUp