import styled from 'styled-components'

export const Container = styled.div`
  max-width: 17.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0.25rem;
  border-radius: 20px;
  background-color: ${(props) => props.theme.white};
  overflow: hidden;

  &:hover {
    background-color: ${(props) => props.theme['blue-dark']};

    div {
      background-color: ${(props) => props.theme['blue-dark']};
    }

    p {
      color: ${(props) => props.theme.white};
    }
  }
`

export const TypeIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: -1.875rem;
  padding: 0.125rem;
  border-radius: 0.625rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.white};

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
  }

  img {
    width: 1rem;
  }
`

export const PetImage = styled.div`
  object-fit: cover;

  img {
    width: 15.5rem;
    height: 8.5rem;
    border-radius: 20px;
  }
`

export const Name = styled.p`
  font-size: 1.125rem;
  line-height: 21.6px;
  font-weight: 700;
  margin: 0.5rem auto 1rem;
  color: ${(props) => props.theme['blue-dark']};
`
