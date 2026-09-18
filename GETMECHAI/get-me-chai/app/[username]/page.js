import React from 'react'

const Username = ({params}) => {
  return (
    <div className='text-4xl'>
      {params.username}
    </div>
  )
}

export default Username
