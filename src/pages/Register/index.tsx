import { FocusEvent, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

import horizontalLogoImage from '@/assets/icons/horizontal-logo.svg'
import petsImage from '@/assets/images/banner.svg'
import passwordEyeImage from '@/assets/icons/password-eye.svg'
import eyeImage from '@/assets/icons/eye.svg'
import { api } from '@/libs/axios'
import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  InputWrapper,
  Buttons,
  Button,
  GoogleMapContainer,
} from './styles'

interface Latlgn {
  lat: number
  lng: number
}

const orgRegistrationData = zod
  .object({
    name: zod.string(),
    email: zod.string().email(),
    cep: zod.string().regex(/^\d{5}-\d{3}$/),
    address: zod.string(),
    whatsappNumber: zod.string(),
    password: zod.string().min(8),
    passwordConfirm: zod.string().min(8),
  })
  .required()

type DataRegister = zod.infer<typeof orgRegistrationData>

export function Register() {
  const navigate = useNavigate()
  const googleMapsApiKey: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const [latlng, setLatlng] = useState<Latlgn>({ lat: -3.745, lng: -38.523 })
  const [isMapRender, setIsMapRender] = useState<boolean>(false)
  const [passwordShown, setPasswordShown] = useState<boolean>(false)
  const [confirmPasswordShown, setConfirmPasswordShown] =
    useState<boolean>(false)
  const { register, handleSubmit, resetField, reset } = useForm<DataRegister>({
    resolver: zodResolver(orgRegistrationData),
  })

  async function handleRegisterOrganization(data: DataRegister) {
    if (data.password !== data.passwordConfirm) {
      alert('senhas diferentes')
      resetField('passwordConfirm')
      return
    }

    try {
      await api.post('/orgs', data)
      alert(`O seu registo foi concluído com sucesso.`)
      navigate('/login')
    } catch (error: any) {
      reset()
      alert(`Error: ${error.response.data}`)
    }
  }

  async function handleRenderMapLocation(event: FocusEvent<HTMLInputElement>) {
    const address = event.target.value
    try {
      const response = await api.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleMapsApiKey}`,
      )
      setLatlng(response.data.results[0].geometry.location)
      setIsMapRender(true)
    } catch (error) {
      console.error(error)
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
          <h1>Cadastre sua organização</h1>
          <Form onSubmit={handleSubmit(handleRegisterOrganization)}>
            <label htmlFor="name">Nome do responsável</label>
            <InputWrapper>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                required
                {...register('name')}
              />
            </InputWrapper>

            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="email"
                id="email"
                placeholder="email@gmail.com"
                required
                {...register('email')}
              />
            </InputWrapper>

            <label htmlFor="cep">CEP</label>
            <InputWrapper>
              <input
                type="text"
                id="cep"
                placeholder="00000-000"
                required
                {...register('cep', { pattern: /^\d{5}-\d{3}$/ })}
              />
            </InputWrapper>

            <label htmlFor="address">Endereço</label>
            <InputWrapper>
              <input
                type="text"
                id="address"
                placeholder="Rua do Meio, 1825"
                required
                {...register('address', {
                  onBlur(event) {
                    handleRenderMapLocation(event)
                  },
                })}
                onBlur={handleRenderMapLocation}
              />
            </InputWrapper>

            {isMapRender && (
              <GoogleMapContainer>
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                  <GoogleMap
                    mapContainerStyle={{
                      height: '142px',
                      width: '100%',
                    }}
                    center={latlng}
                    zoom={19}
                  >
                    <Marker
                      position={latlng}
                      icon={
                        'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                      }
                    />
                  </GoogleMap>
                </LoadScript>
              </GoogleMapContainer>
            )}

            <label htmlFor="contact">Whatsapp</label>
            <InputWrapper>
              <input
                type="text"
                id="contact"
                placeholder="99 99999 9999"
                required
                {...register('whatsappNumber', { min: 11 })}
              />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type={passwordShown ? 'text' : 'password'}
                id="password"
                placeholder="Senha"
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

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <InputWrapper>
              <input
                type={confirmPasswordShown ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Confirme sua senha"
                required
                {...register('passwordConfirm', {
                  min: 8,
                })}
              />
              <img
                onClick={() => {
                  setConfirmPasswordShown(!confirmPasswordShown)
                }}
                src={confirmPasswordShown ? eyeImage : passwordEyeImage}
                alt=""
              />
            </InputWrapper>

            <Buttons>
              <Button type="submit" className="primary">
                Cadastrar
              </Button>
              <p
                onClick={() => {
                  navigate('/login')
                }}
              >
                Já possui conta?
              </p>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
