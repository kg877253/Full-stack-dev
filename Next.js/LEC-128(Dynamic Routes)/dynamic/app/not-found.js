import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center m-2'>
      <h2 className='text-6xl font-extrabold m-10'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}