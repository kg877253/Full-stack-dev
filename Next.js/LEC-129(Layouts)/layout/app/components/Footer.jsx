import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
            <p> &copy; 2023  My Website.  All rights reserved.</p>
            <ul className='flex space-x-4'>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
            </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
