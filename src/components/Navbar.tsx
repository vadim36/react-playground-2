import {FC} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button'
import { Sizes } from '../utils/enums'

export const Navbar:FC = () => {
  return (
    <div className='bg-slate-700 sticky top-0 z-10'>
      <ul className='flex gap-2 p-2'>
        <li>
          <Button size={Sizes.large}>
            <Link to='/posts'>Посты</Link>
          </Button>
        </li>
        <li>
          <Button size={Sizes.large}>
            <Link to='/about'>О нас</Link>
          </Button>
        </li>
      </ul>
    </div>
  )
}
