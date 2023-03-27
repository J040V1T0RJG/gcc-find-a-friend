import { useParams } from 'react-router-dom'

import { PetDetailsContainer } from './styles'
import { Slider } from '@/components/Slider'
import { api } from '@/libs/axios'
import { useCallback, useEffect, useState } from 'react'
import { MainInfo } from '@/components/MainInfo'
import alertImage from '@/assets/icons/alert.svg'
import whatsappBoldImage from '@/assets/icons/whatsapp-bold.svg'
import whatsappFillImage from '@/assets/icons/whatsapp-fill.svg'
import logoImage from '@/assets/icons/logo.svg'
import { GeoMap } from '@/components/GeoMap'

export interface PetDetatils {
  id: string
  name: string
  description: string
  city: string
  age: string
  energy: number
  size: string
  independence: string
  type: string
  photo: string
  orgId: string
  org: {
    id: string
    nome: string
    address: string
    cep: string
    whatsappNumber: string
  }
  photo_url: string
}

export interface PetGallery {
  id: string
  image: string
  petId: string
  photo_url: string
}

interface PetAdoptionRequirements {
  id: string
  petId: string
  title: string
}

export function PetDetails() {
  const { petId } = useParams()
  const [petDetails, setPetDetatils] = useState<PetDetatils>()
  const [petGallery, setPetGallery] = useState<PetGallery[]>([])
  const [petAdoptionRequirements, setPetAdoptionRequirements] = useState<
    PetAdoptionRequirements[]
  >([])

  const fetchPetDetails = useCallback(async () => {
    const response = await api.get(`/pets/show/${petId}`)
    setPetDetatils(response.data.pet)
  }, [petId])

  const fetchPetGallery = useCallback(async () => {
    const response = await api.get(`/pets/gallery/${petId}`)
    setPetGallery(response.data.pet_gallery)
  }, [petId])

  const fetchPetAdoptionRequirements = useCallback(async () => {
    const response = await api.get(`/pets/adoption-requirements/${petId}`)
    setPetAdoptionRequirements(response.data.adoption_requirements)
  }, [petId])

  useEffect(() => {
    fetchPetDetails()
    fetchPetGallery()
    fetchPetAdoptionRequirements()
  }, [fetchPetDetails, fetchPetGallery, fetchPetAdoptionRequirements])

  return (
    <PetDetailsContainer>
      <Slider gallery={petGallery} />
      <MainInfo info={petDetails} />
      <GeoMap cep={petDetails?.org.cep} />
      <div className="contact">
        <div className="logoOrange">
          <img src={logoImage} alt="" />
        </div>
        <div className="contactText">
          <h2>{petDetails?.org.nome}</h2>
          <h3>{petDetails?.org.address}</h3>
          <div className="whatsappContactBox">
            <img src={whatsappFillImage} alt="" />
            <p>{petDetails?.org.whatsappNumber}</p>
          </div>
        </div>
      </div>
      <div className="requirements">
        <h2>Requesitos para adoção</h2>
        <div className="alertBoxes">
          {petAdoptionRequirements.map((requirement) => {
            return (
              <div key={requirement.id} className="alert">
                <img src={alertImage} alt="" />
                <p>{requirement.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="whatsaap">
        <button>
          <img src={whatsappBoldImage} alt="" />
          <p>Entrar em contato</p>
        </button>
      </div>
    </PetDetailsContainer>
  )
}
