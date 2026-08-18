import React from 'react'

const Navbarr = () => {
    return (

        <nav className=' bg-blue-400 py-4 flex justify-between items-center px-8'>
            
            <span className='font-medium text-3xl  bg-amber-200 p-1 rounded-2xl'>K-days</span>
            <ul className="flex gap-8 text-2xl ">
                <li className='cursor-pointer'><a href="#home">Home</a></li>
                <li className='cursor-pointer'><a href="#about">About Todo's</a></li>
            </ul>
        </nav>
    )
}

export default Navbarr
