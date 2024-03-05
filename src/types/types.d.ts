interface IPost {
  id: number,
  title: string,
  body: string,
  userId?: number
}
interface SelectOption {
  value: SortOptions,
  body: string
}
interface IFilterQuery {
  sortQuery: SortOptions,
  searchQuery: string
}
interface usePostProps {
  posts: IPost[],
  sortQuery: SortOptions,
  searchQuery: string
} 
type useSortedPostsType = (posts: IPost[], sortQuery: SortOptions) => IPost[]
type useFetchingType = [Function, boolean, string?]
interface IPostResponse {
  posts: IPost[],
  postsCount: number
}
interface IComment {
  postId?: number,
  id: number,
  name: string,
  email: string,
  body: string
}
type PostServiceGetAllType = (limit:number = 10, page:number = 1) => Promise<IPostResponse>
type PostServiceGetByIdType = (id: number) => Promise<IPost> 
type PostServiceGetPosts = (id: number) => Promise<IComment[]>
type getPagesCountType = (postsCount:number, limit:number) => number
interface Route {
  path: Routes,
  element: ReactNode
}
interface TAuthContext {
  isAuth: boolean,
  setIsAuth?: Dispatch<SetStateAction<boolean>>
}