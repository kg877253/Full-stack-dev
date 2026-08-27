import './App.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply,incrementByAmount } from './redux/counter/counters'
import Navbar from './components/Navbar'

function App() {
  const [amount, setamount] = useState();
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <><br />
      <Navbar />
      <br /><br />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        counter: {count}
        <br />
        <button onClick={() => dispatch(increment())}>+</button>
        <br />
        <button onClick={() => dispatch(multiply())}>*2</button>
        <br />
        <input type="number" value={amount} placeholder='Enter amount' onChange={(e) => setamount(e.target.value)} className='inputa' />
        <br />
        <button onClick={()=>{
          dispatch(incrementByAmount(amount));
        }}>Set </button>
      </div>
    </>
  )
}

export default App