import React from "react";
// import Header from "./Header"
const Welcome =(props)=> {
return (
 <>
     <div className="anchor-wrapper">
              <p onClick={props.signUp}>sign up</p>
              <p onClick={props.logIn}>login</p>
              <p onClick={props.about}>about</p>
   </div>
   <footer>
     Finamon template
     </footer>
  
    </>
)
}
export default Welcome