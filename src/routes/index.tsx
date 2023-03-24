import { Routes, Route } from 'react-router-dom'

import { PetDetails } from '@/pages/PetDetails'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/pet-details/:petId" element={<PetDetails />} />
    </Routes>
  )
}
