import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='bg-red-200'>
      Iam Dashboard
      <Outlet/>
    </div>
  )
}

export default Dashboard
