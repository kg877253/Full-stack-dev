import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='div1'>
        <h2>The count is {count}</h2>
        <button onClick={ () => {setCount(count+2)}}> Update count </button>
      </div>
    </>
  )
}

export default App
