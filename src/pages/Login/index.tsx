import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'

import horizontalLogoImage from '@/assets/icons/horizontal-logo.svg'
import petsImage from '@/assets/images/banner.svg'
import passwordEyeImage from '@/assets/icons/password-eye.svg'
import eyeImage from '@/assets/icons/eye.svg'
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
import { AuthContext } from '@/contexts/AuthContext'

const orgLoginData = zod
  .object({
    email: zod.string().email(),
    password: zod.string().min(8),
  })
  .required()

type LoginData = zod.infer<typeof orgLoginData>

export function Login() {
  const navigate = useNavigate()
  const { signIn, isAuthenticated } = useContext(AuthContext)
  const [passwordShown, setPasswordShown] = useState<boolean>(false)

  const { register, handleSubmit, reset } = useForm<LoginData>({
    resolver: zodResolver(orgLoginData),
  })

  // if (isAuthenticated) {
  //   navigate('/')
  // }

  async function handleLogin({ email, password }: LoginData) {
    try {
      await signIn({ email, password })
    } catch (error: any) {
      reset()
      alert(`Error: ${error.response.data.error}`)
    }
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={horizontalLogoImage} className="logo" alt="" />
          <img src={petsImage} className="petBanner" alt="" />
        </Card>
        <FormWrapper>
          <h1>Boas-vindas!</h1>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="text"
                id="email"
                placeholder="Email"
                required
                {...register('email')}
              />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type={passwordShown ? 'text' : 'password'}
                id="password"
                placeholder="Senha"
                min={8}
                required
                {...register('password', { min: 8 })}
              />
              <img
                onClick={() => {
                  setPasswordShown(!passwordShown)
                }}
                src={passwordShown ? eyeImage : passwordEyeImage}
                alt=""
              />
            </InputWrapper>

            <Buttons>
              <Button type="submit" className="primary">
                Login
              </Button>
              <Button
                type="button"
                onClick={() => {
                  navigate('/register')
                }}
                className="secondary"
              >
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
