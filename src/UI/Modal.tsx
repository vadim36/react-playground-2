import { Dispatch, FC, ReactNode, SetStateAction, MouseEvent, KeyboardEvent} from 'react'
import { ButtonVariants } from '../utils/enums'
import { Button } from './Button'

interface ModalProps {
  children: ReactNode,
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>
}

export const Modal:FC<ModalProps> = ({children, visible, setVisible}) => {
  //if (visible) {
  //  window.addEventListener('keydown', (event: KeyboardEvent):void => {
  //    console.log(123);
  //    if (event.key === 'Escape') return setVisible((prev: boolean): boolean => !prev)
  //  }, {once: true})
  //}
  
  return (
    <div aria-label='Backdrop' 
      className='absolute bg-black/50 inset-0 flex items-center justify-center z-20
      aria-hidden:hidden' aria-hidden={!visible}
      onClick={():void => setVisible((prev:boolean):boolean => !prev)}
    >
      <div aria-label='Modal' className='border-2 rounded-lg bg-slate-700 p-3'
        onClick={(event: MouseEvent<HTMLDivElement>):void => event.stopPropagation()}  
      >
        {children}
        <Button variant={ButtonVariants.danger} 
          onClick={():void => setVisible((prev: boolean):boolean => !prev)}
        >
          Закрыть
        </Button>
      </div>
    </div>
  )
}