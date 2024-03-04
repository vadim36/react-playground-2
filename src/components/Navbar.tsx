import {FC} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button'
import { Sizes } from '../utils/enums'

export const Navbar:FC = () => {
  return (
    <div className='bg-slate-700 sticky top-0 z-10'>
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
    </div>
  )
}
