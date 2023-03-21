import {
  Container,
  Filter,
  FooterStyled,
  HeaderStyled,
  MainStyled,
} from './styles'
import logoImage from '@/assets/icons/logo.svg'
import bannerDogImage from '@/assets/images/banner.svg'
import searchImage from '@/assets/icons/search.svg'
import { SelectCity, SelectState } from '@/components/Select'
import { useContext } from 'react'
import { PetsContext } from '@/contexts/PetsContext'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  const { brazilianStates, cities, location, fetchPets } =
    useContext(PetsContext)

  function handleSearchPets() {
    fetchPets({})
    navigate('/map')
  }

  const buttonEnable = !(location.brazilianState && location.city)

  return (
    <Container>
      <HeaderStyled>
        <img src={logoImage} alt="" />
        <h2>FindAFriend</h2>
      </HeaderStyled>

      <MainStyled>
        <h1>
          Leve <br /> a felicidade <br /> para o seu lar
        </h1>
        <img src={bannerDogImage} alt="banner" />
      </MainStyled>

      <FooterStyled>
        <h3>
          Encontre o animal de estimação ideal <br /> para seu estilo de vida!
        </h3>
        <Filter>
          <label htmlFor="">Busque um amigo:</label>
          <SelectState name={''} options={brazilianStates} />
          <SelectCity name={''} options={cities} />
          <button disabled={buttonEnable} onClick={handleSearchPets}>
            <img src={searchImage} alt="" />
          </button>
        </Filter>
      </FooterStyled>
    </Container>
  )
}
