import React, { useRef ,useState} from 'react'

const Manager = () => {
  const ref=useRef()
  const [form, setform] = useState({site:"",username:"",password:""})
  const showpassword=()=>{
    if(ref.current.src.includes("eyecross")){
      ref.current.src="./icons/eyes.svg"
    } else {
      ref.current.src="./icons/eyecross.svg"
    }
  }
  
  const savepassword=()=>{
    console.log(form)
  }
  
  const savechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className='absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]'></div>

      <div className='text-white'>
        <h1 className='text-5xl font-bold text-center mt-10'><span className='text-green-500'> &lt;</span>
          <span className=''>Pass</span>
          <span className='text-green-500'>MAN/&gt;</span></h1>
        <p className='text-center mt-3'>Manage your passwords with ease</p>
        <div className="container mx-auto mt-10 flex flex-col gap-5 p-5 text-black items-center">
          <input onChange={savechange} value={form.site} type="text " placeholder="Website" className='rounded-md p-2 w-[50%] bg-green-100 border-3 border-green-600' name='site' />
          <div className="userpass bg-green-300/50 p-2 rounded-md flex gap-8 w-[50%] items-center justify-between">
            <input onChange={savechange} value={form.username} type="text" placeholder="Username" className='rounded-md p-2 bg-green-100 w-[70%] border-2 border-green-800' name='username' />
            <div className='relative'>
              <input onChange={savechange} value={form.password} type="text" placeholder="Password" className='w-full rounded-md p-2 bg-green-100 border-2 border-green-800' name='password' />
              <span className='absolute right-2 top-2 cursor-pointer'>
                <img ref={ref} width={30} src="./icons/eyes.svg" alt="" onClick={showpassword}/></span>
            </div>
          </div>
          <button className='bg-green-500 hover:bg-green-400 cursor-pointer text-white font-bold py-2 px-2 rounded-2xl w-[13%] flex items-center justify-center gap-2' onClick={savepassword}>
              <img width={30} src="./icons/add.svg" alt="" />
            Add Password</button>
        </div>
      </div>
    </>
  )
}

export default Manager
