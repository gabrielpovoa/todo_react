import React from 'react'

interface Props {
    label: string
    onClick: () => void;
}

export const CustomButton = ({ label, onClick }: Props) => {
  return (
    <button 
    onClick={onClick}
    className='bg-blue-800 p-3 rounded text-white mr-8'>
        {label}
    </button>
  )
}