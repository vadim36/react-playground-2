import { SortOptions } from "../utils/enums"
import { useMemo } from "react"

export const useSortedPosts: useSortedPostsType = (posts, sortQuery) => {
  const sortedPosts:IPost[] = useMemo(():IPost[] => {
    if (sortQuery === SortOptions.default) return posts
    return [...posts].sort((a: IPost, b: IPost):number => {
      return (a[sortQuery as keyof typeof a] as string)
        .localeCompare(b[sortQuery as keyof typeof b] as string)
    })
  }, [sortQuery, posts])

  return sortedPosts
}

export function usePosts({posts, sortQuery, searchQuery}: usePostProps):IPost[] {
  const sortedPosts = useSortedPosts(posts, sortQuery)

  const sortedSearchedPosts = useMemo(():IPost[] => {
    return sortedPosts.filter((post: IPost):boolean => {
      return post.title.toLowerCase().includes(searchQuery.toLowerCase())
    }) 
  }, [searchQuery, sortedPosts])

  return sortedSearchedPosts
}