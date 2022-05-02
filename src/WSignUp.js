import React from "react";
const WSignUp =(props)=> {
 const {
                name, label, id, type, placeholder,
                required, value,handleChange
  }    =props

 return (
 <>
  <label htmlFor={id}>{label} </label>
  <input 
           onChange={handleChange}
           name={name}
           type={type}
           placeholder={placeholder}
           required={required}
           id={id}
           value={value}
   />
 </>
 )
}
export default WSignUp