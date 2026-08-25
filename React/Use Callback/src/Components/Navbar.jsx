import React from 'react'
import { memo } from 'react'
const Navbar = ({ adjective,getadjective }) => {
    console.log("Navbar rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={getadjective}>Change Adjective</button>
    </div>
  )
}

export default memo(Navbar)
