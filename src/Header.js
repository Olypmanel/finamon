import  React from "react"
import { Link } from "react-router-dom"
const Header = () => {
  // let isNotLogo = true
  const styles = {textDecoration :" none", color : "#fff"}

 return (
   <nav className="nav-wrapper-overlay">
  <li className="nav-wrapper">  
          <Link style={styles} exact to='/'>
            <img src="../logo192.png" alt='' width='100px' />  
          </Link>   
       <span>
            <Link style={{textDecoration : 'none'}} exact to='/'>
              <span>Finamon</span>
              </Link>
        </span>
</li>
<div>
              <p><Link style={styles} exact to="/signup" >
                <line>SignUp</line>
                </Link></p>
              <p><Link style={styles} exact to="/login" >
              <line>Login</line>
                </Link></p>
              <p><Link style={styles} exact to="/about" >
              <line>About</line>

                </Link></p>
  </div>
</nav>
 )
}
export default Header