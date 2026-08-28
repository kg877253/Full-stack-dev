import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <nav className='m-5 p-5 font-bold text-4xl bg-green-200 w-[100%] mx-auto flex justify-between items-center '>
        <div className='text-green-700'>Help Section</div>
        <ul className='text-xl text-green-800 underline'>
            <Link href="/help"><li>Help </li></Link>
            <Link href="/contact"><li>Contact US</li></Link>
            <Link href="/about"><li>About</li></Link>
        </ul>
    </nav>
  )
}

export default Footer
