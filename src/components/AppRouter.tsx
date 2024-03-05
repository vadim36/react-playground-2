import React, {FC, ReactNode} from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../router'

export const AppRouter:FC = () => {
  return (
    <Routes>
      {routes.map(({path, element}: Route):ReactNode => {
        return <Route path={path} element={React.createElement(element)}/>
      })}
    </Routes>
  )
}