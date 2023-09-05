import React, { useState } from 'react'

export const ChangingStateOnTime = () => {
    const [count, setCount] = useState(0)

    const handleButton = () => {
        setCount(count + 2 );
        setCount(c => {
            return c + 2;
        })
    }

  return (
    <div className='container flex flex-col items-start gap-3'>
        <p className='text-xl text-white font-thin'>{count}</p>
        <button 
        onClick={handleButton}
        className='text-sm rounded bg-green-700 p-2 text-white outline-none'
        >+6</button>
    </div>
  )
}
