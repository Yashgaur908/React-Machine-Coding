import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}> Increment </button>
                <div>{count}</div>
                <button onClick={() => count > 0 && setCount(count - 1)}>Decreament</button>
                {/* <button onClick={() => setCount(count - 1)} disabled={count <= 0 ? true : false}> Decrement </button> */}
            </div>
        </>
    )
}

export default Counter