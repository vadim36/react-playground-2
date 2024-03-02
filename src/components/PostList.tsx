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
      <h2 className='heading'>{title}</h2>
        <ul className='flex flex-col items-center gap-2'>
          {list.map((post: IPost) => {
            return <PostItem key={post.id} postData={post} 
              remove={remove} />
          })}
        </ul>
    </section>
  )
}