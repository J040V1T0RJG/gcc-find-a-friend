import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../libs/axios'

interface PetsProviderProps {
  children: ReactNode
}

interface QuerysProps {
  age?: 'cub' | 'adolescent' | 'elderly'
  energy?: 1 | 2 | 3 | 4 | 5
  independence?: 'low' | 'medium' | 'high'
  size?: 'small' | 'medium' | 'big'
  type?: string
}

interface Pet {
  id: string
  name: string
  description: string
  city: string
  age: string
  energy: number
  size: string
  independence: string
  type: 'dog' | 'cat'
  photo: string
  orgId: string
  photo_url: string
}

export interface BrazilianState {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

export interface City {
  name: string
  code: string
}

export interface Location {
  brazilianState: string | null
  city: string | null
}

interface PetsContextType {
  pets: Pet[]
  brazilianStates: BrazilianState[]
  cities: City[]
  location: Location
  fetchCities: (UF: string) => Promise<void>
  fetchPets: (querys: QuerysProps) => Promise<void>
  setLocation: Dispatch<SetStateAction<Location>>
}

export const PetsContext = createContext({} as PetsContextType)

export function PetsProvider({ children }: PetsProviderProps) {
  const [brazilianStates, setBrazilianStates] = useState<BrazilianState[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [pets, setPets] = useState<Pet[]>([])
  const [location, setLocation] = useState<Location>({
    brazilianState: null,
    city: null,
  })

  const fetchBrazilianStates = useCallback(async () => {
    const response = await api.get('/location/states')
    setBrazilianStates(response.data.states)
  }, [])

  useEffect(() => {
    fetchBrazilianStates()
  }, [fetchBrazilianStates])

  const fetchCities = useCallback(async (UF: string) => {
    const response = await api.get(`/location/citys/${UF}`)
    setCities(response.data.citys)
  }, [])

  const fetchPets = useCallback(
    async (querys: QuerysProps) => {
      const response = await api.get(`/pets/${location.city}`, {
        params: {
          age: querys?.age,
          energy: querys?.energy,
          independence: querys?.independence,
          size: querys?.size,
          type: querys?.type,
        },
      })
      setPets(response.data.pets)
    },
    [location],
  )

  return (
    <PetsContext.Provider
      value={{
        pets,
        brazilianStates,
        cities,
        location,
        fetchCities,
        fetchPets,
        setLocation,
      }}
    >
      {children}
    </PetsContext.Provider>
  )
}
