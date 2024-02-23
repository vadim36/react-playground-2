import {FC} from 'react'

interface PostItemProps {
  postData: IPost
}

export const PostItem:FC<PostItemProps> = ({postData}) => {
  return (
    <li className="border-4 border-sky-500 w-4/5 p-2">
      <div>
        <strong className="text-3xl font-mono" >{postData.id}. {postData.title}</strong>
        <p className="text-lg">{postData.body}</p>
      </div>
      <div aria-controls="*" className='flex gap-1'>
        <button className='bg-rose-600 text-white hover:bg-red-900 text-xl 
        p-2 rounded-lg relative active:top-1'>
          Удалить
        </button>
        <button className='bg-sky-500 text-white hover:bg-blue-700 text-xl 
        p-2 rounded-lg relative active:top-1'>
          Прокомментировать
        </button>
      </div>
    </li>
  )
}