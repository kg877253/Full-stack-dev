import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "Learn React",
      desc: "Learn React from scratch",
    },
    {
      title: "Learn Vite",
      desc: "Learn Vite from scratch",
    }
  ])

  //we can create a component inside same file also and use in the main component like below but we can also create a separate file and use it in main component
  // const Todoslist = ({ todos }) => {
  //   return (<>
  //     <div>
  //       <h3 >{todos.title}</h3>
  //       <p>{todos.desc}</p>
  //     </div>
  //   </>)
  // }

  return (
    <>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        {todos.map(todos => {
          // return <Todoslist key={todos.title} todos={todos} />
          return <div key={todos.title} className="m-3 border border-1 border-purple-500">

            <h3 className="text-xl font-bold">{todos.title}</h3>
            <p className="text-lg">{todos.desc}</p>
          </div>
        })}

        {/* both are same but we use 2nd one in react more */}
        {showbtn ? <button>button true.</button> : <button>button false</button>}

        {/* {showbtn && <button>SHOWING button</button>} */}

        <button type="button" className="counter" onClick={() => setshowbtn(!showbtn)}>
          Toggle
        </button>
      </section>
      
    </>
  )
}

export default App
