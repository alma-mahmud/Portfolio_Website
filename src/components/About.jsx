import aboutimg from '../../src/assets/About/about.jpg'

const About = ({darkMode}) => {
  return (
    <section id="about" className={`min-h-[100dvh] overflow-hidden flex items-center justify-center px-4 sm:px-6`}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        <figure
          data-aos='fade-up'
          data-aos-delay='300'
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
            mx-auto h-100 sm:h-112.5 md:h-125 lg:h-137.5 xl:h-150 
            flex items-center justify-center">

            {/* Star Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-70 h-70 
              sm:w-[320px] sm:h-80
              md:w-95 md:h-95
              lg:w-112.5 lg:h-112.5
              xl:w-130 xl:h-130
              bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#f59e0b] 
              rotate-12 star-shape z-0"
              data-aos='zoom-in'
              data-aos-delay='600'>
            </div>

            {/* Main Image */}
            <img src={aboutimg}
              alt="About Image"
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-95 
                sm:h-105
                md:h-120
                lg:h-135
                xl:h-150
                w-auto object-contain z-10'
              data-aos='zoom-in'
              data-aos-delay='400'
            />

            {/* Floating Tech Icons - Fully Responsive */}

            {/* 1. JavaScript - Top Left */}
            <div className="absolute 
              top-8 -left-4 
              sm:top-10 sm:-left-5
              md:top-14 md:-left-6
              lg:top-16 lg:-left-8
              xl:top-20 xl:-left-10
              w-16 h-16 
              sm:w-18 sm:h-18
              md:w-20 md:h-20
              lg:w-24 lg:h-24
              xl:w-28 xl:h-28
              bg-yellow-300 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              flex items-center justify-center z-20
              hover:scale-110 transition-all duration-300 -rotate-12
              animate-float-delayed"
              data-aos='fade-right'
              data-aos-delay='800'>
              <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">JS</span>
            </div>

            {/* 2. React - Top Right */}
            <div className="absolute 
              top-6 -right-3
              sm:top-8 sm:-right-4
              md:top-10 md:-right-5
              lg:top-12 lg:-right-7
              xl:top-14 xl:-right-9
              w-14 h-14
              sm:w-16 sm:h-16
              md:w-18 md:h-18
              lg:w-22 lg:h-22
              xl:w-26 xl:h-26
              bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              flex items-center justify-center z-20
              hover:scale-110 transition-all duration-300 rotate-12
              animate-float"
              data-aos='fade-left'
              data-aos-delay='1000'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>

            {/* 3. Tailwind CSS - Right Middle */}
            <div className="absolute 
              top-1/2 -translate-y-1/2 -right-4
              sm:-right-5
              md:-right-6
              lg:-right-8
              xl:-right-10
              w-12 h-12
              sm:w-14 sm:h-14
              md:w-16 md:h-16
              lg:w-20 lg:h-20
              xl:w-24 xl:h-24
              bg-cyan-400 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              flex items-center justify-center z-20
              hover:scale-110 transition-all duration-300 rotate-6
              animate-float-delayed"
              data-aos='fade-left'
              data-aos-delay='1200'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-13 lg:h-13 xl:w-15 xl:h-15" />
            </div>

            {/* 4. Firebase - Bottom Right */}
            <div className="absolute 
              bottom-12 -right-3
              sm:bottom-14 sm:-right-4
              md:bottom-16 md:-right-5
              lg:bottom-20 lg:-right-7
              xl:bottom-24 xl:-right-9
              w-14 h-14
              sm:w-16 sm:h-16
              md:w-18 md:h-18
              lg:w-22 lg:h-22
              xl:w-26 xl:h-26
              bg-yellow-400 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              flex items-center justify-center z-20
              hover:scale-110 transition-all duration-300 rotate-12
              animate-float"
              data-aos='fade-left'
              data-aos-delay='1400'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                alt="Firebase"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>

            {/* 5. Git - Bottom Left */}
            <div className="absolute 
              bottom-10 -left-4
              sm:bottom-12 sm:-left-5
              md:bottom-14 md:-left-6
              lg:bottom-18 lg:-left-8
              xl:bottom-22 xl:-left-10
              w-12 h-12
              sm:w-14 sm:h-14
              md:w-16 md:h-16
              lg:w-20 lg:h-20
              xl:w-24 xl:h-24
              bg-orange-500 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              flex items-center justify-center z-20
              hover:scale-110 transition-all duration-300 -rotate-6
              animate-float-delayed"
              data-aos='fade-right'
              data-aos-delay='1600'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-13 lg:h-13 xl:w-15 xl:h-15" />
            </div>
          </div>

          {/* Floating Animation CSS */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { 
                transform: translateY(0px); 
              }
              50% { 
                transform: translateY(-10px); 
              }
            }

            @keyframes float-delayed {
              0%, 100% { 
                transform: translateY(0px); 
              }
              50% { 
                transform: translateY(-12px); 
              }
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            .animate-float-delayed {
              animation: float-delayed 3.5s ease-in-out infinite;
            }
          `}</style>
        </figure>
        {/*========= Right Part ==========*/}
        <article
            data-aos='fade-left'
            data-aos-delay='300'
            className='text-center lg:text-left relative order-1 lg:order-2'>
                <header>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl
                    xl:text-6xl font-bold mb-4 sm:mb-6
                    text-transparent bg-gradient-to-r from-orange-400
                    to-orange-600 bg-clip-text'
                    data-aos='fade-up'
                    data-aos-delay='400'>
                        About Me
                    </h1>
                </header>
                <p className={`text-sm sm:text-base lg:text-lg
                    xl:text-xl mb-6 sm:mb-8 leading-relaxed
                    bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    data-aos='fade-up'
                    data-aos-delay='500'>
                    "I’m a Frontend Developer who loves building things that work (and fixing them when they don't). With experience in React, Redux, and Firebase, I’ve spent the last few months intern-ing and building e-commerce platforms in collaborative environments. I don't just follow tutorials—I push code to GitHub daily, solve real-world problems, and believe that the best products are built through teamwork and constant iteration."
                </p>
                <div
                className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8'>
                    <div
                    className='text-center'
                    data-aos='zoom-in'
                    data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl
                        lg:text-4xl font-bold text-orange-400'>
                          4+
                        </div>
                        <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Education
                        </div>
                    </div>
                    <div
                    className='text-center'
                    data-aos='zoom-in'
                    data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl
                        lg:text-4xl font-bold text-orange-400'>
                          3+
                        </div>
                        <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Month Experience
                        </div>
                    </div>
                    <div
                    className='text-center'
                    data-aos='zoom-in'
                    data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl
                        lg:text-4xl font-bold text-orange-400'>
                          40+
                        </div>
                        <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Projects Completed
                        </div>
                    </div>
                </div>
                <button 
                className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center  justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer 
                ${darkMode
                  ? 'text-white bg-orange-500/10'
                  : 'text-gray-800 bg-white/90'
                }`}
                data-aos='fade-up'
                data-aos-delay='800'>
                  Learn More
                </button>
        </article>
      </div>
    </section>
  );
}

export default About