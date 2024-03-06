import {FC, FormEvent, useContext} from 'react'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import { AuthContext } from '../context'

export const Login:FC = () => {
  const {setIsAuth} = useContext(AuthContext)

  function submitHandler(event: FormEvent<HTMLFormElement>):void {
    event.preventDefault()
    setIsAuth(true)
    return localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h2 className='heading'>Регистрация</h2>
      <form className='flex flex-col items-center gap-2' onSubmit={submitHandler}>
        <Input placeholder='Введите имя...'/>
        <Input placeholder='Введите пароль...'/>
        <Button>Зарегистрироваться</Button>
      </form>
    </div>
  )
}
