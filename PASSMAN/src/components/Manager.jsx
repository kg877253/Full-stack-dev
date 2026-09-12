import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce, Slide, Zoom , Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

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
    setpasswordarray([...passwordarray, {...form, id: uuidv4() }])
    localStorage.setItem("passwords", JSON.stringify([...passwordarray, {...form, id: uuidv4() }]))
    console.log([...passwordarray, form])
  }

  const deletePassword = (id) => {
    const updatedArray = passwordarray.filter((item) => item.id !== id)
    setpasswordarray(updatedArray)
    localStorage.setItem("passwords", JSON.stringify(updatedArray))
  }
  
  const editPassword = (id) => {
    const passwordToEdit = passwordarray.find((item) => item.id === id);
  }

  const savechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copytext = (text) => {
    toast("Text copied to clipboard!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
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
            <img width={25} src="./icons/addgif.gif" alt="" />
            Add Password
          </button>

        </div>
        <div>
          <div className='text-center text-3xl font-extrabold mt-1 underline decoration-dashed decoration-green-200'>Your Passwords</div>
          {passwordarray.length === 0 && <h1 className='text-center text-2xl mt-10'>No Passwords Saved</h1>}
          {passwordarray.length > 0 && <table className="table-fixed w-[70%] text-white mx-auto mt-4 rounded-t-xl overflow-hidden border-separate border-spacing-0">
            <thead className='bg-green-600 text-white'>
              <tr>
                <th className='py-2'>Website</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-100 text-black'>
              {passwordarray.map((item, index) => {
                return <tr className='border-b border-green-300' key={index}>
                  <td className='text-center py-2 px-2'>
                    <div className='flex items-center justify-center gap-4'>
                      <span className='truncate'>{item.site}</span>
                      <img width={22} src="./icons/copy.svg" alt="" className='cursor-pointer' onClick={() => copytext(item.site)} />
                    </div>
                  </td>
                  <td className='text-center py-2 px-2'>
                    <div className='flex items-center justify-center gap-4'>
                      <span className='truncate'>{item.username}</span>
                      <img width={22} src="./icons/copy.svg" alt="" className='cursor-pointer' onClick={() => copytext(item.username)} />
                    </div>
                  </td>
                  <td className='text-center py-2 px-2'>
                    <div className='flex items-center justify-center gap-4'>
                      <span className='truncate'>{item.password}</span>
                      <img width={22} src="./icons/copy.svg" alt="" className='cursor-pointer' onClick={() => copytext(item.password)} />
                    </div>
                  </td>
                  <td className='text-center py-2 px-2 flex items-center justify-center gap-4'>
                    <span><img width={28} src="./icons/delete.svg" alt="" className='cursor-pointer' onClick={() => deletePassword(item.id)} /></span>
                    <span><img width={28} src="./icons/edit.svg" alt="" className='cursor-pointer' onClick={() => editPassword(item.id)} /></span>
                  </td>
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