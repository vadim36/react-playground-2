import {FC, MouseEvent} from 'react'
import { ButtonVariants, Sizes } from '../utils/enums'

interface ButtonProps {
  children: React.ReactNode,
  variant?: ButtonVariants,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | (() => void),
  className?: string
  size?: Sizes
} 

export const Button:FC<ButtonProps> = ({children, variant, className,...props}) => {
  const classes: string = `data-[variant=danger]:bg-rose-600 text-white 
    data-[variant=danger]:hover:bg-red-900 data-[variant=primary]:bg-sky-500 
    data-[variant=primary]:hover:bg-blue-700 p-2 rounded-lg relative 
    active:top-1 data-[size=lg]:text-4xl data-[size=md]:text-xl data-[size=sm]:text-base
    ${className ?? ''}`
 
  return (
    <button 
      data-variant={variant ?? 'primary'} 
      className={classes} 
      {...props}
      data-size={props.size ?? 'md'}
    >
      {children}
    </button>
  )
}