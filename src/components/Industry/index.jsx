import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import image1 from '../../assets/imgs/image1.webp'
import image2 from '../../assets/imgs/image2.webp'
import { imageLinkItems } from '../../data'
import ImageLinkItem from './ImageLinkItem'
import ImageLinkModal from './ImageLinkModal'
import styles from './style.module.scss'

function Industry() {
   const isCounting = useRef(false)

   const [slide, setSlide] = useState(1)
   const [sliding, setSliding] = useState(false)
   const [imageIndex, setImageIndex] = useState(NaN)
   const slideTrackRef = useRef(null)

   const progressItemRef = useRef(null)
   const imageLinkItemRef = useRef(null)
   const progressWrapRef = useRef(null)

   useEffect(() => {
      slideTrackRef.current.style.marginLeft = `calc(-100% * ${slide})`
   }, [slide])

   const nextSlide = useCallback(() => {
      const slideLength = slideTrackRef.current.children.length - 2
      const maxSlideIndex = slideLength + 2 - 1
      const slides = [...slideTrackRef.current.children]

      if (!sliding) {
         setSliding(true)
         if (slide === slideLength) {
            setSlide(maxSlideIndex)
            slides[slide].style.opacity = 0

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               slides[slide].style.opacity = 1
               setSlide(1)
            }, 1010) // slideTrack duration: 1s

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'all 1s ease-in-out'
            }, 1050) // slideTrack duration: 1s
         } else {
            setSlide(slide + 1)
            slides[slide].style.opacity = 0

            setTimeout(() => {
               slides[slide].style.opacity = 1
            }, 990)
         }
         setTimeout(() => {
            setSliding(false)
         }, 1050) // slideTrack duration: 1s
      }
   }, [slide, sliding])

   const prevSlide = useCallback(() => {
      const slideLength = slideTrackRef.current.children.length - 2
      const slides = [...slideTrackRef.current.children]

      if (!sliding) {
         setSliding(true)
         if (slide === 1) {
            setSlide(0)
            slides[slide].style.opacity = 0

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               slides[slide].style.opacity = 1
               setSlide(slideLength)
            }, 1010) // slideTrack duration: 1s

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'all 1s ease-in-out'
            }, 1050) // slideTrack duration: 1s
         } else {
            setSlide(slide - 1)
            slides[slide].style.opacity = 0

            setTimeout(() => {
               slides[slide].style.opacity = 1
            }, 990)
         }
         setTimeout(() => {
            setSliding(false)
         }, 1050) // slideTrack duration: 1s
      }
   }, [slide, sliding])

   useEffect(() => {
      const interval = setInterval(() => {
         nextSlide()
      }, 10000)

      return () => {
         clearInterval(interval)
      }
   }, [nextSlide])

   const handleScrollAnimation = useCallback(() => {
      const progressItemElements = [...progressItemRef.current.children]
      const imageLinkItemElements = [...imageLinkItemRef.current.children]

      // 1
      progressItemElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      // 2
      const top = progressWrapRef.current.getBoundingClientRect().top
      const bottom = progressWrapRef.current.getBoundingClientRect().bottom

      if (top < window.innerHeight && bottom > 0) {
         const progressElements = [...progressWrapRef.current.children]
         progressWrapRef.current.classList.add(styles.appear)

         if (!isCounting.current) {
            isCounting.current = true

            progressElements.forEach(e => {
               const label = e.children[0].children[1]
               const bar = e.children[1].children[0]
               const dataValue = parseInt(label.getAttribute('data-value'))

               bar.style.width = dataValue + '%'

               let startValue = 0
               let endValue = dataValue
               let interval = setInterval(() => {
                  startValue += 1
                  label.textContent = startValue + '%'
                  if (startValue === endValue) {
                     clearInterval(interval)
                  }
               }, 15)
            })
         }
      }

      // 3
      let delay = 0.2
      imageLinkItemElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.2
            e.style.opacity = 0
            e.style.animation = `appear 0.8s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      progressItemElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      imageLinkItemElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (progressWrapRef.current.className.includes(styles.appeared)) {
         countAppeared++
      }
      if (countAppeared === progressItemElements.length + 1 + imageLinkItemElements.length) {
         console.log('removed---Difference')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <section className={styles.Industry}>
         <div className={styles.container}>
            <div className={styles.imageItem}>
               <img src={image1} alt='img' />
            </div>

            <div className={styles.progressItem} ref={progressItemRef}>
               <p className={styles.text}>
                  Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                  quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                  sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
               </p>

               <div className={styles.progressWrap} ref={progressWrapRef}>
                  <div className={styles.progress}>
                     <div className={styles.progressLabel}>
                        <span>Programming</span>
                        <span data-value='73'>0</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div />
                     </div>
                  </div>
                  <div className={styles.progress}>
                     <div className={styles.progressLabel}>
                        <span>Marketing</span>
                        <span data-value='48'>0</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div />
                     </div>
                  </div>
                  <div className={styles.progress}>
                     <div className={styles.progressLabel}>
                        <span>Design</span>
                        <span data-value='65'>0</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div />
                     </div>
                  </div>
               </div>
            </div>

            <div className={styles.sliderItem}>
               <div className={styles.slider}>
                  <button className={`${styles.slideBtn} ${styles.nextBtn}`} onClick={nextSlide}>
                     <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                  <button className={`${styles.slideBtn} ${styles.prevBtn}`} onClick={prevSlide}>
                     <FontAwesomeIcon icon={faChevronLeft} />
                  </button>

                  <div className={styles.slideTrack} ref={slideTrackRef}>
                     <div className={styles.slide}>
                        <p>Jeniffer Burns</p>
                        <p>Creative Heads Inc.</p>

                        <p>
                           The blinding splendor of the diamond. The mighty power of the rocket. Design
                           perfection. The status symbol for any business. Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit!
                        </p>
                        <p>”</p>
                     </div>
                     {/*  */}

                     <div className={styles.slide}>
                        <p>Gordon Edwards</p>
                        <p>Creative Heads Inc.</p>

                        <p>
                           The blinding splendor of the diamond. The mighty power of the rocket. Design
                           perfection. The status symbol for any business. Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit!
                        </p>
                        <p>”</p>
                     </div>

                     <div className={styles.slide}>
                        <p>Jeniffer Burns</p>
                        <p>Creative Heads Inc.</p>

                        <p>
                           The blinding splendor of the diamond. The mighty power of the rocket. Design
                           perfection. The status symbol for any business. Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit!
                        </p>
                        <p>”</p>
                     </div>

                     {/*  */}

                     <div className={styles.slide}>
                        <p>Gordon Edwards</p>
                        <p>Creative Heads Inc.</p>

                        <p>
                           The blinding splendor of the diamond. The mighty power of the rocket. Design
                           perfection. The status symbol for any business. Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit!
                        </p>
                        <p>”</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className={styles.imageItem}>
               <img src={image2} alt='img' />
            </div>

            <div className={styles.imageLinkItem} ref={imageLinkItemRef}>
               {imageLinkItems.map((link, index) => (
                  <ImageLinkItem data={link} key={index} index={index} openImageModal={setImageIndex} />
               ))}
            </div>

            <ImageLinkModal index={imageIndex} setImageIndex={setImageIndex} />
         </div>
      </section>
   )
}

export default memo(Industry)
