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

type Options = {
  value: string | number
  label: string
}

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  const options: Options[] = [
    {
      value: 'valor',
      label: 'escrita',
    },
    {
      value: 'valor',
      label: 'escrita',
    },
    {
      value: 'valor',
      label: 'escrita',
    },
  ]

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
          <SelectState label={''} name={''} options={[]} />
          <SelectCity label={''} name={''} options={[]} />
          <button>
            <img src={searchImage} alt="" />
          </button>
        </Filter>
      </FooterStyled>
    </Container>
  )
}
