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
   const [slide, setSlide] = useState(1)
   const [sliding, setSliding] = useState(false)
   const slideTrackRef = useRef(null)

   const [imageIndex, setImageIndex] = useState(NaN)

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

   return (
      <section className={styles.Industry}>
         <div className={styles.container}>
            <div className={styles.imageItem}>
               <img src={image1} alt='img' />
            </div>

            <div className={styles.progressItem}>
               <p className={styles.text}>
                  Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                  quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                  sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
               </p>

               <div className={styles.progressWrap}>
                  <div className={styles.progress}>
                     <div className={styles.progressLabel}>
                        <span>Programming</span>
                        <span>73%</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div style={{ width: '73%' }} />
                     </div>
                  </div>
                  <div className={styles.progress}>
                     <div className={styles.progressLabel}>
                        <span>Marketing</span>
                        <span>48%</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div style={{ width: '48%' }} />
                     </div>
                  </div>
                  <div className={styles.progress}>
                     <div className={styles.progressLabel}>
                        <span>Design</span>
                        <span>65%</span>
                     </div>
                     <div className={styles.progressBar}>
                        <div style={{ width: '65%' }} />
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

            <div className={styles.imageLinkItem}>
               {imageLinkItems.map((link, index) => (
                  <ImageLinkItem data={link} key={index} index={index} openImageModal={setImageIndex} />
               ))}

               {/* <div className={styles.imageModal} ref={imageModalRef}>
                  <div className={styles.number}>
                     {imageIndex + 1}/{imageLinkItems.length}
                  </div>
                  <div className={styles.buttonWrap}>
                     <button>
                        <FontAwesomeIcon icon={faSearch} />
                     </button>
                     <button>
                        <FontAwesomeIcon icon={faPlay} />
                     </button>
                     <button>
                        <FontAwesomeIcon icon={faX} onClick={handleCloseImageModal} />
                     </button>
                  </div>

                  <button
                     className={`${styles.modalBtn} ${styles.nextBtn}`}
                     onClick={() =>
                        imageIndex === 0
                           ? setImageIndex(imageLinkItems.length - 1)
                           : setImageIndex(imageIndex - 1)
                     }
                  >
                     <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button
                     className={`${styles.modalBtn} ${styles.prevBtn}`}
                     onClick={() =>
                        imageIndex === imageLinkItems.length - 1
                           ? setImageIndex(0)
                           : setImageIndex(imageIndex + 1)
                     }
                  >
                     <FontAwesomeIcon icon={faArrowRight} />
                  </button>

                  <div className={styles.imageModalBody} ref={imageModalBodyref}>
                     <img src={imageLinkItems[imageIndex]} alt='img' onClick={handleZomeIn} />
                  </div>
               </div> */}

               <ImageLinkModal index={imageIndex} setImageIndex={setImageIndex} />
            </div>
         </div>
      </section>
   )
}

export default memo(Industry)
