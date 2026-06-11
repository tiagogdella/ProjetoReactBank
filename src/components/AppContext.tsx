import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    user: {name: string, email: string} | null,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
    setUser: (user: {name: string, email: string} | null) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [user, setUser ] = useState<{name: string, email: string} | null>(null)

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login, name, email } = JSON.parse(storage)
        setIsLoggedIn(login)
        setUser({name, email})
      }
    }, [])
  
    return (
      <AppContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
        { children }
      </AppContext.Provider>
    )
}
