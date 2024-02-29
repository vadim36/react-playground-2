import { FC, useState, useEffect } from 'react'
import { PostList } from './components/PostList'
import { PostForm } from './components/PostForm'
import { PostFilter } from './components/PostFilter'
import { SortOptions } from './utils/enums'
import { Modal } from './UI/Modal'
import { Button } from './UI/Button'
import { usePosts } from './hooks/usePosts'
import PostService from './API/PostService'

const App:FC = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [filterQuery, setFilterQuery] = useState<IFilterQuery>({
    sortQuery: SortOptions.default,
    searchQuery: ''
  })
  const [formModalVisible, setFormModalVisible] = useState<boolean>(false)
  //const [isPostLoading, setIsPostLoading] = useState<boolean>(false)

  function createPost(newPost: IPost):void {
    return setPosts([...posts, newPost])
  }

  function removePost(deletingPost: IPost):void {
    return setPosts(posts.filter((post: IPost) => post.id !== deletingPost.id))
  }

  async function fetchPosts():Promise<void> {
    //setIsPostLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    //return setIsPostLoading(false)
  }

  const postsConfig:usePostProps = {
    posts,
    sortQuery: filterQuery.sortQuery,
    searchQuery: filterQuery.searchQuery
  }

  const sortedSearchedPosts = usePosts(postsConfig)

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className='p-2'>
      <Button onClick={():void => {
        return setFormModalVisible((prev:boolean):boolean => !prev)
      }} className='mb-3'>
        Создать пост
      </Button>

      <Modal visible={formModalVisible} setVisible={setFormModalVisible}>
        <PostForm create={createPost}/>
      </Modal>
      
      <PostFilter filter={filterQuery} setFilter={setFilterQuery}/>
      
      <PostList title={sortedSearchedPosts.length ? 'Посты' : 'Посты не найдены!'} 
        list={sortedSearchedPosts} remove={removePost}/>
    </div>
  )
}

export default App