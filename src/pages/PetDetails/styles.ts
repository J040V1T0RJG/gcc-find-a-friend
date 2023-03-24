import styled from 'styled-components'

export const PetDetailsContainer = styled.div`
  margin: 108px auto;

  width: 704px;
  height: 2035px;

  background: ${(props) => props.theme.white};
  border-radius: 20px;

  padding-left: 72px;
  padding-right: 72px;
  padding-bottom: 72px;

  color: ${(props) => props.theme['blue-dark']};
`

export const MainInfo = styled.div`
  margin-top: 70px;

  h1 {
    font-weight: 800;
    font-size: 54px;
    line-height: 90%;
    letter-spacing: -0.02em;
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    margin-top: 26px;
  }
`
