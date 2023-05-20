import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function PageHeader() {
   const transHeadingRef = useRef(null)
   const shutterRef = useRef(null)
   const descRef = useRef(null)

   // heading transition
   useEffect(() => {
      const slides = ['0%', '-100%', '-200%', '-300%']
      let curSlide = 0

      let timout1
      let timout2
      const interval = setInterval(() => {
         transHeadingRef.current.style.setProperty('--slide', slides[curSlide])
         curSlide = curSlide === slides.length - 1 ? 0 : curSlide + 1

         timout1 = setTimeout(() => {
            shutterRef.current.style.width = '100%'
            transHeadingRef.current.classList.remove(styles.show)
            transHeadingRef.current.classList.add(styles.hide)
         }, 2000) // duration: 0.5s ==> 2000 + 500 = 2500

         timout2 = setTimeout(() => {
            shutterRef.current.style.width = '0'
            transHeadingRef.current.classList.remove(styles.hide)
            transHeadingRef.current.classList.add(styles.show)
         }, 2550) // delay: 2550 - 2500 = 0
      }, 2500)

      return () => {
         clearInterval(interval)
         clearTimeout(timout1)
         clearTimeout(timout2)
      }
   }, [])

   const handleScrollAnimation = useCallback(() => {
      const top = descRef.current.getBoundingClientRect().top
      const bottom = descRef.current.getBoundingClientRect().bottom

      if (top < window.innerHeight && bottom > 0) {
         descRef.current.classList.add(styles.split)
         console.log('removed---PageHeader')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScrollAnimation() // active after first load
      window.addEventListener('scroll', handleScrollAnimation)
      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <section className={styles.PageHeader}>
         <div className={styles.top}>
            <div className={styles.heading}>
               <span>Digital</span> <span>Marketing.</span>
            </div>
            <div className={styles.heading}>
               <span>Creative</span>
               <span className={styles.transitionHeading}>
                  <span className={styles.slideTrack} ref={transHeadingRef}>
                     <span>Design.</span>
                     <span style={{ paddingLeft: 8 }}>Vision.</span>
                     <span>Ideas.</span>
                     <span style={{ paddingLeft: 4 }}>Coding.</span>
                     <div className={styles.shutter} ref={shutterRef} />
                  </span>
               </span>
            </div>
         </div>
         <div className={styles.bottom}>
            <div />
            <div className={styles.desc} ref={descRef}>
               <span>
                  <span>Lorem</span>
               </span>{' '}
               <span>
                  <span>ipsum</span>
               </span>{' '}
               <span>
                  <span>dolor</span>
               </span>{' '}
               <span>
                  <span>sit</span>
               </span>{' '}
               <span>
                  <span>ametcon</span>
               </span>{' '}
               <span>
                  <span>sectetur</span>
               </span>{' '}
               <span>
                  <span>adipisicing</span>
               </span>{' '}
               <span>
                  <span>elit</span>,
               </span>{' '}
               <span>
                  <span>sed</span>
               </span>{' '}
               <span>
                  <span>doiusmod</span>
               </span>{' '}
               <span>
                  <span>tempor</span>
               </span>{' '}
               <span>
                  <span>incidi</span>
               </span>{' '}
               <span>
                  <span>labore</span>
               </span>{' '}
               <span>
                  <span>et</span>
               </span>{' '}
               <span>
                  <span>dolore</span>.
               </span>
            </div>
            <span className={styles.bottomBackground}>digital</span>
         </div>
      </section>
   )
}

export default memo(PageHeader)
