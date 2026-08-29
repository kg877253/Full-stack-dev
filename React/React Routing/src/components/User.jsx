import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params = useParams()
    // const {namme}=useParams()
    return (
        <div className='bg-indigo-400'>
            {/* <h1>User: {namme}</h1> */}
            <h1>User ka nam dalo url me: {params.namme}</h1>
        </div>
    )
}

export default User
