import styled from 'styled-components'

export const SliderContainer = styled.div`
  margin-left: -72px;
  margin-right: -72px;

  .main-slider {
    height: 336px;
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;
  }

  .thumbnail {
    /* padding-left: 72px; */
    margin-top: 32px;
  }

  .thumbnail .keen-slider__slide {
    width: 80px;
    height: 80px;
    object-fit: cover;
    opacity: 0.3;

    border-radius: 15px;

    &.active {
      border: 4px solid #0d3b66;
      opacity: 1;
    }
  }

  .text {
    width: 80px;
    height: 80px;
    background: transparent;
  }
`
