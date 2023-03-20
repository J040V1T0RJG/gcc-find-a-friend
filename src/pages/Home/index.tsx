import {
  Container,
  Filter,
  FilterInputCity,
  FilterInputOptionCity,
  FilterInputOptionState,
  FilterInputState,
  FilterWrapperCity,
  FilterWrapperState,
  FooterStyled,
  HeaderStyled,
  MainStyled,
} from './styles'
import logoImage from '@/assets/icons/logo.svg'
import bannerDogImage from '@/assets/images/banner.svg'
import chevronImage from '@/assets/icons/chevron-bottom.svg'
import searchImage from '@/assets/icons/search.svg'

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
          <FilterWrapperState>
            <FilterInputState>
              <FilterInputOptionState value="" disabled selected>
                SP
              </FilterInputOptionState>
              {options.map((option) => {
                return (
                  <FilterInputOptionState
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </FilterInputOptionState>
                )
              })}
            </FilterInputState>
            <img src={chevronImage} alt="" />
          </FilterWrapperState>

          <FilterWrapperCity>
            <FilterInputCity>
              <FilterInputOptionCity value="" disabled selected>
                Recife
              </FilterInputOptionCity>
              {options.map((option) => {
                return (
                  <FilterInputOptionCity
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </FilterInputOptionCity>
                )
              })}
            </FilterInputCity>
            <img src={chevronImage} alt="" />
          </FilterWrapperCity>

          <button>
            <img src={searchImage} alt="" />
          </button>
        </Filter>
      </FooterStyled>
    </Container>
  )
}
