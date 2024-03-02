export default abstract class PostService {
  public static getAll: PostServiceGetAllType = async (limit = 10, page = 1) => { 
    const request: RequestInfo = new Request(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
    let postsCount:number = 0

    const posts:IPost[] = await fetch(request)
      .then((response: Response):Promise<IPost[]> => {
        postsCount = Number(response.headers.get('x-total-count'))
        return response.json()
      })
      .then((response: IPost[]):IPost[] => {
        return response.map((post: IPost):IPost => {
          const {userId, ...postData}:IPost = post
          return postData
        })
      })
    
    return {
      posts: [...posts],
      postsCount
    }
  }
}