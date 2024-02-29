export default abstract class PostService {
  public static async getAll():Promise<any> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response: Response):Promise<IPost[]> => response.json())
      .then((response: IPost[]):IPost[] => {
        return response.map((post: IPost):IPost => {
          const {userId, ...postData} = post
          return postData
        })
      })
  }
}