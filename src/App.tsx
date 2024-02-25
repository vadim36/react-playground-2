import { FC, useState } from 'react'
import { PostList } from './components/PostList'
import { PostForm } from './components/PostForm'

const App:FC = () => {
  const [posts, setPosts] = useState<IPost[]>([
    {id: 1,  title: 'А', body: 'Ф'},
    {id: 2,  title: 'Б', body: 'X'},
    {id: 3,  title: 'В', body: 'Ц'},
  ])

  function createPost(newPost: IPost):void {
    return setPosts([...posts, newPost])
  }

  function removePost(deletingPost: IPost):void {
    return setPosts(posts.filter((post: IPost) => post.id !== deletingPost.id))
  }

  return (
    <div className='p-2'>
      <PostForm create={createPost}/>
      <PostList title={posts.length ? 'Посты' : 'Посты не найдены!'} 
        list={posts} remove={removePost}/>
    </div>
  )
}

export default App