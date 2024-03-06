import {FC, useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AppRouter } from './components/AppRouter'
import { AuthContext } from './context'

const App:FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') setIsAuth(true) 
  }, [])

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