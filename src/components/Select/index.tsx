import chevronImage from '@/assets/icons/chevron-bottom.svg'
import { ComponentProps } from 'react'
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

export function SelectState({ label, name, options }: SelectProps) {
  return (
    <FilterWrapperState>
      <FilterInputState name={name} id={name}>
        <FilterInputOption value="" disabled selected>
          SP
        </FilterInputOption>
        {options.map((option) => {
          return (
            <FilterInputOption key={option.value} value={option.value}>
              {option.label}
            </FilterInputOption>
          )
        })}
      </FilterInputState>
      <img src={chevronImage} alt="" />
    </FilterWrapperState>
  )
}

export function SelectCity({ label, name, options }: SelectProps) {
  return (
    <FilterWrapperCity>
      <FilterInputCity name={name} id={name}>
        <FilterInputOption value="" disabled selected>
          São José do Rio Preto
        </FilterInputOption>
        {options.map((option) => {
          return (
            <FilterInputOption key={option.value} value={option.value}>
              {option.label}
            </FilterInputOption>
          )
        })}
      </FilterInputCity>
      <img src={chevronImage} alt="" />
    </FilterWrapperCity>
  )
}
