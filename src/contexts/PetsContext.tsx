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

interface SubFilter {
  age?: 'cub' | 'adolescent' | 'elderly'
  energy?: 1 | 2 | 3 | 4 | 5
  independence?: 'low' | 'medium' | 'high'
  size?: 'small' | 'medium' | 'big'
  type?: 'dog' | 'cat' | 'all'
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
  type: string
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
  fetchPets: (querys: SubFilter) => Promise<void>
  setSubFilter: Dispatch<SetStateAction<SubFilter>>
  setLocation: Dispatch<SetStateAction<Location>>
}

export const PetsContext = createContext({} as PetsContextType)

export function PetsProvider({ children }: PetsProviderProps) {
  const [brazilianStates, setBrazilianStates] = useState<BrazilianState[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [pets, setPets] = useState<Pet[]>([])
  const [subFilter, setSubFilter] = useState<SubFilter>({})
  const [location, setLocation] = useState<Location>({
    brazilianState: null,
    city: null,
  })

  const fetchBrazilianStates = useCallback(async () => {
    try {
      const response = await api.get('/location/states')
      setBrazilianStates(response.data.states)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchBrazilianStates()
  }, [fetchBrazilianStates])

  const fetchCities = useCallback(async (UF: string) => {
    try {
      const response = await api.get(`/location/citys/${UF}`)
      setCities(response.data.citys)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const fetchPets = useCallback(
    async (querys: SubFilter) => {
      try {
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
      } catch (error) {
        console.log(error)
      }
    },
    [location.city],
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
        setSubFilter,
        setLocation,
      }}
    >
      {children}
    </PetsContext.Provider>
  )
}
