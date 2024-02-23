import {FC} from 'react'

import { PostItem } from './PostItem'

interface PostListProps {
  title: string,
  list: IPost[],
  remove: (deletingPost: IPost) => void
}

export const PostList: FC<PostListProps> = ({title, list, remove}) => {
  return (
    <section>
      <h2 className='font-mono text-6xl text-center py-2'>{title}</h2>
      <ul className='flex flex-col items-center'>
        {list.map((post: IPost, key: number) => {
          return <PostItem key={post.id} number={key + 1} postData={post} remove={remove}/>
        })}
      </ul>
    </section>
  )
}