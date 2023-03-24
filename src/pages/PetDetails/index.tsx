import { useParams } from 'react-router-dom'

import { MainInfo, PetDetailsContainer } from './styles'
import { Slider } from '@/components/Slider'
import { InfoBoxes } from '@/components/InfoBoxes'

export function PetDetails() {
  const { petId } = useParams()

  return (
    <PetDetailsContainer>
      <Slider />
      <MainInfo>
        <h1>Alfredo</h1>
        <h3>
          Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora fazer
          companhia, uma bagunça mas também ama uma soneca.
        </h3>
        <InfoBoxes />
      </MainInfo>
    </PetDetailsContainer>
  )
}
