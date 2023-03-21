import styled from 'styled-components'

export const Container = styled.div`
  width: 76rem;
  margin: 7.75rem auto;
`

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
`

export const MainStyled = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1.875rem;

  h1 {
    font-weight: 800;
    font-size: 72px;
    line-height: 90%;

    letter-spacing: -0.02em;
  }
`

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 7.5rem;

  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
  }
`

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  label {
    line-height: 34px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 72px;
    height: 72px;

    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 20px;
    border: none;

    &:disabled {
      cursor: not-allowed;
    }
  }
`
