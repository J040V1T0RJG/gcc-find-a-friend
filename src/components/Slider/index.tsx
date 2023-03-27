import 'keen-slider/keen-slider.min.css'
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from 'keen-slider/react'
import { MutableRefObject } from 'react'

import { PetGallery } from '@/pages/PetDetails'
import { SliderContainer } from './styles'

type GalleryProps = {
  gallery: PetGallery[]
}

export function Slider({ gallery }: GalleryProps) {
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

  if (gallery.length > 0) {
    return (
      <SliderContainer>
        <div ref={sliderRef} className="keen-slider">
          {gallery.map((photo) => {
            return (
              <img
                key={photo.id}
                src={photo.photo_url}
                alt=""
                className="keen-slider__slide main-slider"
              />
            )
          })}
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail">
          {gallery.map((photo) => {
            return (
              <img
                key={photo.id}
                src={photo.photo_url}
                alt=""
                className="keen-slider__slide"
              />
            )
          })}
        </div>
      </SliderContainer>
    )
  } else {
    return <></>
  }
}
