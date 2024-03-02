export default abstract class PostService {
  public static getAll: PostServiceGetAllType = async () => { 
    const request: RequestInfo = new Request(
      `https://jsonplaceholder.typicode.com/posts`
    )
    
    const posts:IPost[] = await fetch(request)
      .then((response: Response):Promise<IPost[]> => response.json())
      .then((response: IPost[]):IPost[] => {
        return response.map((post: IPost):IPost => {
          const {userId, ...postData}:IPost = post
          return postData
        })
      })
    
    return {
      posts: [...posts]
    }
  }
}