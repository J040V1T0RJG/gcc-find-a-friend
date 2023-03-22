import { Select, SelectCity, SelectState } from '@/components/Select'
import logo from '@/assets/icons/logo.svg'
import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles'
import { ChangeEvent, useContext } from 'react'
import { PetsContext } from '@/contexts/PetsContext'
import { ButtonSearch } from '../Button'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

export function Aside() {
  const { brazilianStates, cities, setSubFilter, fetchPets } =
    useContext(PetsContext)

  function handleChangeSearchFilters(event: ChangeEvent<HTMLFormElement>) {
    const { name, value } = event.target

    setSubFilter((state) => {
      return { ...state, [name]: value }
    })
    fetchPets()
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <SelectState name={''} options={brazilianStates} />
            <SelectCity name={''} options={cities} />
            <ButtonSearch />
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters onChange={handleChangeSearchFilters}>
          <Select name="age" label="Idade" options={ageOptions} />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
          />

          <Select name="size" label="Porte do animal" options={sizeOptions} />

          <Select
            name="independency"
            label="Nível de independência"
            options={independencyOptions}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
