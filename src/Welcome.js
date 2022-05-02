import React from "react";
const Welcome =(props)=> {
return (
 <>
     <div className="anchor-wrapper">
              <p onClick={props.signUp}>sign up</p>
              <p onClick={props.login}>login</p>
              <p onClick={props.about}>about</p>
   </div>
   <footer>
     Finamon template
     </footer>
  
    </>
)
}
export default Welcome