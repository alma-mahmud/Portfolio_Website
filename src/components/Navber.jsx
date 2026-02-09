import React, { useState } from 'react'

 const Navber = ({ darkMode, toggleMode}) => {
    const [ativeSection, setActiveSection] = useState('home')
    const [isMemuOpen, setIsMemuOpen] =useState(false)
    const navItem = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' },
    ];

    const lighColors = {
        navBg: 'bg-linear-to-br-orange-200 to-white',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        textHover: 'text-orange-500',
        textActive: 'text-orange-500',
        indicator: 'from-orange-500 to-amber-500',
        buttom: 'from-orange-500 to-amber-500',
    };
    
  return (
    <>
    <div>

    </div>
    </>
  )
}

export default Navber