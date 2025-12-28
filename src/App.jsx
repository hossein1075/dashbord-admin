import { useState } from 'react'
import './App.css'

import routes from './router'
import { useRoutes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
let route = useRoutes(routes)


    return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
      {route}
    </>
  )
}

export default App
