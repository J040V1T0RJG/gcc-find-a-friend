import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  padding-top: 6.75rem;
  padding-bottom: 3rem;
  background: #fdeced;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 44.25rem;
  gap: 2rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 20px;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  padding-left: 4.5rem;
  padding-right: 4.5rem;

  background: ${(props) => props.theme['blue-dark']};

  .logoOrange {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;

    background: ${(props) => props.theme.yellow};
    border-radius: 16px;

    img {
      width: 1.75rem;
    }
  }

  .infoHeader {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    width: 29.5rem;

    p {
      max-width: 24rem;

      font-weight: 600;
      font-size: 1rem;

      strong {
        font-weight: 700;
        font-size: 1.875rem;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 4rem;
      height: 4rem;

      background: #114a80;
      color: white;

      border-radius: 16px;
      border: none;
    }
  }
`

export const FormWrapper = styled.main`
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;

  background: ${(props) => props.theme.white};
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  h1 {
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 90%;

    color: ${(props) => props.theme['blue-dark']};

    border-bottom: 1px solid ${(props) => props.theme['blue-ligth']};
    padding-bottom: 1.375rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    font-weight: 600;
    color: #0d3b66;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;

    &:first-of-type {
      margin-top: 2.5rem;
    }

    &:last-of-type {
      margin-top: 1.75rem;
    }
  }

  input,
  textarea {
    width: 100%;
    font-size: 1.125rem;
    font-weight: 600;
    color: #0d3b66;
    background-color: transparent;
    border: none;
    outline: none;
  }

  textarea {
    height: 7.5rem;
  }

  img {
    cursor: pointer;
  }

  h2 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 90%;

    color: ${(props) => props.theme['blue-dark']};

    border-bottom: 1px solid ${(props) => props.theme['blue-ligth']};
    padding-bottom: 1.75rem;
    margin-top: 4.375rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  background-color: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  padding: 1.125rem;
`

export const Button = styled.button`
  width: 100%;
  height: 4rem;

  background: #f4d35e;
  border-radius: 20px;
  border: none;
  margin-top: 8.375rem;

  p {
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;

    text-align: center;

    color: ${(props) => props.theme['blue-dark']};
  }
`
