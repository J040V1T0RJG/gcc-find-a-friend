import {
  Button,
  Content,
  FileWrapper,
  Form,
  FormWrapper,
  Header,
  InputWrapper,
  Wrapper,
} from './styles'
import logoImage from '@/assets/icons/logo.svg'
import exitImage from '@/assets/icons/exit.svg'
import fileUpdateImage from '@/assets/icons/file-upload.svg'
import fileImage from '@/assets/icons/file.svg'
import fileDeleteImage from '@/assets/icons/file-delete.svg'
import plusImage from '@/assets/icons/plus.svg'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCallback, useContext, useEffect } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

const typeOptions = [
  {
    label: 'Gato',
    value: 'cat',
  },
  {
    label: 'Cachorro',
    value: 'dog',
  },
]

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5mb
const MAX_NUMBER_FILES = 6
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

const petCreationDataSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'O nome é obrigatório' })
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
  age: z.enum(['cub', 'adolescent', 'elderly']),
  description: z.string().nonempty({ message: 'A descrição é obrigatória' }),
  energy: z.enum(['1', '2', '3', '4', '5']),
  independence: z.enum(['low', 'medium', 'high']),
  size: z.enum(['small', 'medium', 'big']),
  type: z.enum(['cat', 'dog']),
  images: z
    .instanceof(FileList)
    .refine((files) => !!files.item(0), 'A foto é obrigatória')
    .refine((files) => {
      let isValid = true
      for (const key in files) {
        if (Object.hasOwnProperty.call(files, key)) {
          const file = files[key]
          console.log(file)
          if (file.size > MAX_FILE_SIZE) {
            isValid = false
          }
        }
      }
      return isValid
    }, 'Tamanho máximo de 5MB')
    .refine((files) => {
      let isValid = true
      for (const key in files) {
        if (Object.hasOwnProperty.call(files, key)) {
          const file = files[key]
          if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
            isValid = false
          }
        }
      }
      return isValid
    }, 'Formato de imagem inválido')
    .refine(
      (files) => files.length <= MAX_NUMBER_FILES,
      'Permitido somente até 6 fotos',
    ),
  adoptionRequirements: z
    .string()
    .nonempty({ message: 'Os requisitos de adoção são obrigatórios' }),
})

type PetCreationDataType = z.infer<typeof petCreationDataSchema>

export function PetCreate() {
  const navigate = useNavigate()
  const { userIsAuthenticated } = useContext(AuthContext)
  const { register, handleSubmit, getValues, watch, resetField } =
    useForm<PetCreationDataType>({
      resolver: zodResolver(petCreationDataSchema),
    })

  const redirect = useCallback(async () => {
    const validToken = await userIsAuthenticated()
    if (!validToken) {
      navigate('/login')
    }
  }, [userIsAuthenticated, navigate])

  useEffect(() => {
    redirect()
  }, [redirect])

  function handleCreationPet(data: PetCreationDataType) {
    console.log(data)
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <div className="logoOrange">
            <img src={logoImage} alt="" />
          </div>
          <div className="infoHeader">
            <p>
              <strong>Seu cãozinho</strong>
              <br />
              Rua do meio, 123 , Boa viagem, Recife - PE
            </p>
            <button>
              <img src={exitImage} alt="" />
            </button>
          </div>
        </Header>
        <FormWrapper>
          <h1>Adicione um pet</h1>
          <Form onSubmit={handleSubmit(handleCreationPet)}>
            <label htmlFor="name">Nome</label>
            <InputWrapper>
              <input type="text" {...register('name')} />
            </InputWrapper>

            <label htmlFor="description">Sobre</label>
            <InputWrapper className="textareaWrapper">
              <textarea {...register('description')} />
            </InputWrapper>

            <label htmlFor="age">Idade</label>
            <InputWrapper>
              <select id="age" {...register('age')}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {ageOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  )
                })}
              </select>
            </InputWrapper>

            <label htmlFor="size">Porte</label>
            <InputWrapper>
              <select id="size" {...register('size')}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {sizeOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  )
                })}
              </select>
            </InputWrapper>

            <label htmlFor="energy">Nível de energia</label>
            <InputWrapper>
              <select id="energy" {...register('energy')}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {energyOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  )
                })}
              </select>
            </InputWrapper>

            <label htmlFor="independence">Nível de independência</label>
            <InputWrapper>
              <select id="independence" {...register('independence')}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {independencyOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  )
                })}
              </select>
            </InputWrapper>

            <label htmlFor="type">Raça</label>
            <InputWrapper>
              <select id="type" {...register('type')}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {typeOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  )
                })}
              </select>
            </InputWrapper>

            <label htmlFor="">Fotos</label>
            <FileWrapper>
              <label htmlFor="fileImage">
                <input
                  id="fileImage"
                  type="file"
                  accept="image/*"
                  multiple
                  draggable
                  {...register('images')}
                />
                <div className="upload">
                  <img src={fileUpdateImage} alt="" />
                  <p>Arraste e solte o arquivo</p>
                </div>
              </label>

              {watch('images') &&
                Object.values(getValues('images')).map((file) => {
                  return (
                    <div className="showFiles" key={file.name}>
                      <div>
                        <img src={fileImage} alt="" />
                        <p>{file.name}</p>
                      </div>
                      <button
                        onClick={() => {
                          resetField('images')
                        }}
                      >
                        <img src={fileDeleteImage} alt="" />
                      </button>
                    </div>
                  )
                })}

              <div className="addFile" onClick={() => {}}>
                <img src={plusImage} alt="" />
              </div>
            </FileWrapper>

            <h2>Adicione um pet</h2>

            <label htmlFor="">Requisito</label>
            <InputWrapper>
              <input type="text" {...register('adoptionRequirements')} />
            </InputWrapper>

            <div className="addFile" onClick={() => {}}>
              <img src={plusImage} alt="" />
            </div>

            <Button type="submit">
              <p>Confirmar</p>
            </Button>
          </Form>
        </FormWrapper>
      </Content>
    </Wrapper>
  )
}
