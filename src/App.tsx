import { FC, useState } from 'react'

import { PostList } from './components/PostList'
import { PostForm } from './components/PostForm'

const App:FC = () => {
  const [posts, setPosts] = useState<IPost[]>([
    {id: 1,  title: 'Title 1', body: 'Description'},
    {id: 2,  title: 'Title 2', body: 'Description'},
    {id: 3,  title: 'Title 3', body: 'Description'},
  ])

  function createPost(newPost: IPost):void {
    return setPosts([...posts, newPost])
  }

  function removePost(deletingPost: IPost):void {
    return setPosts(posts.filter((post: IPost) => post.id !== deletingPost.id))
  }
  
  return (
    <>
      <PostForm create={createPost}/>
      <PostList title={posts.length ? 'Посты' : 'Посты не найдены'} 
        list={posts} remove={removePost}/>
    </>
  )
}

export default App