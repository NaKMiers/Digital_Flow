import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { maxSlideIndex, slideLength, slides, oriSlides } from '../../data'
import styles from './style.module.scss'

function Slider() {
   const [slide, setSlide] = useState(1)
   const [sliding, setSliding] = useState(false)
   const slideTrackRef = useRef(null)

   useEffect(() => {
      slideTrackRef.current.style.marginLeft = `calc(-100% * ${slide})`
   }, [slide])

   const nextSlide = useCallback(() => {
      if (!sliding) {
         setSliding(true)
         if (slide === slideLength) {
            setSlide(maxSlideIndex)

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               setSlide(1)
            }, 510) // slideTrack duration: 0.5s

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'all 0.5s ease-in-out'
            }, 550)
         } else {
            setSlide(slide + 1)
         }

         setTimeout(() => {
            setSliding(false)
         }, 550)
      }
   }, [slide, sliding])

   const prevSlide = useCallback(() => {
      if (!sliding) {
         setSliding(true)
         if (slide === 1) {
            setSlide(0)

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               setSlide(slideLength)
            }, 510) // slideTrack duration: 0.5s

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'all 0.5s ease-in-out'
            }, 550)
         } else {
            setSlide(slide - 1)
         }

         setTimeout(() => {
            setSliding(false)
         }, 550)
      }
   }, [slide, sliding])

   return (
      <div className={styles.Slider}>
         <button className={styles.slideBtn} onClick={nextSlide}>
            <FontAwesomeIcon icon={faAngleRight} />
         </button>
         <button className={styles.slideBtn} onClick={prevSlide}>
            <FontAwesomeIcon icon={faAngleLeft} />
         </button>
         <div className={styles.slidePagination}>
            {oriSlides.map((_, index) => (
               <button key={index} onClick={() => setSlide(index + 1)} />
            ))}
         </div>

         <div className={styles.slideTrack} ref={slideTrackRef}>
            {slides.map((slide, index) => (
               <div
                  key={index}
                  className={styles.slide}
                  style={{ background: `url(${slide.background}) no-repeat center / cover` }}
               >
                  <div className={styles.slideBody}>
                     <div className={styles.categories}>
                        <a href='/'>Design</a>, <a href='/'>Interface</a>
                     </div>

                     <h1>{slide.title}</h1>

                     <button>READ MORE</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default memo(Slider)
