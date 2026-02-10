import github from '../assets/Hero/Github.png'
import Linkedin from '../assets/Hero/Linkedin.png'
import whatsapp from '../assets/Hero/whatsapp.png'
import facebook from '../assets/Hero/facebook.png'

const Hero = ({darkMode}) => {
    const socialIcons = [
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
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
        <section
        id='home'
        data-aos='fade-up'
        data-aos-delat='250'
        className='body-font z-10'>
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14
            py-12 lg:py-32 flex-col lg:flex-row items-center justify-between
            lg:mt-0 mt-14'>
                <div className='lg:h-1/2 w-full flex-col items-center
                lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    <div className='flex justify-center lg:justify-start
                    gap-4 sm:gap-6 sm:mb-7 w-full'>
                        {socialIcons.map((social, index) => (
                            <a
                            key={index}
                            href='#'
                            target='_blank'
                            data-aos-dely={`${400 + index * 100}`}
                            className='transform hover:scale-110
                            transition-transform duration-300'>
                                <img
                                src={social.icon}
                                alt={social.icon}
                                className={`w-8 h-8 sm:w-10 sm:h-10
                                object-contain ${darkMode
                                    ? ''
                                    : 'filter brightness-75'
                                }`} />
                            </a>
                        ))}
                    </div>
                    <h1 className={`title-font text-3xl sm:text-4xl
                        lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                        data-aos='fade-up'
                        data-aos-delay='500'>
                        Hi, I'm Al Mahmud
                    </h1>
                    <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                    data-aos='fada-up'
                    data-aos-delay='600'>
                        "Frontend Developer | React & Redux Specialist. 3 months of internship experience. I thrive in collaborative environments, building scalable e-commerce sites and solving complex logic. Whether it’s handling Firebase auth or fetching data with Axios, I focus on writing clean, functional code. I’m a daily coder, a problem solver, and a team player looking to build things that matter."
                    </p>
                    {/* Button */}
                    <div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero