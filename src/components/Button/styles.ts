import styled from 'styled-components'

export const ButtonSearchContainer = styled.button`
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
`
