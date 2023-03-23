import styled from 'styled-components'

export const ButtonSearchContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 72px;
  height: 72px;

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
