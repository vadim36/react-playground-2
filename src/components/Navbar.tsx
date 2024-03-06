import {FC, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button'
import { Sizes } from '../utils/enums'
import { AuthContext } from '../context'

export const Navbar:FC = () => {
  const {setIsAuth} = useContext(AuthContext)
  
  function logout():void {
    setIsAuth(false)
    localStorage.setItem('auth', 'false')
  }

  return (
    <header className='bg-slate-700 sticky top-0 z-10 flex items-center 
      justify-between px-2'
    >
      <nav>
        <ul className='flex gap-2 p-2'>
          <li>
            <Link to='/posts'>
              <Button size={Sizes.large}>
                Посты
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <Button size={Sizes.large}>
                О нас
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <Button size={Sizes.large} onClick={logout}>Выйти</Button>
    </header>
  )
}
