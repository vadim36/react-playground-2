import { FC, useState, useEffect } from 'react'
import { PostList } from '../components/PostList'
import { PostForm } from '../components/PostForm'
import { PostFilter } from '../components/PostFilter'
import { SortOptions } from '../utils/enums'
import { Modal } from '../UI/Modal'
import { Button } from '../UI/Button'
import { usePosts } from '../hooks/usePosts'
import PostService from '../API/PostService'
import useFetching from '../hooks/useFetching'
import { getPagesCount } from '../utils/getPagesCount'
import { Pagination } from '../UI/Pagination'

const Posts:FC = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [filterQuery, setFilterQuery] = useState<IFilterQuery>({
    sortQuery: SortOptions.default,
    searchQuery: ''
  })
  const [formModalVisible, setFormModalVisible] = useState<boolean>(false)
  const [postsLimit, setPostsLimit] = useState<number>(10)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pagesCount, setPagesCount] = useState<number>(0)
  const [renderPosts, isLoading, fetchError] = useFetching<number[], Promise<void>>(
    async (limit, page) => {
      const response: IPostResponse = await PostService.getAll(limit, page)
      const postsCount: number = response.postsCount
      setPosts(response.posts)
      return setPagesCount(getPagesCount(postsCount, postsLimit))
    }
  )
  const postsConfig:usePostProps = {
    posts,
    sortQuery: filterQuery.sortQuery,
    searchQuery: filterQuery.searchQuery
  }
  const sortedSearchedPosts:IPost[] = usePosts(postsConfig)

  useEffect(() => {
    renderPosts(postsLimit, currentPage)
  }, [currentPage])

  function createPost(newPost: IPost):void {
    return setPosts([...posts, newPost])
  }

  function removePost(deletingPost: IPost):void {
    return setPosts(posts.filter((post: IPost) => post.id !== deletingPost.id))
  }

  function changePage(pageNumber: number):void {
    return setCurrentPage(pageNumber)
  }

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
      
      {fetchError &&
        <h1 className="heading">Возникла ошибка {fetchError}</h1>
      }

      {
        isLoading && !fetchError
          ? <h1 className="heading">Загрузка постов...</h1>
          : <PostList title={sortedSearchedPosts.length ? 'Посты' : 'Посты не найдены!'} 
            list={sortedSearchedPosts} remove={removePost}/>
      }

      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        changePage={changePage}  
      />
    </div>
  )
}

export default Posts