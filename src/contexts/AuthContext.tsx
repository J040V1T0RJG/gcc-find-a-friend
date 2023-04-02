import { api } from '@/libs/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

type SignInData = {
  email: string
  password: string
}

type OrgType = {
  token: string
  org: {
    id: string
    nome: string
    email: string
    address: string
    cep: string
    whatsappNumber: string
  }
}

type AuthContextType = {
  isAuthenticated: boolean
  org: OrgType | null
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [org, setOrg] = useState<OrgType | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@gcc-find-a-friend:authO-1.0.0',
    )

    if (storedStateAsJSON) {
      const storedStateAsObject: OrgType = JSON.parse(storedStateAsJSON)
      setOrg(storedStateAsObject)
      setIsAuthenticated(true)
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    try {
      const response = await api.post('/auth/sessions', { email, password })

      const stateJSON = JSON.stringify(response.data)
      localStorage.setItem('@gcc-find-a-friend:authO-1.0.0', stateJSON)
      setIsAuthenticated(true)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, org }}>
      {children}
    </AuthContext.Provider>
  )
}
