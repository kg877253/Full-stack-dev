import { useState, useEffect } from 'react'
import './App.css'
import Navbarr from './components/Navbarr'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, settodo] = useState('')
  const [alltodos, setalltodos] = useState(() => {
    let todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
  })
  const [finished, setfinished] = useState(false)
  
  const savetoLS = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const handleadd = () => {
    if (todo === '') return
    const newtodos = [...alltodos, { id: uuidv4(), todo, iscompleted: false }]
    setalltodos(newtodos)
    settodo('')
    savetoLS(newtodos)
  }

  const handleedit = (e, id) => {
    let t = alltodos.filter((item) => item.id === id)
    settodo(t[0].todo)
    let newtodos = alltodos.filter((item) => item.id !== id)
    setalltodos(newtodos)
    savetoLS(newtodos)
  }

  const handledelete = (e, id) => {
    if (confirm("Are you sure you want to delete this todo?") === false) return
    let newtodos = alltodos.filter((item) => item.id !== id)
    setalltodos(newtodos)
    savetoLS(newtodos)
  }

  const handlechange = (e) => {
    settodo(e.target.value)
  }

  const handlecheckbox = (e, id) => {
    let newtodos = [...alltodos]
    let index = newtodos.findIndex((item) => item.id === id)
    newtodos[index].iscompleted = !newtodos[index].iscompleted
    setalltodos(newtodos)
    savetoLS(newtodos)
  }

  const handlefinished = (e) => {
    setfinished(!finished)
  }

  return (
    <>
      <Navbarr />

      <main className='m-2 mt-5 bg-violet-300 mx-auto w-[60%] h-[20vh] rounded-2xl p-5 '>
        <div className="todohead font-bold text-4xl text-center mb-5 underline decoration-2 decoration-indigo-400">
          K-TODO APP
        </div>
        <div className="addtodo p-2 flex justify-center gap-8">
          <input onChange={handlechange} value={todo} className='rounded-3xl p-2 bg-amber-50 pr-20' type="text" placeholder="Add a new todo..." />
          <button onClick={handleadd} className='bg-indigo-200 rounded-2xl text-xl px-4 py-0.5 cursor-pointer' >ADD</button>
        </div>
        <input type="checkbox" checked={finished} onChange={handlefinished} /> Show Finished
      </main>


      <div className="containtodo bg-pink-300 w-[60%] mx-auto mt-3 rounded-2xl pt-5 h-[63vh] overflow-auto">
        {alltodos.map((item) => {
          if (finished && !item.iscompleted) return null
          return (
            <div name={item.todo} key={item.id} className="showtodos p-4 flex flex-col gap-4 m-4 w-[95%] bg-violet-500 rounded-2xl mx-auto ">

              <div name={item.todo} className="listedtodo flex justify-between items-center">
                <div className='flex gap-3'>

                  <input onChange={(e) => handlecheckbox(e, item.id)} type="checkbox" name="" id="" checked={item.iscompleted} />
                  <div className={item.iscompleted ? 'line-through' : ' '} >{item.todo}</div>
                </div>
                <div className="buttons flex gap-4 items-center">
                  <button onClick={(e) => handleedit(e, item.id)} className='bg-blue-300 rounded-2xl text-[15px] px-3 py-0.5 cursor-pointer'>EDIT</button>
                  <button onClick={(e) => handledelete(e, item.id)} className='bg-red-400 rounded-2xl text-[15px] px-3 py-0.5 cursor-pointer '>DELETE</button>
                </div>
              </div>

            </div>)

        })}

      </div>

    </>
  )
}

export default App