import React from 'react'
import { memo } from 'react'
const Navbar = ({ adjective,getadjective,count }) => {
    console.log("Navbar rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={()=>{getadjective()}}>change-{count}</button>
    </div>
  )
}
export default memo(Navbar)
