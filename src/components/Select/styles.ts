import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FilterLabel = styled.label`
  font-size: 0.75rem;
  line-height: 14px;
  font-weight: 500;
`

export const FilterWrapper = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 1.125rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const FilterInput = styled.select`
  width: 100%;
  height: 3.75rem;
  font-size: 1rem;
  line-height: 19.2px;
  font-weight: 800;
  color: ${(props) => props.theme.white};
  background-color: #f75f64;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 20px;
  appearance: none;
  position: relative;
  cursor: pointer;

  &::before {
    content: '⌄';
    width: 0.75rem;
    height: 0.5rem;
    display: absolute;
    color: ${(props) => props.theme.white};
  }
`

export const FilterInputOption = styled.option`
  font-family: 'Nunito';
  font-size: 0.875rem;
  line-height: 16px;
  font-weight: 500;
  background: ${(props) => props.theme.carnation};
  color: ${(props) => props.theme.white};
  padding: 0.25rem 0.5rem;
`

export const FilterWrapperState = styled(FilterWrapper)`
  & > img {
    width: 0.5rem;
    position: absolute;
    right: 0.75rem;
  }
`

export const FilterInputState = styled(FilterInput)`
  width: 4.5rem;
  height: 4.5rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 20px;
  padding: 1.25rem;
`

export const FilterWrapperCity = styled(FilterWrapper)`
  width: 100%;
  & > img {
    width: 8px;
    position: absolute;
    right: 10%;
  }
`

export const FilterInputCity = styled(FilterInput)`
  width: 100%;
  height: 4.5rem;
  text-align: center;
  background-color: ${(props) => props.theme.cinnabar};
  border: 1px solid ${(props) => props.theme.carnation};
  border-radius: 20px;
`
