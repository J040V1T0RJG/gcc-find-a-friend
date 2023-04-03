import styled from 'styled-components'

export const Wrapper = styled.div`
  background: white;
`

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100vw;
  padding-top: 5rem;
  gap: 8.5rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 30.5rem;
  height: 41.25rem;
  border-radius: 20px;
  padding: 6.75rem 3.25rem 2.5rem;

  background: ${(props) => props.theme.carnation};

  .logo {
    width: 10.75rem;
  }

  .petBanner {
    width: 24rem;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  width: 30.5rem;
  h1 {
    font-weight: 700;
    font-size: 3.375rem;
    line-height: 90%;

    text-align: center;
    letter-spacing: -0.02em;
    margin-bottom: 4.5rem;

    color: ${(props) => props.theme['blue-dark']};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  background-color: #f5f8fa;
  border: 1px solid ${(props) => props.theme['blue-ligth']};
  border-radius: 10px;
  padding: 1.125rem;
  margin-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme['blue-dark']};
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${(props) => props.theme['blue-dark']};
    background-color: transparent;
    border: none;
    outline: none;
  }

  img {
    cursor: pointer;
  }
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 3.75rem;

  .primary {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['blue-dark']};
  }

  .secondary {
    color: ${(props) => props.theme['blue-dark']};
    background-color: #f5f8fa;
    margin-bottom: 4rem;
  }
`
export const Button = styled.button`
  width: 100%;
  height: 4.5rem;

  font-size: 1.25rem;
  font-weight: 800;
  text-align: center;
  border-radius: 20px;
  padding: 1.25rem auto;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`
export const GoogleMapContainer = styled.div`
  width: 100%;
  height: 8.875rem;
  overflow: hidden;
  border-radius: 20px;
  margin-top: -1rem;
  margin-bottom: 2rem;

  opacity: 0.8;
`
