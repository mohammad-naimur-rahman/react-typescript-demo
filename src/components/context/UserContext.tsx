import { ReactNode, useState } from 'react'
import { createContext } from 'vm'

type AuthUser = {
  name: string
  email: string
}

type UserContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
