import { useState, useMemo } from 'react'
import './App.css'

const nums = new Array(3_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 2_000_000
    }
})

function App() {
    const [count, setCount] = useState(0)
    const [number, setnumber] = useState(nums)

    // const magical = number.find(item=>item.isMagical===true) // Expensive Computation
    const magical = useMemo(() => number.find(item => item.isMagical === true), [number])

    return (
        <>
            <div>
                <span>Magical number is {magical.index}</span>
                <a href="https://vitejs.dev" target="_blank">Vite</a>
                <a href="https://react.dev" target="_blank">React</a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => {
                    setCount((count) => count + 1);
                    if (count == 10) {
                        setnumber(new Array(2_000_000).fill(0).map((_, i) => {
                            return {
                                index: i,
                                isMagical: i === 1_000_000
                            }
                        }))
                    }
                }}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App