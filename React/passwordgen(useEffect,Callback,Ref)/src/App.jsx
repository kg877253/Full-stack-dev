import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numbers, setnumbers] = useState(false)
  const [characters, setcharacters] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordgenerator = useCallback((length, numbers, characters) => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) {
      str += "0123456789"
    }
    if (characters) {
      str += "!@#$%^&*()_+"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [numbers, characters, length, setPassword])

  useEffect(() => {
    passwordgenerator(length, numbers, characters)
  }, [length, numbers, characters, passwordgenerator])

  return (
    <>
      <div className='bg-black h-screen flex flex-col items-center text-white'>
        <h1 className='text-2xl font-bold mt-10'>Welcome to the Password Generator</h1>

        <div className='mt-10 p-6 h-40 w-180 bg-amber-100 text-black flex flex-col rounded-lg'>

          <div>
            <input
              type="text"
              name="password"
              id="password"
              value={Password}
              placeholder='Password'
              className='w-[80%] border-2 pl-2 h-10 rounded-lg text-start bg-white'
              readOnly />

            <button type="button" className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-2'>Copy</button>
          </div>

          <div className='mt-4 flex gap-8'>

            <div className="length flex gap-2">
              <input
                type="range"
                min={8}
                max={80}
                value={length}
                onChange={(e) => setlength(e.target.value)}
                className='w-[60%] cursor-pointer' />
              <label htmlFor="length" className="">Length: {length}</label>
            </div>

            <div className="number">
              <input
                type="checkbox"
                id="numbers"
                checked={numbers}
                onChange={() => setnumbers((prev) => !prev)} />
              <label htmlFor="numbers">Numbers</label>
            </div>

            <div className="character">
              <input
                type="checkbox"
                id="characters"
                checked={characters}
                onChange={() => setcharacters((prev) => !prev)} />
              <label htmlFor="characters">Characters</label>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
