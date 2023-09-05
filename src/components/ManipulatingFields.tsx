import React, { useState } from 'react'

export const ManipulatingFields = () => {
    const [name,setName] = useState('');

  return (
    <div className='container flex flex-col items-start gap-3'>
        <input type="text" 
        className='outline-none rounded-sm p-1'
        placeholder='enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <p className='text-xs text-white font-thin'>Your name is: {name}</p>
    </div>
  )
}
