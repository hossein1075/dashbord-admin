import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import LoginSVG from '../Components/LoginSvg/LoginSVG';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
   <div className='text-center text-white'>
    <h1 className='font-Noto-Bold text-40px mb-0.5'>Login</h1>
    <h3 className=''>Please enter your Login and your Password</h3>
     <form action="#">
      <div className='text-left h-9 flexCenter gap-2 rounded-xl border-2 border-solid border-white'>
        <span className='ml-2'>
          <FaRegUser size={25}/>
        </span>
        <input type="text" className='w-full outline-none placeholder:text-sm' placeholder='UserName or Email'/>
      </div>
      <div className='text-left  h-9 flexCenter gap-2 rounded-xl border-2 border-solid border-white'>
        <span className='ml-2'>
          <FiLock size={25}/>
        </span>
        <input type="password" className='w-full outline-none placeholder:text-sm' placeholder='Password'/>
      </div>
        <button className='w-full h-9 flexCenter rounded-xl border-2 border-solid border-white text-xl'>Login</button>
    </form>
    <button className='w-full h-9 flexCenter gap-2.5 rounded-xl bg-zinc-900'>
      <LoginSVG size={18}/>
      <span className='text-sm'>Or, sign-in with Google</span>
    </button>
    <Link to='#' className='block text-xs text-indigo-500 font-Noto-SemiBold text-left'>Forgot password?</Link>
   </div>
    </>
  )
}

export default Login