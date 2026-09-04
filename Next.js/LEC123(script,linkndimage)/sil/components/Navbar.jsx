import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='p-5 font-bold text-3xl bg-blue-200 w-[100%]  flex justify-between items-center p-4'>
      <div className='text-blue-600'>FACEBOOK</div>
      <ul className='text-[20px] text-blue-700 '>
        <Link href="/"><li>Home </li></Link>
        <Link href="/contact"><li>Contact US</li></Link>
        <Link href="/about"><li>About </li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
