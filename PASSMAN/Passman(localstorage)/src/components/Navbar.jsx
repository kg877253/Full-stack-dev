import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 hover:bg-gray-800/40 flex flex-row items-center justify-between md:px-10 px-1.5 text-white h-16 sticky top-0 z-50'>
        <div className='text-3xl font-medium'>
            <span className='text-green-500'> &lt;</span>
            <span className=''>Pass</span>
            <span className='text-green-500'>MAN/&gt;</span>
        </div>

        <div className='flex flex-row md:gap-4 text-lg items-center'>
          <a href="https://github.com/kg877253/Full-stack-dev/tree/main/PASSMAN" target="_blank" rel="noopener noreferrer"
                    className='flex items-center overflow-auto sm:p-1.5 md:gap-2 bg-green-600 hover:bg-green-500 md:px-3 md:py-2 rounded-md transition-colors'
                >
                    <img src="./icons/github.svg" alt="GitHub" />
                    <span className='text-base'>GitHub</span>
                </a>
        </div>
    </nav>
  )
}

export default Navbar