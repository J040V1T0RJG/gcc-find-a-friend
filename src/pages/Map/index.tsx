import { ChangeEvent, useContext } from 'react'

import { Aside } from '~/Aside'
import { Card } from '~/Card'
import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'
import { PetsContext } from '@/contexts/PetsContext'

export function Map() {
  const { pets, setSubFilter, fetchPets } = useContext(PetsContext)

  function handleFilterByPetType(event: ChangeEvent<HTMLSelectElement>) {
    setSubFilter((state) => {
      const subFilter = { ...state, type: event.target.value }

      fetchPets(subFilter)
      return subFilter
    })
  }

  return (
    <Container>
      <Aside />

      <Content>
        <Header>
          <p>
            Encontre <span>324 amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              name="size"
              id="size"
              onChange={handleFilterByPetType}
            >
              <option value="all">Gatos e Cachorros</option>
              <option value="cat">Gatos</option>
              <option value="dog">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {pets.length > 0 &&
            pets.map((pet) => {
              return (
                <Card
                  key={pet.id}
                  path={pet.photo_url}
                  type={pet.type}
                  name={pet.name}
                />
              )
            })}
        </Display>
      </Content>
    </Container>
  )
}
