import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("kartik")
  const [form, setform] = useState({
    name: '',
    phone: ''
  })

  function handleclick() {
    alert('Hello World')
  }
  function handlechange(e) {
    setform({...form,[e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <button onClick={handleclick}>Click me</button>
      <input type="text" name='name' value={form.name} onChange={handlechange} />
      
      <input type="text" name='phone' value={form.phone} onChange={handlechange} />
    </>
  )
}

export default App
