import {FC} from 'react'

import { PostItem } from './PostItem'

interface PostListProps {
  title: string,
  list: IPost[]
}

export const PostList: FC<PostListProps> = ({title, list}) => {
  return (
    <section>
      <h2 className='font-mono text-6xl text-center py-2'>{title}</h2>
      <ul className='flex flex-col items-center'>
        {list.map((post: IPost) => {
          return <PostItem key={post.id} postData={post}/>
        })}
      </ul>
    </section>
  )
}