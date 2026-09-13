import React from 'react'
import AnimatedLogo from './AnimatedLogo' 

const Navbar = () => {
  return (
    <nav className='bg-gray-900/90 backdrop-blur-md flex flex-row gap-0 items-center justify-between px-6 md:px-10 text-white h-20 sticky top-0 z-50 border-b border-green-500/20 shadow-lg shadow-black/30'>

      <div className='flex items-center gap-2 text-2xl md:text-3xl font-medium cursor-pointer group'>
        <AnimatedLogo size={35} />

        <span className='text-green-500 transition-colors duration-300'> &lt;</span>
        <span className='transition-colors duration-300'>Pass</span>
        <span className='text-green-500 group-hover:text-green-400 transition-colors duration-300'>MAN/&gt;</span>
      </div>

      <a
        href="https://github.com/kg877253/Full-stack-dev/tree/main/PASSMAN"
        target="_blank"
        rel="noopener noreferrer"
        className='group relative flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md
                   transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/40
                   overflow-hidden'
      >
        <span className='absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12'></span>
        <img
          src="./icons/github.svg"
          alt="GitHub"
          className='w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-[360deg]'
        />
        <span className='text-base font-medium relative z-10'>GitHub</span>
      </a>

    </nav>
  )
}

export default Navbar