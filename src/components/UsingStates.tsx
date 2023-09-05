import React, { ChangeEvent, useState } from 'react'



export const UsingStates = () => {
    const [showArea,setShowArea] = useState<boolean>(false);
    const handleClickButton = () => {
        setShowArea(!showArea)
    }

  return <>
    <p className='text-white my-3'>{}</p>
    <button 
    onClick={handleClickButton}
    className='bg-blue-600 rounded text-white p-2'>
        { showArea == true ? 'Close Secret Area' : 'Show Secret Area' }
    </button>
    {showArea &&
    <div
    className='text-white font-bold bg-green-800 my-8 p-4 rounded shadow-sm shadow-gray-400 flex flex-col items-center justify-center gap-3 '>
        Secret Area
        <span className='text-xl'>🔒🔒🔒</span>
    </div>
    }
</>
}
