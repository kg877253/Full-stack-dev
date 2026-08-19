import React from 'react'

const Navbarr = () => {
    return (

        <nav className=' bg-gradient-to-r from-orange-200/50 to-orange-300/70 py-4 flex justify-between items-center px-8'>
            
            <span className='font-medium text-3xl text-cyan-900 bg-amber-100 p-1 rounded-3xl'>K-days</span>
            <ul className="flex gap-8 text-2xl ">
                <li className='cursor-pointer underline '><a href="#home">Home</a></li>
                <li className='cursor-pointer underline decoration-blue-800'><a href="#about">About Todo's</a></li>
            </ul>
        </nav>
    )
}

export default Navbarr
