import Posts from '../pages/Posts'
import { About } from '../pages/About'
import { PostPage } from '../pages/PostPage'
import { Error } from '../pages/Error'

export const routes: Route[] = [
  {path: '/posts', element: Posts}, 
  {path: '/about', element: About},
  {path: '/posts/:id', element: PostPage},
  {path: '*', element: Error}
]