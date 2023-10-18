import React, { useState } from 'react'
import CounterContext from './CounterContext'

const CounterProvider = (props) => {

    const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{
        count: count,
        setCount : setCount
    }}>
        {props.children}
    </CounterContext.Provider>
  )
}

export default CounterProvider