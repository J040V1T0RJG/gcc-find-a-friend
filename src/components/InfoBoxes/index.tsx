import { InfoBoxesContainer } from './styles'
import fullEnergyImage from '@/assets/icons/full-energy.svg'
import emptyEnergyImage from '@/assets/icons/empty-energy.svg'
import environmentSize from '@/assets/icons/environment-size.svg'
import fullBallImage from '@/assets/icons/full-ball.svg'
import emptyBallImage from '@/assets/icons/empty-ball.svg'

const energyPet = [
  { 1: 'Pouca energia', icons: [true, false, false, false, false] },
  { 2: 'Pouca energia', icons: [true, true, false, false, false] },
  { 3: 'Energia média', icons: [true, true, true, false, false] },
  { 4: 'Muita energia', icons: [true, true, true, true, false] },
  { 5: 'Muita energia', icons: [true, true, true, true, true] },
]

const helperPetSize = {
  small: 1,
  medium: 2,
  big: 3,
}

const sizePet = [
  {
    size: 'Pequenino',
    icons: [true, false, false],
    environment: 'Ambiente pequeno',
  },
  {
    size: 'Médio',
    icons: [true, true, false],
    environment: 'Ambiente médio',
  },
  { size: 'Grandão', icons: [true, true, true], environment: 'Ambiente amplo' },
]

export function InfoBoxes() {
  const getEnegyAPI = 2
  const getSizeAPI = 'small'

  return (
    <InfoBoxesContainer>
      <div className="petEnergyBox box">
        <div className="icons">
          {energyPet[getEnegyAPI - 1].icons.map((icon, index) => {
            if (icon) {
              return <img key={index} src={fullEnergyImage} alt="" />
            } else {
              return <img key={index} src={emptyEnergyImage} alt="" />
            }
          })}
        </div>
        <p>{energyPet[getEnegyAPI - 1][getEnegyAPI]}</p>
      </div>
      <div className="petEnvironmentBox box">
        <div className="icons">
          <img src={environmentSize} alt="" />
        </div>
        <p>{sizePet[helperPetSize[`${getSizeAPI}`] - 1].environment}</p>
      </div>
      <div className="petSizeBox box">
        <div className="icons">
          {sizePet[helperPetSize[`${getSizeAPI}`] - 1].icons.map(
            (icon, index) => {
              if (icon) {
                return <img key={index} src={fullBallImage} alt="" />
              } else {
                return <img key={index} src={emptyBallImage} alt="" />
              }
            },
          )}
        </div>
        <p>{sizePet[helperPetSize[`${getSizeAPI}`] - 1].size}</p>
      </div>
    </InfoBoxesContainer>
  )
}
