import {FC, InputHTMLAttributes} from 'react'


export const Input:FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input className='outline outline-2 outline-sky-500 text-2xl rounded p-1' 
      {...props}/>
  )
}