import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { useRef, useEffect, useState } from 'react'

const Testimonials = ({ darkMode }) => {
    const scrollRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const testimonials = [
        {
            id: 1,
            name: 'Jihad Miya',
            designation: 'Senior Frontend Developer',
            company: 'Creative IT Institute',
            image: null, // You can add image URL here if needed
            feedback: 'Sujan consistently delivered clean and responsive interfaces. His attention to detail and problem-solving skills significantly improved our project workflow.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Mahammad Nadil',
            designation: 'Team Lead',
            company: 'Creative IT Institute',
            image: null,
            feedback: 'Working with Sujan was a great experience. He writes maintainable code and adapts quickly to new technologies. A valuable team member.',
            rating: 5,
        },
        {
            id: 3,
            name: 'Fima Akter',
            designation: 'UI/UX Designer',
            company: 'Creative IT Institute',
            image: null,
            feedback: 'Sujan transformed our designs into pixel-perfect implementations. His collaboration skills and commitment to quality made the project successful.',
            rating: 5,
        },
    ]

    // Auto-scroll effect
    useEffect(() => {
        if (isHovered) return // Don't auto-scroll when user is hovering

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % testimonials.length
                
                // Smooth scroll to next card
                if (scrollRef.current) {
                    const cardWidth = scrollRef.current.scrollWidth / testimonials.length
                    scrollRef.current.scrollTo({
                        left: cardWidth * nextIndex,
                        behavior: 'smooth'
                    })
                }
                
                return nextIndex
            })
        }, 4000) // Change slide every 4 seconds

        return () => clearInterval(interval)
    }, [isHovered, testimonials.length])

    // Manual scroll handler
    const handleScroll = () => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.scrollWidth / testimonials.length
            const scrollPosition = scrollRef.current.scrollLeft
            const newIndex = Math.round(scrollPosition / cardWidth)
            setCurrentIndex(newIndex)
        }
    }

    // Manual navigation
    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.scrollWidth / testimonials.length
            scrollRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            })
            setCurrentIndex(index)
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            x: 50,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    return (
        <section
            id="testimonials"
            style={{
                backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
                transition: 'background-color 0.5s ease'
            }}
            className="relative py-20 overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                    className="absolute top-1/2 -left-24 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{
                        background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
                    }}
                />
                <div 
                    className="absolute top-1/2 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{
                        background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                        style={{
                            backgroundColor: darkMode ? '#1e293b' : '#ffffff',
                            border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
                        }}
                    >
                        <FaQuoteLeft className="text-orange-500 text-sm" />
                        <span
                            className="text-sm font-medium"
                            style={{
                                color: darkMode ? '#cbd5e1' : '#64748b',
                            }}
                        >
                            Client & Team Feedback
                        </span>
                    </motion.div>

                    <h2
                        className="text-4xl sm:text-5xl font-bold mb-4 transition-colors duration-500"
                        style={{
                            color: darkMode ? '#f8fafc' : '#0f172a',
                        }}
                    >
                        What{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            People Say
                        </span>
                    </h2>
                    <p
                        className="max-w-2xl mx-auto text-base sm:text-lg transition-colors duration-500"
                        style={{
                            color: darkMode ? '#94a3b8' : '#64748b',
                        }}
                    >
                        Feedback from mentors and team members I've worked with
                    </p>
                </motion.div>

                {/* Testimonials Scroll Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="relative"
                >
                    {/* Scroll Wrapper */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                variants={cardVariants}
                                whileHover={{ 
                                    y: -10,
                                    transition: { duration: 0.3, ease: 'easeOut' }
                                }}
                                className="group relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
                            >
                                {/* Gradient Border Effect */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                                    style={{
                                        background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                                        padding: '2px',
                                    }}
                                />
                                
                                <div
                                    style={{
                                        background: darkMode
                                            ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                                            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                                        border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
                                        transition: 'all 0.5s ease'
                                    }}
                                    className="relative rounded-2xl p-7 h-full duration-300 hover:border-transparent transition-all overflow-hidden shadow-lg"
                                >
                                    {/* Hover Glow Effect */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                                        }}
                                    />

                                    {/* Quote Icon */}
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 180 }}
                                        transition={{ duration: 0.5 }}
                                        className="inline-flex p-3 rounded-xl mb-5 shadow-md relative z-10"
                                        style={{
                                            background: darkMode 
                                                ? 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)' 
                                                : '#fff7ed',
                                        }}
                                    >
                                        <FaQuoteLeft
                                            className="text-xl"
                                            style={{
                                                color: darkMode ? '#ffffff' : '#f97316',
                                            }}
                                        />
                                    </motion.div>

                                    {/* Feedback Text */}
                                    <p
                                        className="text-sm sm:text-base leading-relaxed mb-6 relative z-10 transition-colors duration-500 min-h-[80px]"
                                        style={{
                                            color: darkMode ? '#cbd5e1' : '#475569',
                                        }}
                                    >
                                        "{testimonial.feedback}"
                                    </p>

                                    {/* Rating Stars */}
                                    <div className="flex gap-1 mb-5 relative z-10">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className="text-yellow-500 text-sm"
                                            />
                                        ))}
                                    </div>

                                    {/* Person Info */}
                                    <div className="flex items-center gap-4 relative z-10">
                                        {/* Avatar */}
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-md"
                                            style={{
                                                background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
                                                color: '#ffffff',
                                            }}
                                        >
                                            {testimonial.name.charAt(0)}
                                        </div>

                                        {/* Details */}
                                        <div>
                                            <h4
                                                className="font-bold text-base mb-1 transition-colors duration-500"
                                                style={{
                                                    color: darkMode ? '#f8fafc' : '#0f172a',
                                                }}
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p
                                                className="text-xs font-medium transition-colors duration-500"
                                                style={{
                                                    color: darkMode ? '#94a3b8' : '#64748b',
                                                }}
                                            >
                                                {testimonial.designation}
                                            </p>
                                            <p
                                                className="text-xs transition-colors duration-500"
                                                style={{
                                                    background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
                                                    WebkitBackgroundClip: 'text',
                                                    backgroundClip: 'text',
                                                    color: 'transparent',
                                                }}
                                            >
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Accent Line */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                                        style={{
                                            background: 'linear-gradient(90deg, #f97316, #f59e0b)',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125"
                                style={{
                                    background: index === currentIndex 
                                        ? 'linear-gradient(135deg, #f97316, #f59e0b)' 
                                        : darkMode ? '#334155' : '#e2e8f0',
                                    width: index === currentIndex ? '24px' : '8px',
                                }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}

export default Testimonials
