// import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'

export const GeoMapContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  background: #0d3b66;
  margin-top: 70px;

  color: white;

  .googleGeoMap {
    overflow: hidden;
    border-radius: 20px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    height: 65px;

    background: #0d3b66;
    border: none;

    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;

      text-align: center;

      color: #f4d35e;
    }
  }
`
