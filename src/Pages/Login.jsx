import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import LoginSVG from '../Components/LoginSvg/LoginSVG';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
   <div>
    <h1>Login</h1>
    <h3>Please enter your Login and your Password</h3>
     <form action="#">
      <div>
        <FaRegUser />
        <input type="text" placeholder='UserName'/>
      </div>
      <div>
        <FiLock />
        <input type="password" placeholder='Password'/>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
    <button>
      <LoginSVG/>
      Or, sign-in with Google
    </button>
    <Link>Forgot password?</Link>
   </div>
    </>
  )
}

export default Login