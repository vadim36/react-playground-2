import {FC, MouseEvent} from 'react'
import { ButtonVariants } from '../utils/enums'

interface ButtonProps {
  children: React.ReactNode,
  variant: ButtonVariants,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | (() => void)
} 

export const Button:FC<ButtonProps> = ({children, variant, ...props}) => {
  return (
    <button data-variant={variant} className="data-[variant=danger]:bg-rose-600 text-white 
    data-[variant=danger]:hover:bg-red-900 data-[variant=primary]:bg-sky-500 
    data-[variant=primary]:hover:bg-blue-700 text-xl p-2 rounded-lg relative 
    active:top-1" {...props}>
      {children}
    </button>
  )
}