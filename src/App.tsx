import {FC} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Posts from './pages/Posts'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Error } from './pages/Error'

const App:FC = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App