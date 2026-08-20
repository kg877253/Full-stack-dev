import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params=useParams()
    // const {namme}=useParams()
  return (
    <div>
      {/* <h1>User: {namme}</h1> */}
      <h1>User: {params.namme}</h1>
    </div>
  )
}

export default User
