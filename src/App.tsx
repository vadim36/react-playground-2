import {FC, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AppRouter } from './components/AppRouter'
import { AuthContext } from './context'

const App:FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={{
      isAuth, setIsAuth
    }}>
      <BrowserRouter>
        {isAuth && <Navbar/>}
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App