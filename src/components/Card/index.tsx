import logo from '@/assets/icons/logo.svg'
import { useNavigate } from 'react-router-dom'
import { Container, Name, PetImage, TypeIcon } from './styles'

type CardProps = {
  path: string
  name: string
  type: string
  id: string
}

export function Card({ path, name, type, id }: CardProps) {
  const navigate = useNavigate()

  function handleChoosePet() {
    navigate(`/pet-details/${id}`)
  }

  return (
    <Container onClick={handleChoosePet}>
      <PetImage>
        <img src={path} alt={`Foto de ${name}`} />
      </PetImage>
      <div>
        <TypeIcon>
          <div
            style={{ backgroundColor: type === 'cat' ? '#F4D35E' : '#F15156' }}
          >
            <img src={logo} alt="" />
          </div>
        </TypeIcon>
        <Name>{name}</Name>
      </div>
    </Container>
  )
}
