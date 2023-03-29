import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'

import geoLocationMapImage from '@/assets/icons/geo-location-map.svg'
import { GeoMapContainer } from './styles'
import { api } from '@/libs/axios'

type GeoMapProps = {
  cep?: string
}

interface Location {
  latitude: string
  longitude: string
}

export function GeoMap({ cep }: GeoMapProps) {
  const [orgLocation, setOrgLocation] = useState<Location>()
  const containerStyle = {
    height: '228px',
    width: '100%',
  }

  const center = {
    lat: Number(orgLocation?.latitude),
    lng: Number(orgLocation?.longitude),
  }

  function handleRedirectGoogleMaps() {
    window.open(
      `https://maps.google.com/?q=${center.lat},${center.lng}`,
      '_blank',
    )
  }

  const fetchLocation = useCallback(async () => {
    try {
      if (cep) {
        const response = await api.get(`/location/coordinates/${cep}`)
        setOrgLocation(response.data.coordinates)
      }
    } catch (error) {
      console.error(error)
    }
  }, [setOrgLocation, cep])

  useEffect(() => {
    fetchLocation()
  }, [fetchLocation])

  return (
    <GeoMapContainer>
      <div className="googleGeoMap">
        <LoadScript googleMapsApiKey="AIzaSyDFiQzRDV8TtAmnHvFNwI2O_PGpoCYRK7o">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker
              position={center}
              icon={geoLocationMapImage}
              onClick={handleRedirectGoogleMaps}
            />
          </GoogleMap>
        </LoadScript>
      </div>

      <button onClick={handleRedirectGoogleMaps}>
        <p>Ver rotas no Google Maps</p>
      </button>
    </GeoMapContainer>
  )
}
