import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FilterLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`

export const FilterWrapper = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const FilterInput = styled.select`
  width: 100%;
  height: 60px;
  font-size: 16px;
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
    width: 12px;
    height: 6px;
    display: absolute;
    color: ${(props) => props.theme.white};
  }
`

export const FilterInputOption = styled.option`
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  background: ${(props) => props.theme.carnation};
  color: ${(props) => props.theme.white};
  padding: 5px 7px;
`

export const FilterWrapperState = styled(FilterWrapper)`
  & > img {
    width: 8px;
    position: absolute;
    right: 12px;
  }
`

export const FilterInputState = styled(FilterInput)`
  width: 72px;
  height: 72px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 20px;
  padding: 20px;
`

export const FilterWrapperCity = styled(FilterWrapper)`
  & > img {
    width: 8px;
    position: absolute;
    right: 15%;
  }
`

export const FilterInputCity = styled(FilterInput)`
  width: 280px;
  height: 72px;
  text-align: center;
  background-color: ${(props) => props.theme.cinnabar};
  border: 1px solid ${(props) => props.theme.carnation};
  border-radius: 20px;
`
