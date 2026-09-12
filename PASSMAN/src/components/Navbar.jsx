import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 flex flex-row gap-0 items-center justify-between p-4 text-white h-20'>
        <div className='text-3xl font-medium'>
            <span className='text-green-500'> &lt;</span>
            <span className=''>Pass</span>
            <span className='text-green-500'>MAN/&gt;</span>
        </div>

        <ul className='flex flex-row gap-5 text-lg'>
            <li className='hover:font-semibold'><a href="#home">Home</a> </li>
            <li className='hover:font-semibold'><a href="#about">About</a></li>
            <li className='hover:font-semibold'><a href="#services">Services</a></li>
            <li className='hover:font-semibold'><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
