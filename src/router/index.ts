import Posts from '../pages/Posts'
import { About } from '../pages/About'
import { PostPage } from '../pages/PostPage'
import { Login } from '../pages/Login'

export const privateRoutes: Route[] = [
  {path: '/posts', element: Posts}, 
  {path: '/about', element: About},
  {path: '/posts/:id', element: PostPage},
  {path: '*', element: Posts}
]

export const publicRoutes: Route[] = [
  {path: '/login', element: Login},
  {path: '*', element: Login}
]