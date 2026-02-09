import React, { useEffect, useState } from 'react'
import Navber from './components/Navber'
import AOS from 'aos'
import 'aso/dist/aos.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  })
  return (
    <div>
      <Navber></Navber>
    </div>
    
  ) 
}

export default App