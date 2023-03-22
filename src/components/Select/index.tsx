import chevronImage from '@/assets/icons/chevron-bottom.svg'
import { BrazilianState, City, PetsContext } from '@/contexts/PetsContext'
import { ChangeEvent, ComponentProps, useContext } from 'react'
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
  FilterWrapperState,
  FilterInputState,
  FilterWrapperCity,
  FilterInputCity,
} from './styles'

type SelectProps = ComponentProps<typeof FilterInput> & {
  label: string
  name: string
  options: {
    value: string | number
    label: string
  }[]
}

export function Select({ label, name, options }: SelectProps) {
  return (
    <Filter>
      <FilterLabel htmlFor={name}>{label}</FilterLabel>
      <FilterWrapper>
        <FilterInput name={name} id={name}>
          <FilterInputOption value="" disabled selected>
            Selecione
          </FilterInputOption>
          {options.map((option) => {
            return (
              <FilterInputOption key={option.value} value={option.value}>
                {option.label}
              </FilterInputOption>
            )
          })}
        </FilterInput>
        <img src={chevronImage} alt="" />
      </FilterWrapper>
    </Filter>
  )
}

export function SelectState({
  name,
  options,
}: {
  name: string
  options: BrazilianState[]
}) {
  const { fetchCities, setLocation } = useContext(PetsContext)

  function handleChangeState(event: ChangeEvent<HTMLSelectElement>) {
    setLocation((state) => {
      return {
        ...state,
        brazilianState: event.target.value,
      }
    })
    fetchCities(event.target.value)
  }

  return (
    <FilterWrapperState>
      <FilterInputState name={name} id={name} onChange={handleChangeState}>
        <FilterInputOption value="" disabled selected>
          UF
        </FilterInputOption>
        {options.length > 0 &&
          options.map((option) => {
            return (
              <FilterInputOption key={option.nome} value={option.sigla}>
                {option.sigla}
              </FilterInputOption>
            )
          })}
      </FilterInputState>
      <img src={chevronImage} alt="" />
    </FilterWrapperState>
  )
}

export function SelectCity({
  name,
  options,
}: {
  name: string
  options: City[]
}) {
  const { setLocation } = useContext(PetsContext)

  function handleChangeCity(event: ChangeEvent<HTMLSelectElement>) {
    setLocation((state) => {
      return {
        ...state,
        city: event.target.value,
      }
    })
  }

  return (
    <FilterWrapperCity>
      <FilterInputCity name={name} id={name} onChange={handleChangeCity}>
        <FilterInputOption value="" disabled selected>
          Cidade
        </FilterInputOption>
        {options.length > 0 &&
          options.map((option) => {
            return (
              <FilterInputOption key={option.name} value={option.name}>
                {option.name}
              </FilterInputOption>
            )
          })}
      </FilterInputCity>
      <img src={chevronImage} alt="" />
    </FilterWrapperCity>
  )
}
