import React, { useContext } from 'react'
import CounterContext from './CounterContext'

const Counter = () => {

    const {count, setCount} = useContext(CounterContext);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Increament</button>
        <br />
        <br />
        <button onClick={()=> setCount(count-1)}>Decreament</button>
    </div>
  )
}

export default Counter