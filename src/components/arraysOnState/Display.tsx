import { List } from '@/types/List'
import React, { FormEvent, useState } from 'react'


export const Display = () => {
    const [itemInput, setItemInput] = useState('');
    const [list, setList] = useState<List[]>([]);

    const handleAddButton = (e: FormEvent) => {
        //Adicionar o itemInput no array de objetos do setList()
        
        e.preventDefault();
        let createId = new Date().getMilliseconds()**2;
        let newId = parseInt(createId.toFixed(0));
        
        if(itemInput.trim() !== '') {

            setList([
                ...list,
                { id:newId, label:itemInput, checked:false }
            ])
            setItemInput('');
        } else {
            alert('Please enter a task before clicking on the button 🪶')
        }
        
    }

    const handleDeleteItem = (id: number) => {
        console.log(id)
        setList(
            list.filter(item => item.id !== id)
        );
    }

    const toggleItem  = (id:number) => {
        setList((prevList) =>  prevList.map((item) =>  item.id === id ? { ...item, checked: !item.checked } : item ) );
    }



  return (
    <div className='container'>
        <h1 className='text-4xl text-blue-600 my-3'>Task List</h1>
        <div className='flex items-start justify-start flex-wrap gap-8 p-3'>
        
        <form action="" method="get"
        className='flex flex-1 flex-col justify-start gap-4'
        >
            <input 
            type="text" 
            placeholder='What do you want to do ?'
            style={{backgroundColor: '#E8F1F2'}}
            className='outline-none rounded-sm p-2 text-black capitalize'
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)}
            />
            <input 
            type="submit" 
            value="Add"
            style={{backgroundColor:"#A09BE7"}} 
            className='p-2 text-white rounded cursor-pointer '
            
            onClick={handleAddButton}
            />
        </form>

        <div className='flex flex-1 items-start justify-start '>
            <ul>
                {list.map((item,index) => (
                    <li 
                    key={item.id}
                    className='text-sm font-bold p-1 list-disc uppercase'>
                    <input 
                    onClick={() => toggleItem(item.id)}
                    type="checkbox" 
                    checked={item.checked} 
                    className='mr-2 w-4 h-4 '
                    />
                        {item.label} - {item.id}
                    <button 
                        title='click to delete' 
                        className='cursor-pointer hover:underline'
                        onClick={() => handleDeleteItem(item.id)}
                        > 
                        [ delete ] 
                    </button>
                </li>
                ))}
            </ul>
        </div>
        </div>
    </div>
  )
}
