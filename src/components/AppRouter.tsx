import React, {FC, ReactNode, useContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router'
import { AuthContext } from '../context'

export const AppRouter:FC = () => {
  const {isAuth} = useContext(AuthContext)
  const routes = isAuth 
    ? [...privateRoutes]
    : [...publicRoutes]

  return (
    <Routes>
      {routes.map(({path, element}: Route):ReactNode => {
        return <Route 
            key={path}
            path={path} 
            element={React.createElement(element)}
          />
        }
      )}
    </Routes>
  )
}