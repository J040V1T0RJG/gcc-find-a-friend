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
  }
`

export const FilterWrapperState = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const FilterInputState = styled.select`
  width: 72px;
  height: 72px;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 800;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.carnation};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.white};
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

export const FilterInputOptionState = styled.option`
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.white};
  padding: 5px 7px;
`

export const FilterWrapperCity = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 30%;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const FilterInputCity = styled.select`
  width: 280px;
  height: 72px;
  text-align: center;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 800;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.cinnabar};
  border-radius: 20px;
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

export const FilterInputOptionCity = styled.option`
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.white};
  padding: 5px 7px;
`
