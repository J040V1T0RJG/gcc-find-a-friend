import styled from 'styled-components'

export const SliderContainer = styled.div`
  margin-left: -4.5rem;
  margin-right: -4.5rem;

  .main-slider {
    height: 21rem;
    border-radius: 1.25rem 1.25rem 0 0;
    object-fit: cover;
  }

  .thumbnail {
    margin-top: 32px;
  }

  .thumbnail .keen-slider__slide {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    opacity: 0.3;

    border-radius: 15px;

    &.active {
      border: 4px solid ${(props) => props.theme['blue-dark']};
      opacity: 1;
    }
  }

  .text {
    width: 5rem;
    height: 5rem;
    background: transparent;
  }
`
