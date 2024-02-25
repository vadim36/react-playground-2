import { FC, useMemo, useState } from 'react'
import { PostList } from './components/PostList'
import { PostForm } from './components/PostForm'
import { PostFilter } from './components/PostFilter'
import { SortOptions } from './utils/enums'

const App:FC = () => {
  const [posts, setPosts] = useState<IPost[]>([
    {id: 1,  title: 'Я', body: 'Ф'},
    {id: 2,  title: 'У', body: 'X'},
    {id: 3,  title: 'В', body: 'Ц'},
  ])

  const [filterQuery, setFilterQuery] = useState<IFilterQuery>({
    sortQuery: SortOptions.default,
    searchQuery: ''
  }) 

  function createPost(newPost: IPost):void {
    return setPosts([...posts, newPost])
  }

  function removePost(deletingPost: IPost):void {
    return setPosts(posts.filter((post: IPost) => post.id !== deletingPost.id))
  }

  function sortPosts():IPost[] {
    const sortQuery: SortOptions.title | SortOptions.body = filterQuery.sortQuery
    
    return [...posts].sort((a: IPost, b: IPost):number => {
      return a[sortQuery].localeCompare(b[sortQuery])
    })
  }

  const sortedPosts = useMemo(():IPost[] => {
    if (filterQuery.sortQuery === SortOptions.default) return posts
    return sortPosts()
  }, [filterQuery.sortQuery, posts])

  const sortedSearchedPosts = useMemo(():IPost[] => {
    return sortedPosts.filter((post: IPost):boolean => {
      return post.title.toLowerCase().includes(
        filterQuery.searchQuery.toLowerCase()
      )
    }) 
  }, [filterQuery.searchQuery, posts])

  return (
    <div className='p-2'>
      <PostForm create={createPost}/>
      <PostFilter filter={filterQuery} setFilter={setFilterQuery}/>
      <PostList title={sortedSearchedPosts.length ? 'Посты' : 'Посты не найдены!'} 
        list={sortedSearchedPosts} remove={removePost}/>
    </div>
  )
}

export default App