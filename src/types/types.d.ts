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

type fetchFunctionType = () => void

interface IPostResponse {
  posts: IPost[]
}

type PostServiceGetAllType = () => Promise<IPostResponse>