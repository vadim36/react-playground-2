import {FC} from 'react'
import { Button } from '../UI/Button'
import { ButtonVariants } from '../utils/enums'
import {Link} from 'react-router-dom'

interface PostItemProps {
  postData: IPost,
  remove: (deletingPost: IPost) => void,
}

export const PostItem:FC<PostItemProps> = ((props) => {
  return (
    <li className="border-4 border-sky-500 w-4/5 p-2">
      <div>
        <strong className="text-3xl font-mono capitalize">
          {props.postData.id}. {props.postData.title}
        </strong>
        <p className="text-lg">{props.postData.body}</p>
      </div>
      <div aria-controls="*" className='flex gap-1'>
          <Link to={`/posts/${props.postData.id}`}>
            <Button>
              Открыть
            </Button>
          </Link>
        <Button variant={ButtonVariants.danger} onClick={():void => {
            return props.remove(props.postData)
          }}
        > Удалить </Button>
      </div>
    </li>
  )
})