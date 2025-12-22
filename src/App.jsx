import { useState } from 'react'
import './App.css'

import routes from './router'
import { useRoutes } from 'react-router-dom'



function App() {
let route = useRoutes(routes)


  return route
}

export default App
