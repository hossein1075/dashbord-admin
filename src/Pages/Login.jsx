import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import LoginSVG from '../Components/LoginSvg/LoginSVG';
import { Link, replace, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  useEffect(() => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  if(isLoggedIn === 'true') {
    navigate('/home', {replace: true})
  }
  }, [])

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('hi');
    
    if(userName === 'admin' && password === 'admin') {
      localStorage.setItem("isLoggedIn", 'true')
      navigate('/home', {replace: true})
       toast.success("You're logged in successfully ✨");
    } else {
   toast.error("Incorrect username or password");
    }
  }
  return (
    <>
   <div className='text-center text-white z-50 bg-white/15 rounded-3xl p-8 backdrop-blur-2xl border-white/30 shadow-2xl '>
    <h1 className='font-Noto-Bold text-3xl md:text-40px mb-0.5'>Login</h1>
    <h3 className='mb-5'>Please enter your Login and your Password</h3>
     <form action="#" onSubmit={handleSubmitForm}>
      <div className='text-left h-9 flexCenter gap-2 rounded-xl border-2 border-solid border-white mb-3'>
        <span className='ml-2'>
          <FaRegUser size={25}/>
        </span>
        <input type="text" className='w-full outline-none placeholder:text-sm' placeholder='UserName or Email' value={userName} onChange={e => setUserName(e.target.value)}/>
      </div>
      <div className='text-left  h-9 flexCenter gap-2 rounded-xl border-2 border-solid border-white mb-3'>
        <span className='ml-2'>
          <FiLock size={25}/>
        </span>
        <input type="password" className='w-full outline-none placeholder:text-sm' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
        <button type="submit" className='w-full h-9 flexCenter rounded-xl border-2 border-solid border-white text-xl mb-3 cursor-pointer'>Login</button>
    </form>
    <button className='w-full h-9 flexCenter gap-2.5 rounded-xl bg-zinc-900 mb-1.5 cursor-pointer'>
      <LoginSVG size={18}/>
      <span className='text-sm'>Or, sign-in with Google</span>
    </button>
    <Link to='#' className='block text-xs text-indigo-500 font-Noto-SemiBold text-left'>Forgot password?</Link>
   </div>
    </>
  )
}

export default Login