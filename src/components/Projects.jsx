import { div } from 'framer-motion/client'
import ecommerce from '../../src/assets/Profiles/profile1.png'
import profile2 from '../../src/assets/Profiles/profile2.jpg'
import profile3 from '../../src/assets/Profiles/profile3.png'
import profile4 from '../../src/assets/Profiles/profile4.png'

const Projects = ({darkMode}) => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce PlatForm',
            desc: 'Shop premium electronics, fashion, and lifestyle essentials at Exclusive with unbeatable deals and a seamless experience.',
            image: ecommerce,
            tages: ['React', 'Redux', 'Firebase'],
        },
        {
            id: 2,
            title: 'Elevate Your Lifestyle',
            desc: 'Discover premium products at exclusive prices. Your one-stop shop for electronics and fashion.',
            image: profile2,
            tages: ['React', 'React-Slider', 'React-Icons'],
        },
        {
            id: 3,
            title: 'High-Quality Digital Solutions',
            desc: 'Learn from industry experts with our featured courses and take the next step in your professional journey.',
            image: profile3,
            tages: ['React', 'Smooth-Animations', 'React-Icons'],
        },
        {
            id: 4,
            title: 'Building Stellar Websites for Startups',
            desc: 'We design and develop high-quality digital products to help early-stage startups grow and succeed.',
            image: profile4,
            tages: ['React', 'Farmer-Motion', 'React-Icon'],
        },
    ]
  return (
    <section
    id='projects'
    style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
    }}
    className='relative py-24'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-10' data-aos='fade-up'>
                <h2
                className='text-3xl sm:text-4xl font-bold mb-3'
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}> 
                
                My <span
                style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}>
                    Projects
                </span>
                </h2>
                <p
                className='max-w-xl mx-auto]'
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}>
                    A Showcase of recent work
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                {projects.map((project, index) => (
                    <div
                    key={project.id}
                    style={{
                        background: darkMode
                        ? 'linear-gradient(to right, #1f2937, #111827)'
                        : 'linear-gradient(to right, #ffffff, #f59e0b)',
                        borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}
                    className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
                    data-aos='fade-up'
                    data-aos-delay={index * 100}>
                        <div className='h-36 overflow-hidden rounded-t-xl'>
                            <img src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects