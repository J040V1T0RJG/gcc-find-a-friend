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

export function Register() {
  function handleRegisterOrganization() {
    // TO dO
  }

  function handleRenderMapLocation() {
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
          <h1>Cadastre sua organização</h1>
          <Form>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="mayk@email.com"
              />
            </InputWrapper>

            <label htmlFor="address">Endereço</label>
            <InputWrapper>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Rua do Meio, 1825"
              />
            </InputWrapper>

            <label htmlFor="contact">Whatsapp</label>
            <InputWrapper>
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="99 99999 9999"
              />
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

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <InputWrapper>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirme sua senha"
              />
              <img onClick={() => {}} src={passwordEyeImage} alt="" />
            </InputWrapper>

            <Buttons>
              <Button type="submit" onClick={() => {}} className="primary">
                Cadastrar
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
