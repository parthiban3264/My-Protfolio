import React from 'react'
import HeroImage from '../assets/parthi123.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Parthiban R</span>
      </h1>
      <h2 className='text-4xl font-bold pt-3'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500'> Full-Stack Developer</span>
      </h2>
      <p className="mt-4 text-lg text-gray-300">
        I'm passionate about developing modern and responsive web applications.
      </p>
      <p className="text-lg text-gray-300 pt-1">
        I focus on delivering clean design and reliable functionality.
      </p>

      <div className='mt-8 space-x-4'>
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          onClick={() => {
            window.location.href = 'whatsapp://send?phone=918056903264&text=Hello%20there!';
          }}>
          Contact With Me
        </button>
        <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
          <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Resume
          </button>
        </a>
      </div>

    </div>
  )
}

export default Hero