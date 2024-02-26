import {FC, MouseEvent, useEffect} from 'react'
import { ButtonVariants } from '../utils/enums'

interface ButtonProps {
  children: React.ReactNode,
  variant?: ButtonVariants,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | (() => void),
  className?: string
} 

export const Button:FC<ButtonProps> = ({children, variant, className,...props}) => {
  const classes: string = `data-[variant=danger]:bg-rose-600 text-white 
    data-[variant=danger]:hover:bg-red-900 data-[variant=primary]:bg-sky-500 
    data-[variant=primary]:hover:bg-blue-700 text-xl p-2 rounded-lg relative active:top-1 
    ${className ?? ''}`
 
  return (
    <button data-variant={variant ?? 'primary'} className={classes} {...props}>
      {children}
    </button>
  )
}