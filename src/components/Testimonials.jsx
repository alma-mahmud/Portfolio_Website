import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { useState, useEffect } from 'react'

// তোমার ইমপোর্ট করা ইমেজগুলো
import jihadMiya from '../../src/assets/Testimonials/jihad.jpg'
import Nadil from '../../src/assets/Testimonials/Nadil.jpg'
import fima from '../../src/assets/Testimonials/fima.jpg'
import srabon from '../../src/assets/Testimonials/srabon.jpg'

const Testimonials = ({ darkMode }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const testimonials = [
        { id: 1, name: 'Jihad Miya', image: jihadMiya, designation: 'Senior Frontend Developer', company: 'Creative IT Institute', feedback: 'Mahmud consistently delivered clean and responsive interfaces. His attention to detail and problem-solving skills significantly improved our project workflow.', rating: 5 },
        { id: 2, name: 'Mahammad Nadil', image: Nadil, designation: 'Team Lead', company: 'Creative IT Institute', feedback: 'Working with Mahmud was a great experience. He writes maintainable code and adapts quickly to new technologies. A valuable team member.', rating: 5 },
        { id: 3, name: 'Fima Akter', image: fima, designation: 'UI/UX Designer', company: 'Creative IT Institute', feedback: 'Al Mahmud transformed our designs into pixel-perfect implementations. His collaboration skills and commitment to quality made the project successful.', rating: 5 },
        { id: 4, name: 'NR Srabon', image: srabon, designation: 'Full Stack Developer', company: 'Creative IT Institute', feedback: 'Great team player with excellent React skills. Sujan always delivers high-quality work on time and helps others grow.', rating: 5 },
    ]

    // Auto-play logic
    useEffect(() => {
        if (isHovered) return
        const timer = setInterval(() => {
            handleNext()
        }, 5000)
        return () => clearInterval(timer)
    }, [isHovered, currentIndex])

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    // Drag support
    const onDragEnd = (event, info) => {
        if (info.offset.x < -50) handleNext()
        else if (info.offset.x > 50) handlePrev()
    }

    return (
        <section id="testimonials" className={`relative py-24 overflow-hidden transition-colors duration-700 ${darkMode ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'}`}>
            
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border ${darkMode ? 'bg-slate-800 border-slate-700 text-orange-400' : 'bg-white border-slate-200 text-orange-600 shadow-sm'}`}
                    >
                        <FaQuoteLeft className="inline mr-2 mb-1" /> Testimonials
                    </motion.span>
                    <h2 className={`text-4xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        What <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">People Say</span>
                    </h2>
                </div>

                <div 
                    className="relative h-[480px] flex items-center justify-center touch-none"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="flex items-center justify-center w-full max-w-6xl relative">
                        {testimonials.map((testimonial, index) => {
                            let position = index - currentIndex
                            if (index === 0 && currentIndex === testimonials.length - 1) position = 1
                            if (index === testimonials.length - 1 && currentIndex === 0) position = -1

                            const isActive = index === currentIndex

                            return (
                                <motion.div
                                    key={testimonial.id}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={onDragEnd}
                                    animate={{
                                        x: position * (window.innerWidth < 768 ? 320 : 400),
                                        scale: isActive ? 1.05 : 0.85,
                                        opacity: isActive ? 1 : 0.4,
                                        zIndex: isActive ? 30 : 10,
                                        rotateY: position * 15,
                                        filter: isActive ? 'blur(0px)' : 'blur(2px)',
                                    }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    className="absolute w-full max-w-[320px] md:max-w-[400px] cursor-grab active:cursor-grabbing"
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <div className={`relative p-8 rounded-[2.5rem] border shadow-2xl transition-all duration-500 backdrop-blur-sm ${
                                        isActive 
                                        ? (darkMode ? 'bg-slate-800/80 border-orange-500/50' : 'bg-white border-orange-200') 
                                        : (darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-transparent')
                                    }`}>
                                        <div className={`absolute top-0 right-0 p-6 opacity-10 text-6xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                            <FaQuoteLeft />
                                        </div>
                                        
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-amber-400 text-sm" />
                                            ))}
                                        </div>

                                        <p className={`text-lg italic leading-relaxed mb-8 min-h-[100px] ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                            "{testimonial.feedback}"
                                        </p>

                                        <div className="flex items-center gap-4">
                                            {/* ইমেজ হ্যান্ডেলিং */}
                                            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-orange-500/20">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={testimonial.name} 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>{testimonial.name}</h4>
                                                <p className="text-sm text-orange-500 font-bold uppercase tracking-tight">{testimonial.designation}</p>
                                                <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className="relative h-2 group"
                        >
                            <div className={`h-full rounded-full transition-all duration-500 ${
                                index === currentIndex 
                                ? 'w-12 bg-gradient-to-r from-orange-500 to-amber-500' 
                                : `w-3 ${darkMode ? 'bg-slate-700' : 'bg-slate-300'} group-hover:bg-slate-400`
                            }`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials