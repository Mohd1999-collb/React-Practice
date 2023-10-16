import React, { useState } from 'react'

const Inc_Dec = () => {

    const [count, setCount] = useState(0);
    return (
        <div><h1>Quantity : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={()=> count > 0 ? setCount(count-1) : 0}>-</button></div>
    )
}

export default Inc_Dec