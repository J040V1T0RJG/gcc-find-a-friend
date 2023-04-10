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
  org: OrgType | null
  signIn: (data: SignInData) => Promise<void>
  userIsAuthenticated: () => Promise<boolean>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [org, setOrg] = useState<OrgType | null>(null)

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@gcc-find-a-friend:authO-1.0.0',
    )
    if (storedStateAsJSON) {
      const storedStateAsObject: OrgType = JSON.parse(storedStateAsJSON)
      setOrg(storedStateAsObject)
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    try {
      const response = await api.post('/auth/sessions', { email, password })

      const stateJSON = JSON.stringify(response.data)
      localStorage.setItem('@gcc-find-a-friend:authO-1.0.0', stateJSON)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async function userIsAuthenticated() {
    const storedStateAsJSON = localStorage.getItem(
      '@gcc-find-a-friend:authO-1.0.0',
    )

    if (!storedStateAsJSON) {
      return false
    }

    const storedStateAsObject: OrgType = JSON.parse(storedStateAsJSON)
    const config = {
      headers: {
        Authorization: `Bearer ${storedStateAsObject.token}`,
      },
    }

    try {
      await api.patch('/auth/refresh-token', {}, config)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        userIsAuthenticated,
        org,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
