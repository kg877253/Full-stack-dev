import React, { useRef, useState, useEffect } from 'react'

const Manager = () => {

  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordarray, setpasswordarray] = useState([])

  useEffect(() => {
    let data = localStorage.getItem("passwords")
    if (data) {
      setpasswordarray(JSON.parse(data))
    }
  }, [])

  const showpassword = () => {
    if (ref.current.src.includes("eyecross")) {
      passwordRef.current.type = "text"
      ref.current.src = "./icons/eyes.svg"
    }
    else {
      passwordRef.current.type = "password"
      ref.current.src = "./icons/eyecross.svg"
    }
  }

  const savepassword = () => {
    setpasswordarray([...passwordarray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordarray, form]))
    console.log([...passwordarray, form])
  }

  const savechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]'></div>

      <div className='text-white'>

        <h1 className='text-5xl font-bold text-center mt-10'><span className='text-green-500'> &lt;</span>
          <span className=''>Pass</span>
          <span className='text-green-500'>MAN/&gt;</span>
        </h1>
        <p className='text-center mt-3'>Manage your passwords with ease</p>
        <div className="container mx-auto mt-10 flex flex-col gap-5 p-5 text-black items-center">
          <input onChange={savechange} value={form.site} type="text " placeholder="Website" className='rounded-md p-2 w-[50%] bg-green-100 border-3 border-green-600' name='site' />

          <div className="userpass bg-green-300/50 p-2 rounded-md flex gap-8 w-[50%] items-center justify-between">
            <input onChange={savechange} value={form.username} type="text" placeholder="Username" className='rounded-md p-2 bg-green-100 w-[70%] border-2 border-green-800' name='username' />

            <div className='relative'>
              <input ref={passwordRef} onChange={savechange} value={form.password} type="text" placeholder="Password" className='w-full rounded-md p-2 bg-green-100 border-2 border-green-800' name='password' />
              <span className='absolute right-2 top-2 cursor-pointer'>
                <img ref={ref} width={30} src="./icons/eyes.svg" alt="" onClick={showpassword} /></span>
            </div>
          </div>

          <button className='bg-green-500 hover:bg-green-400 cursor-pointer text-white font-bold py-2 px-4 rounded-2xl max-w-fit min-w-fit flex items-center justify-center gap-2' onClick={savepassword}>
            <img width={25} src="./icons/add.svg" alt="" />
            Add Password
          </button>

        </div>
        <div>
          <div className='text-center text-3xl font-extrabold mt-1 underline decoration-dashed decoration-green-200'>Your Passwords</div>
          {passwordarray.length === 0 && <h1 className='text-center text-2xl mt-10'>No Passwords Saved</h1>}
          {passwordarray.length > 0 && <table className="table-auto w-[70%] text-white mx-auto mt-4 rounded-t-xl overflow-hidden ">
            <thead className='bg-green-600 text-white '>
              <tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody className='bg-green-100 text-black '>
              {passwordarray.map((item,index)=>{
                return <tr className='' key={index}>
                <td className='text-center py-1 w-36 hover:bg-green-200 transition-all duration-300 cursor-pointer'>{item.site}</td>
                <td className='text-center py-1 w-36'>{item.username}</td>
                <td className='text-center py-1 w-36'>{item.password}</td>
              </tr>
              })}
            </tbody>
          </table>
            }
        </div>
      </div>
    </>
  )
}

export default Manager
