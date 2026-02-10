import { motion } from 'framer-motion'
import { useState } from 'react'

 const Navber = ({ darkMode, toggleDarkMode}) => {
    const [activeSection, setActiveSection] = useState('home')
    const [isMemuOpen, setIsMemuOpen] =useState(false)
    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' },
    ];

    const lighColors = {
        navBg: 'bg-linear-to-br from-orange-200 to-white',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        textHover: 'text-orange-500',
        textActive: 'text-orange-600',
        indicator: 'from-orange-500 to-amber-500',
        buttom: 'from-orange-500 to-amber-500',
    };

    const darkColors = {
        navBg: 'bg-linear-to-br from-gray-700 to-black',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textHover: 'text-orange-400',
        textActive: 'text-orange-400',
        indicator: 'from-orange-500 to-amber-500',
        buttom: 'from-orange-500 to-amber-500',
    };

    const colors = darkMode ? darkColors : lighColors;

    const handleNavClick = (itemName) => {
      setActiveSection(itemName.toLowrCase());
      setIsMemuOpen(false);
    };
    
  return (
    <>
    <div className='flex justify-center w-full fixed z-50 mt-4'>
      <motion.nav
        initial={{ y: -100}}
        animate={{ y: 0}}
        transiton={{ duration: 0.5}}
        className={`flex items-center justify-center ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
          <div className='flex items-center justify-between
          w-full space-x-6 lg:space-x-8'>
            {/* logo */}
            <motion.a
            href='/'
            whileHover={{scale: 1.05}}
            className='flex items-center space-x-2'>
                <span className={`text-xl font-bold ${colors.textPrimary}`}>
                  Portfolio<span
                  className='text-orange-500'>.</span>
                </span>
            </motion.a>
            {/* Navigation Items */}
            <div className='hidden lg:flex items-center
            space-x-6'>
                {navItems.map((item) => (
                  <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className='relative'
                  >
                    <motion.span
                    className={`font-medium transition-colors duration-300
                    ${
                        activeSection === item.name.toLowerCase()
                        ? colors.textActive
                        : `${colors.textSecondary} hover:text-orange-500`
                    }
                    `}
                    whileHover={{ scale: 1.05}}
                    whileTap={{ scale: 0.95}}>
                        {item.name}
                    </motion.span>
                    {activeSection === item.name.toLowerCase() && (
                      <motion.div
                      layoutId='navber-indicator'
                      className={`absolute -bottom-1 left-0
                        right-0 h-0.5 bg-linear-to-r rounded-full
                        ${colors.indicator}`}>
                      </motion.div>
                    )}
                  </a>
                ))}
            </div>
            <div className='flex items-center space-x-2'>
              {/* Deark mode toggle */}
              <motion.button
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 0.9}}
              onClick={toggleDarkMode}>

              </motion.button>
            </div>
          </div>
      </motion.nav>
    </div>
    </>
  )
}

export default Navber