// import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'

export const GeoMapContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  background: ${(props) => props.theme['blue-dark']};
  margin-top: 4.5rem;

  color: ${(props) => props.theme.white};

  .googleGeoMap {
    overflow: hidden;
    border-radius: 20px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    height: 4rem;

    background: ${(props) => props.theme['blue-dark']};
    border: none;

    p {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 25px;

      text-align: center;

      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
