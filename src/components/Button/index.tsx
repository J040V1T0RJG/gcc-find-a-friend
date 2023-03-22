import searchImage from '@/assets/icons/search.svg'
import { PetsContext } from '@/contexts/PetsContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonSearchContainer } from './styles'

export function ButtonSearch() {
  const navigate = useNavigate()
  const { location, fetchPets } = useContext(PetsContext)

  function handleSearchPets() {
    fetchPets({})
    navigate('/map')
  }

  const buttonEnable = !(location.brazilianState && location.city)
  return (
    <ButtonSearchContainer disabled={buttonEnable} onClick={handleSearchPets}>
      <img src={searchImage} alt="" />
    </ButtonSearchContainer>
  )
}
