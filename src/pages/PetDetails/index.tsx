import 'keen-slider/keen-slider.min.css'
import { useParams } from 'react-router-dom'

import { PetDetailsContainer } from './styles'
import { Slider } from '@/components/Slider'

export function PetDetails() {
  const { petId } = useParams()
  console.log('petId =>', petId)

  return (
    <PetDetailsContainer>
      <Slider />
      <h1>Alfredo</h1>
      <h3>
        Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora fazer
        companhia, uma bagunça mas também ama uma soneca.
      </h3>
    </PetDetailsContainer>
  )
}
