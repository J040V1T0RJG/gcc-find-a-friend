import 'keen-slider/keen-slider.min.css'
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from 'keen-slider/react'
import { MutableRefObject } from 'react'
import { SliderContainer } from './styles'

export function Slider() {
  function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>,
  ): KeenSliderPlugin {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove('active')
        })
      }
      function addActive(idx: number) {
        slider.slides[idx].classList.add('active')
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener('click', () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }

      slider.on('created', () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on('animationStarted', (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 6,
        spacing: 16,
        origin: 0.1,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  )

  return (
    <SliderContainer>
      <div ref={sliderRef} className="keen-slider">
        <img
          src="https://streamingflix.com.br/wp-content/uploads/2023/01/27878-a-lenda-da-lamina-do-norte-capitulo-139-data-e-hora-de-lancamento-spoilers-leia-online.jpg"
          alt=""
          className="keen-slider__slide main-slider"
        />
        <img
          src="https://i0.wp.com/thesportsgrail.com/wp-content/uploads/2023/03/Legend-Of-The-Northern-Blade-Chapter-147-Release-Date-Spoilers-Where-To-Read.jpg?fit=1280%2C720&ssl=1"
          alt=""
          className="keen-slider__slide main-slider"
        />
        <img
          src="https://metagalaxia.com.br/wp-content/uploads/2022/06/garou-one-punch-man-2.jpg"
          alt=""
          className="keen-slider__slide main-slider"
        />
        <img
          src="https://streamingflix.com.br/wp-content/uploads/2023/01/27878-a-lenda-da-lamina-do-norte-capitulo-139-data-e-hora-de-lancamento-spoilers-leia-online.jpg"
          alt=""
          className="keen-slider__slide main-slider"
        />
        <img
          src="https://streamingflix.com.br/wp-content/uploads/2023/01/27878-a-lenda-da-lamina-do-norte-capitulo-139-data-e-hora-de-lancamento-spoilers-leia-online.jpg"
          alt=""
          className="keen-slider__slide main-slider"
        />
        <img
          src="https://streamingflix.com.br/wp-content/uploads/2023/01/27878-a-lenda-da-lamina-do-norte-capitulo-139-data-e-hora-de-lancamento-spoilers-leia-online.jpg"
          alt=""
          className="keen-slider__slide main-slider"
        />
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <img
          src="https://streamingflix.com.br/wp-content/uploads/2023/01/27878-a-lenda-da-lamina-do-norte-capitulo-139-data-e-hora-de-lancamento-spoilers-leia-online.jpg"
          alt=""
          className="keen-slider__slide"
        />
        <img
          src="https://i0.wp.com/thesportsgrail.com/wp-content/uploads/2023/03/Legend-Of-The-Northern-Blade-Chapter-147-Release-Date-Spoilers-Where-To-Read.jpg?fit=1280%2C720&ssl=1"
          alt=""
          className="keen-slider__slide"
        />
        <img
          src="https://metagalaxia.com.br/wp-content/uploads/2022/06/garou-one-punch-man-2.jpg"
          alt=""
          className="keen-slider__slide"
        />
        <img
          src="https://streamingflix.com.br/wp-content/uploads/2023/01/27878-a-lenda-da-lamina-do-norte-capitulo-139-data-e-hora-de-lancamento-spoilers-leia-online.jpg"
          alt=""
          className="keen-slider__slide"
        />
        <img
          src="https://streamingflix.com.br/wp-content/uploads/2023/01/27878-a-lenda-da-lamina-do-norte-capitulo-139-data-e-hora-de-lancamento-spoilers-leia-online.jpg"
          alt=""
          className="keen-slider__slide"
        />
        <img
          src="https://streamingflix.com.br/wp-content/uploads/2023/01/27878-a-lenda-da-lamina-do-norte-capitulo-139-data-e-hora-de-lancamento-spoilers-leia-online.jpg"
          alt=""
          className="keen-slider__slide"
        />
      </div>
    </SliderContainer>
  )
}
