import {FC} from 'react'
import Posts from '../pages/Posts'
import { About } from '../pages/About'
import { Error } from '../pages/Error'
import { Route, Routes } from 'react-router-dom'
import { PostPage } from '../pages/PostPage'

export const AppRouter:FC = () => {
  return (
    <Routes>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts/:id' element={<PostPage/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  )
}