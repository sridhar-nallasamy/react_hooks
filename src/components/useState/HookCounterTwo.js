import React, { useState } from 'react'

/*
* prevCount function "setCount((prevCount) => prevCount + 1)" instead of normal "setCount(count + 1)"
*/

function HookCounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const increment5 = () => {
        for(let i=0;i<5;i++)
        {
            setCount((prevCount) => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
            <button onClick={increment5}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
