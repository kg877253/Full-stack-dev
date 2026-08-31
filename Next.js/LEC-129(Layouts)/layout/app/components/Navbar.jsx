import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between p-4 bg-gray-600 text-blue-300 font-bold  '>
        <ul className='flex space-x-4'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
