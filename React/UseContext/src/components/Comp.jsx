import React,{useContext} from 'react'
import { countcon } from '../Context/context'

const Comp = () => {
  const value = useContext(countcon)
  return (
    <div>
        {value.count}
    </div>
  )
}

export default Comp
