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
type PostServiceGetAllType = (limit:number = 10, page:number = 1) => Promise<IPostResponse>
type PostServiceGetByIdType = (id: number) => Promise<IPost> 
type getPagesCountType = (postsCount:number, limit:number) => number