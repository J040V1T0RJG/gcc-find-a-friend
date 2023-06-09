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
    font-size: 4.5rem;
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
    font-size: 1.5rem;
    line-height: 34px;
  }
`

export const Filter = styled.div`
  display: flex;
  width: 39rem;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  label {
    min-width: max-content;
    line-height: 34px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 4.5rem;
    height: 4.5rem;

    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 20px;
    border: none;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }
  }
`
