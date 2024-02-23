import { FC, useState } from 'react'

import { PostList } from './components/PostList'

const App:FC = () => {
  const [posts, setPosts] = useState<IPost[]>([
    {id: 1,  title: 'Title 1', body: 'Description'},
    {id: 2,  title: 'Title 2', body: 'Description'},
    {id: 3,  title: 'Title 3', body: 'Description'},
  ])
  
  return (
    <>
      <PostList title='Посты' list={posts}/>
    </>
  )
}

export default App