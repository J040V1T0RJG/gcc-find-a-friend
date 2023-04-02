import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
  margin-bottom: 25rem;
`

export const Container = styled.main`
  max-width: 1112px;
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
`

export const Card = styled.div`
  width: 30.5rem;
  height: 41.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  position: sticky;
  left: 0;
  top: 0;

  background-color: ${(props) => props.theme.carnation};
  border-radius: 20px;
  padding: 6.75rem 3.25rem 2.5rem;

  .logo {
    width: 10.75rem;
  }

  .petBanner {
    width: 24rem;
  }
`

export const FormWrapper = styled.div`
  width: 30.5rem;
  height: 41.25rem;
  display: block;

  h1 {
    font-size: 3.25rem;
    color: ${(props) => props.theme['blue-dark']};
    line-height: 90%;
    letter-spacing: -2px;
    text-align: center;
    margin-bottom: 6.25rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  background-color: #f5f8fa;
  border: 1px solid ${(props) => props.theme['blue-ligth']};
  border-radius: 10px;
  padding: 1.125rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

  p {
    font-weight: 800;
    font-size: 1.25rem
    line-height: 34px;

    text-align: center;
    text-decoration-line: underline;
    margin-bottom: 4rem;

    color: ${(props) => props.theme['blue-dark']};

    cursor: pointer;
  }

  .primary {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['blue-dark']};
  }

  .secondary {
    color: ${(props) => props.theme['blue-dark']};
    background-color: #f5f8fa;
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

  &:disabled {
    cursor: not-allowed;
  }
`
export const GoogleMapContainer = styled.div`
  width: 100%;
  height: 8.875rem;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 2rem;

  opacity: 0.8;
`
