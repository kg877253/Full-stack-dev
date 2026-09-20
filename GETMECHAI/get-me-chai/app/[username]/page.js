import React from 'react'
import Paymentpage from '../../components/Paymentpage'

export default async function Username({ params }) {
  // Await the params Promise to access its properties
  const { username } = await params;

  return <>
    {await <Paymentpage key={username} username={username}/>}
  </>
}
