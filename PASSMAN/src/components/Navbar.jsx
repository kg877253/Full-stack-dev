import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 flex flex-row gap-0 items-center justify-between px-10 text-white h-20'>
        <div className='text-3xl font-medium'>
            <span className='text-green-500'> &lt;</span>
            <span className=''>Pass</span>
            <span className='text-green-500'>MAN/&gt;</span>
        </div>

        <div className='flex flex-row gap-5 text-lg items-center'>
          <a href="https://github.com/kg877253/Full-stack-dev/tree/main/PASSMAN" target="_blank" rel="noopener noreferrer"
                    className='flex items-center gap-2 bg-green-600 hover:bg-green-500 px-3 py-2 rounded-md transition-colors'
                >
                    <img src="./icons/github.svg" alt="GitHub" />
                    <span className='text-base'>GitHub</span>
                </a>
        </div>
    </nav>
  )
}

export default Navbar