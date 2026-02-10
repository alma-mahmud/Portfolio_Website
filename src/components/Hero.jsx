import github from '../assets/Hero/Github.png'
import Linkedin from '../assets/Hero/Linkedin.png'
import whatsapp from '../assets/Hero/whatsapp.png'
import facebook from '../assets/Hero/facebook.png'

const Hero = ({darkMode}) => {
    const socialIcon = [
        { icon: github, alt: 'GitHub'},
        { icon: Linkedin, alt: 'Linkedin'},
        { icon: whatsapp, alt: 'whatsapp'},
        { icon: facebook, alt: 'facebook'},
    ];
    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: `text-white border-2 border-orange-500
        hover:bg-orange-600`,
       decorativeCircle: 'bg-orange-500 opacity-10',
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: `text-gray-800 border-2 border-orange-500
        hover:bg-orange-500 hover:text-white`,
        decorativeCircle: 'bg-orange-400 opacity-20',
    };

    const theme = darkMode ? darkTheme : darkTheme ;
  return (
    <div>Hero</div>
  )
}

export default Hero