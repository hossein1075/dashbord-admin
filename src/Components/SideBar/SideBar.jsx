import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";
function SideBar() {
  return (
    <nav className='w-50 h-screen fixed  bg-orange-500'>
      <div>
        <img src="/images/sidebar/logo.svg" alt="logo" />
      </div>

      <ul>
        <li>
          <AiOutlineHome />
          <Link to='/home'>home</Link>
        </li>
        <li>
          <FaRegUser />
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <FaRegComments />
          <Link to='/comments'>comments</Link>
        </li>
        <li>
          <AiOutlineShoppingCart />
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <MdOutlineTaskAlt />
          <Link to='/task'>Task</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar