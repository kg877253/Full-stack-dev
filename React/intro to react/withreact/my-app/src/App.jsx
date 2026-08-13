import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [value, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Navbar logotext="My 6-7th App" />
      <h1>
        {value}
      </h1>
      <button onClick={()=>{
        setCount(value + 1)
      }}>clickme</button>
      <Footer property="Some property value" />
    </div>
    </>
  )
}

export default App
