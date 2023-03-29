import { Routes, Route } from 'react-router-dom'

import { PetDetails } from '@/pages/PetDetails'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/map" element={<Map />} />
      <Route path="/pet-details/:petId" element={<PetDetails />} />
    </Routes>
  )
}
