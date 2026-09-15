import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import { getPasswords, addPassword, deletePasswordById } from '../api'
import AnimatedLogo from './AnimatedLogo'

const Manager = () => {

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordarray, setpasswordarray] = useState([])

  const fetchPasswords = async () => {
    const data = await getPasswords()
    setpasswordarray(data)
  }

  useEffect(() => {
    fetchPasswords()
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

  const savepassword = async () => {
    if (!form.site || !form.username || !form.password) {
      toast.error("Please fill all fields!", { position: "bottom-center", theme: "dark", transition: Bounce });
      return;
    }
    await addPassword(form)
    await fetchPasswords()
    setform({ site: "", username: "", password: "" })
    Swal.fire({ position: "top-end", icon: "success", title: "Your work has been saved", showConfirmButton: false, timer: 1000 });
  }

  const deletePassword = (id) => {
    Swal.fire({
      title: "Delete this password?", icon: "warning", showCancelButton: true,
      confirmButtonColor: "#dc2626", cancelButtonColor: "#4b5563",
      confirmButtonText: "Yes, delete it😔", background: "#1e1e1e", color: "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deletePasswordById(id)
        await fetchPasswords()
        Swal.fire({ title: "Deleted!", text: "Your password has been deleted.", icon: "success", background: "#1e1e1e", color: "#fff" });
      }
    })
  }

  const editPassword = async (id) => {
    const passwordToEdit = passwordarray.find((item) => item._id === id);
    if (passwordToEdit) {
      setform({ site: passwordToEdit.site, username: passwordToEdit.username, password: passwordToEdit.password });
      await deletePasswordById(id)
      await fetchPasswords()
    }
  }

  const savechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copytext = (text) => {
    toast("Text copied to clipboard!", {
      position: "bottom-center", autoClose: 5000, hideProgressBar: false,
      closeOnClick: false, pauseOnHover: true, draggable: true,
      theme: "dark", transition: Bounce,
    });
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false}
        closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover
        theme="dark" transition={Bounce}
      />

      <div className='fixed inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:74px_24px]'></div>
      {/* Naya glow layer — cursor follow karega */}
      <div
        className='fixed inset-0 -z-10 pointer-events-none transition-all duration-300 ease-out'
        style={{
          background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(74, 222, 128, 0.08), transparent 40%)`
        }}
      ></div>
      <div className='text-white animate-[fadeIn_0.6s_ease-in-out]'>

        <h1 className='text-5xl font-bold text-center mt-10 flex items-center justify-center gap-1 group'>
          <AnimatedLogo size={45} />
          <span className='text-green-500'>&lt;</span>
          <span className=''>Pass</span>
          <span className='text-green-500 transition-colors duration-300 group-hover:text-green-400'>MAN/&gt;</span>
        </h1>
        <p className='text-center mt-3 text-gray-300'>Manage your passwords with ease</p>

        <div className="container mx-auto mt-10 flex flex-col gap-5 p-5 text-black items-center">
          <input
            onChange={savechange}
            value={form.site}
            type="text "
            placeholder="Website"
            className='rounded-md p-2 w-[90%] md:w-[50%] bg-green-100 border-3 border-green-600
                       transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:scale-[1.02]'
            name='site'
          />

          <div className="userpass bg-green-300/50 p-2 rounded-md flex gap-8 w-[90%] md:w-[50%] items-center justify-between
                          transition-all duration-300 focus-within:ring-4 focus-within:ring-green-400/40">
            <input
              onChange={savechange}
              value={form.username}
              type="text"
              placeholder="Username"
              className='rounded-md p-2 bg-green-100 w-[75%] md:w-[70%] border-2 border-green-800
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500'
              name='username'
            />
            <div className='relative'>
              <input
                ref={passwordRef}
                onChange={savechange}
                value={form.password}
                type="text"
                placeholder="Password"
                className='w-full rounded-md p-2 bg-green-100 border-2 border-green-800
                           transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500'
                name='password'
              />
              <span className='absolute right-1 md:right-1.5 top-2.5 md:top-1.5 cursor-pointer'>
                <img
                  ref={ref}
                  className='md:w-8 w-6 transition-transform duration-200 hover:scale-125 active:scale-90'
                  src="./icons/eyes.svg"
                  alt=""
                  onClick={showpassword}
                />
              </span>
            </div>
          </div>

          <button
            className='bg-green-500 hover:bg-green-400 cursor-pointer text-white font-bold py-2 px-4 rounded-2xl
                       max-w-fit min-w-fit flex items-center justify-center gap-2
                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/40 active:scale-95'
            onClick={savepassword}
          >
            <img width={25} height={25} src="./icons/addgif.gif" alt="" />
            SAVE
          </button>

        </div>

        <div>
          <div className='text-center text-3xl font-extrabold mt-1 md:underline decoration-dashed decoration-green-200'>Your Passwords</div>
          {passwordarray.length === 0 && <h1 className='text-center text-2xl mt-10'>No Passwords Saved</h1>}
          {passwordarray.length > 0 && <table className="table-fixed w-[90%] md:w-[70%] text-white mx-auto mt-4 rounded-t-xl rounded-b-xl overflow-hidden border-separate border-spacing-0">
            <thead className='bg-green-600 text-white'>
              <tr>
                <th className='py-2 border-r border-black'>Website</th>
                <th className='py-2 border-r border-black'>Username</th>
                <th className='py-2 border-r border-black'>Password</th>
                <th className='py-2 border-r border-black'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-100 text-black'>
              {passwordarray.map((item) => {
                return <tr className='transition-colors duration-200 hover:bg-green-200' key={item._id}>
                  <td className='text-center py-2 px-2 border-r border-black'>
                    <div className='flex items-center justify-center gap-4'>
                      <span className='truncate'><a href={item.site} target="_blank" rel="noopener noreferrer" className='hover:underline hover:text-green-700 transition-colors'>{item.site}</a></span>
                      <img className='cursor-pointer w-4 md:w-6 transition-transform duration-200 hover:scale-125 active:scale-90' src="./icons/copy.svg" alt="" onClick={() => copytext(item.site)} />
                    </div>
                  </td>
                  <td className='text-center py-2 px-2 border-r border-black'>
                    <div className='flex items-center justify-center gap-4'>
                      <span className='truncate'>{item.username}</span>
                      <img className='cursor-pointer w-4 md:w-6 transition-transform duration-200 hover:scale-125 active:scale-90' src="./icons/copy.svg" alt="" onClick={() => copytext(item.username)} />
                    </div>
                  </td>
                  <td className='text-center py-2 px-2 border-r border-black'>
                    <div className='flex items-center justify-center gap-4'>
                      <span className='truncate'>{"*".repeat(item.password.length)}</span>
                      <img className='cursor-pointer w-4 md:w-6 transition-transform duration-200 hover:scale-125 active:scale-90' src="./icons/copy.svg" alt="" onClick={() => copytext(item.password)} />
                    </div>
                  </td>
                  <td className='text-center py-2 px-2 flex items-center justify-center gap-4 border-r border-black'>
                    <span><img width={28} src="./icons/delete.svg" alt="" className='cursor-pointer transition-transform duration-200 hover:scale-125 hover:rotate-6 active:scale-90' onClick={() => deletePassword(item._id)} /></span>
                    <span><img width={28} src="./icons/edit.svg" alt="" className='cursor-pointer transition-transform duration-200 hover:scale-125 hover:-rotate-6 active:scale-90' onClick={() => editPassword(item._id)} /></span>
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