import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.white};
`

export const Container = styled.main`
  max-width: 69.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

export const Card = styled.div`
  width: 30.5rem;
  height: 41.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #f15156;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    font-size: 3.375rem;
    color: #0d3b66;
    line-height: 90%;
    letter-spacing: -2px;
    margin-bottom: 6.25rem;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */

  label {
    font-size: 1rem;
    font-weight: 600;
    color: #0d3b66;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  input {
    width: 100%;
    font-size: 1.125rem;
    font-weight: 600;
    color: #0d3b66;
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
    color: #ffffff;
    background-color: #0d3b66;
  }

  .secondary {
    color: #0d3b66;
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

  &:hover {
    opacity: 0.8;
  }
`
