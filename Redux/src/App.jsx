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
        <button className='buttona' onClick={() => dispatch(decrement())}>-</button>
        <br />
        counter: {count}
        <br />
        <button className='buttona' onClick={() => dispatch(increment())}>+</button>
        <br />
        <button className='buttona' onClick={() => dispatch(multiply())}>*2</button>
        <br />
        <input type="number" value={amount} placeholder='Enter amount' onChange={(e) => setamount(e.target.value)} className='inputa' />
        <br />
        <button className='buttona' onClick={()=>{
          dispatch(incrementByAmount(amount));
        }}>Set </button>
      </div>
    </>
  )
}

export default App