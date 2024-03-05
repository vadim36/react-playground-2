import { createContext } from "react"

export const AuthContext = createContext<TAuthContext>({
  isAuth: false
})