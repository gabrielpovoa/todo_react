import { Person } from '@/types/Person'
import React, { useState } from 'react'

export const UpdatingObjectsOnState = () => {
    const [fullName, setFullName] = useState<Person>({name: '', lastName:''})
    
    const handleClearName = () => {
        setFullName({
            name: '',
            lastName: ''
        })
    }

  return <>
    <div className='contianer flex gap-8 items-start '>
        <form action=""  className='flex flex-col gap-3 mb-2 items-start justify-start'>
            
            <input 
            type="text" 
            style={{backgroundColor: '#074F57'}}
            placeholder='Name' 
            className='outline-none rounded-sm p-1 text-white capitalize'
            value={fullName.name}
            onChange={(e) => setFullName({ ...fullName, name:e.target.value })}
            />
            <input 
            type="text" 
            style={{backgroundColor: '#074F57'}}
            placeholder='lastName' 
            className='outline-none rounded-sm p-1 text-white capitalize'
            value ={fullName.lastName}
            onChange={(e) => setFullName({...fullName,lastName:e.target.value})}

            />
            

        </form>
        <div
        className='container text-white font-thin flex flex-col gap-2 flex-start items' >
            <p className='capitalize'>My name is: {fullName.name} {fullName.lastName}</p>
            <button
            style={{background:'#7E2E84'}}
            className='p-2 rounded-sms'
            onClick={handleClearName}>
                Clear Name
            </button>
        </div>
    </div>
    </>
}
