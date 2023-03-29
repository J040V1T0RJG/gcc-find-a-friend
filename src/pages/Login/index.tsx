import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  InputWrapper,
  Buttons,
  Button,
} from './styles'

import horizontalLogoImage from '../../assets/icons/horizontal-logo.svg'
import petsImage from '../../assets/images/banner.svg'
import passwordEyeImage from '../../assets/icons/password-eye.svg'

export function Login() {
  function handleLogin() {
    // TO DO
  }

  function handleRegisterOrganization() {
    // TO DO
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={horizontalLogoImage} className="logo" alt="" />
          <img src={petsImage} alt="" />
        </Card>
        <FormWrapper>
          <h1>Boas-vindas!</h1>
          <Form>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input type="text" name="email" id="email" placeholder="Email" />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
              />
              <img onClick={() => {}} src={passwordEyeImage} alt="" />
            </InputWrapper>

            <Buttons>
              <Button type="submit" onClick={() => {}} className="primary">
                Login
              </Button>
              <Button type="button" onClick={() => {}} className="secondary">
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
