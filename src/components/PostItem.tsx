import {FC} from 'react'

import { Button } from '../UI/Button'
import { ButtonVariants } from '../utils/enums'

interface PostItemProps {
  postData: IPost,
  number: number,
  remove: (deletingPost: IPost) => void
}

export const PostItem:FC<PostItemProps> = ({postData, number, remove}) => {
  return (
    <li className="border-4 border-sky-500 w-4/5 p-2">
      <div>
        <strong className="text-3xl font-mono" >{number}. {postData.title}</strong>
        <p className="text-lg">{postData.body}</p>
      </div>
      <div aria-controls="*" className='flex gap-1'>
        <Button variant={ButtonVariants.primary}>
          Прокомментировать
        </Button>
        <Button variant={ButtonVariants.danger} onClick={():void => remove(postData)}>
          Удалить
        </Button>
      </div>
    </li>
  )
}