import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4 flex justify-between items-center px-6 sticky top-0 z-50">
            <div className="container mx-auto flex items-center gap-3">
                <h1 className="text-xl font-bold cursor-pointer hover:scale-110 hover:rotate-2 duration-300">Get-me-chai</h1>
                <Image src="/chai.gif" alt="Logo" width={30} height={30} />
            </div>

            <ul className="flex space-x-4">
                <Link href={"/login"}>
                    <button type="button" className=" cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-3 text-center leading-5">LOGIN</button>
                </Link>
                
            </ul>

        </nav>
    )
}

export default Navbar
