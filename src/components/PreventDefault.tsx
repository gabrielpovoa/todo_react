import React, { FormEvent, useState } from 'react'

export const PreventDefault = () => {
    const [name,Setname] = useState<string>('');

    const handleSubmitForm = (e:FormEvent<HTMLFormElement>) => {
        alert(`Form Sent - ${name}`);
        e.preventDefault();
        Setname('');
    }

  return <form action="" onSubmit={handleSubmitForm}
    className='container flex flex-col items-start  gap-4 my-8'
  >
    <input type="text" value={name} onChange={(e) => Setname(e.target.value)} className=' bg-gray-600 p-2 text-white rounded outline-none'/>
    <input type="submit" value="Send" className=' bg-blue-600 p-2 text-white rounded cursor-pointer'/>
  </form>
}
