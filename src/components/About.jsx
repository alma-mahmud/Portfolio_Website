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

            {/* Premium Gradient Circle with Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-70 h-70 
              sm:w-[320px] sm:h-80
              md:w-95 md:h-95
              lg:w-112.5 lg:h-112.5
              xl:w-130 xl:h-130
              rounded-full z-0"
              data-aos='zoom-in'
              data-aos-delay='600'>
              
              {/* Outer Glow Layer */}
              <div className="absolute inset-0 rounded-full 
                bg-gradient-to-br from-[#f97316]/20 via-[#fb923c]/15 to-[#f59e0b]/20 
                blur-2xl"></div>
              
              {/* Main Background with Border */}
              <div className="absolute inset-0 rounded-full 
                bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b]
                p-[3px]">
                <div className="w-full h-full rounded-full 
                  bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
              </div>
              
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full 
                bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#f59e0b] 
                opacity-60 blur-sm"></div>
              
              {/* Inner Border Highlight */}
              <div className="absolute inset-[2px] rounded-full 
                bg-gradient-to-br from-[#f97316]/30 via-transparent to-[#f59e0b]/30"></div>
            </div>

            {/* Main Image with Enhanced Shadow */}
            <img src={aboutimg}
              alt="About Image"
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-95 
                sm:h-105
                md:h-120
                lg:h-135
                xl:h-150
                w-auto object-contain z-10
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
              data-aos='zoom-in'
              data-aos-delay='400'
            />

            {/* Premium Positioned Tech Icons - Strategic Layout */}

            {/* 1. JavaScript - Top Left (Primary Position) */}
            <div className="absolute 
              top-2 -left-5 
              sm:top-4 sm:-left-6
              md:top-6 md:-left-8
              lg:top-8 lg:-left-14
              xl:top-10 xl:-left-16
              w-16 h-16 
              sm:w-18 sm:h-18
              md:w-20 md:h-20
              lg:w-26 lg:h-26
              xl:w-30 xl:h-30
              bg-gradient-to-br from-[#f7df1e] to-[#e8cf15]
              rounded-2xl 
              shadow-[0_20px_50px_rgba(247,223,30,0.45),0_8px_20px_rgba(0,0,0,0.35)]
              flex items-center justify-center z-20
              hover:scale-110 hover:shadow-[0_25px_60px_rgba(247,223,30,0.55),0_10px_25px_rgba(0,0,0,0.45)]
              transition-all duration-300 -rotate-15
              animate-float-delayed
              border-2 border-[#f7df1e]/30"
              data-aos='fade-right'
              data-aos-delay='800'>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black drop-shadow-md">JS</span>
            </div>

            {/* 2. React - Top Right (Prominent) */}
            <div className="absolute 
              top-0 -right-5
              sm:top-2 sm:-right-6
              md:top-4 md:-right-8
              lg:top-6 lg:-right-13
              xl:top-8 xl:-right-15
              w-15 h-15
              sm:w-17 sm:h-17
              md:w-19 md:h-19
              lg:w-25 lg:h-25
              xl:w-29 xl:h-29
              bg-white
              rounded-full 
              shadow-[0_20px_50px_rgba(97,218,251,0.45),0_8px_20px_rgba(0,0,0,0.35)]
              flex items-center justify-center z-20
              hover:scale-110 hover:shadow-[0_25px_60px_rgba(97,218,251,0.55),0_10px_25px_rgba(0,0,0,0.45)]
              transition-all duration-300 rotate-15
              animate-float
              border-2 border-cyan-200/40
              ring-4 ring-cyan-400/10"
              data-aos='fade-left'
              data-aos-delay='1000'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 drop-shadow-md" />
            </div>

            {/* 3. Tailwind CSS - Right Upper-Middle (Strategic) */}
            <div className="absolute 
              top-[35%] -right-4
              sm:top-[35%] sm:-right-5
              md:top-[35%] md:-right-7
              lg:top-[35%] lg:-right-12
              xl:top-[35%] xl:-right-14
              w-13 h-13
              sm:w-15 sm:h-15
              md:w-17 md:h-17
              lg:w-23 lg:h-23
              xl:w-27 xl:h-27
              bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9]
              rounded-2xl 
              shadow-[0_20px_50px_rgba(56,189,248,0.45),0_8px_20px_rgba(0,0,0,0.35)]
              flex items-center justify-center z-20
              hover:scale-110 hover:shadow-[0_25px_60px_rgba(56,189,248,0.55),0_10px_25px_rgba(0,0,0,0.45)]
              transition-all duration-300 rotate-8
              animate-float
              border-2 border-cyan-300/30"
              data-aos='fade-left'
              data-aos-delay='1200'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-15 lg:h-15 xl:w-17 xl:h-17 drop-shadow-md" />
            </div>

            {/* 4. Firebase - Bottom Right (Balanced) */}
            <div className="absolute 
              bottom-4 -right-4
              sm:bottom-6 sm:-right-5
              md:bottom-8 md:-right-7
              lg:bottom-12 lg:-right-12
              xl:bottom-16 xl:-right-14
              w-14 h-14
              sm:w-16 sm:h-16
              md:w-18 md:h-18
              lg:w-24 lg:h-24
              xl:w-28 xl:h-28
              bg-gradient-to-br from-[#fbbf24] to-[#f59e0b]
              rounded-2xl 
              shadow-[0_20px_50px_rgba(251,191,36,0.45),0_8px_20px_rgba(0,0,0,0.35)]
              flex items-center justify-center z-20
              hover:scale-110 hover:shadow-[0_25px_60px_rgba(251,191,36,0.55),0_10px_25px_rgba(0,0,0,0.45)]
              transition-all duration-300 rotate-10
              animate-float-delayed
              border-2 border-yellow-300/30"
              data-aos='fade-left'
              data-aos-delay='1400'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                alt="Firebase"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-15 lg:h-15 xl:w-17 xl:h-17 drop-shadow-md" />
            </div>

            {/* 5. Git - Bottom Left (Anchor) */}
            <div className="absolute 
              bottom-3 -left-5
              sm:bottom-5 sm:-left-6
              md:bottom-7 md:-left-8
              lg:bottom-10 lg:-left-13
              xl:bottom-14 xl:-left-15
              w-13 h-13
              sm:w-15 sm:h-15
              md:w-17 md:h-17
              lg:w-23 lg:h-23
              xl:w-27 xl:h-27
              bg-gradient-to-br from-[#f97316] to-[#ea580c]
              rounded-full 
              shadow-[0_20px_50px_rgba(249,115,22,0.45),0_8px_20px_rgba(0,0,0,0.35)]
              flex items-center justify-center z-20
              hover:scale-110 hover:shadow-[0_25px_60px_rgba(249,115,22,0.55),0_10px_25px_rgba(0,0,0,0.45)]
              transition-all duration-300 -rotate-8
              animate-float
              border-2 border-orange-400/30"
              data-aos='fade-right'
              data-aos-delay='1600'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-15 lg:h-15 xl:w-17 xl:h-17 drop-shadow-md" />
            </div>
          </div>

          {/* Ultra-Premium Floating Animation CSS */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { 
                transform: translateY(0px) scale(1); 
              }
              50% { 
                transform: translateY(-20px) scale(1.02); 
              }
            }

            @keyframes float-delayed {
              0%, 100% { 
                transform: translateY(0px) scale(1); 
              }
              50% { 
                transform: translateY(-22px) scale(1.02); 
              }
            }

            .animate-float {
              animation: float 4s ease-in-out infinite;
            }

            .animate-float-delayed {
              animation: float-delayed 4.5s ease-in-out infinite;
            }

            /* Premium hover effects with smooth transition */
            @media (hover: hover) {
              .animate-float:hover,
              .animate-float-delayed:hover {
                animation-play-state: paused;
                transform: translateY(-5px) scale(1.1);
              }
            }

            /* Add subtle pulse on larger screens */
            @media (min-width: 1024px) {
              @keyframes subtle-pulse {
                0%, 100% { 
                  opacity: 1; 
                }
                50% { 
                  opacity: 0.95; 
                }
              }
              
              .animate-float,
              .animate-float-delayed {
                animation: float 4s ease-in-out infinite, subtle-pulse 3s ease-in-out infinite;
              }
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