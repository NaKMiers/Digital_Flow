import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import standFor1 from '../../assets/imgs/standFor1.png'
import standFor2 from '../../assets/imgs/standFor2.png'
import standFor3 from '../../assets/imgs/standFor3.png'

function WeStandFor() {
   const topRef = useRef(null)
   const quickFindersRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const topElements = [...topRef.current.children]
      const quickFindersElements = [...quickFindersRef.current.children]

      topElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom
         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      let delay = 0.2
      quickFindersElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom
         if (top < window.innerHeight && bottom > 0) {
            delay += 0.15
            e.style.opacity = 0
            e.style.animation = `zoomOut 0.6s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      topElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      quickFindersElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (countAppeared === topElements.length + quickFindersElements.length) {
         console.log('removed---WeStandFor')
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
      <section className={styles.WeStandFor}>
         <div className={styles.container}>
            <div className={styles.top} ref={topRef}>
               <h6>WHAT WE STAND FOR?</h6>
               <p>
                  We’re constantly refining our product. Adding new features. Working to help your
                  business grow.
               </p>
            </div>

            <div className={styles.quickFinders} ref={quickFindersRef}>
               <div className={styles.quickFinderItem}>
                  <div className={styles.quickFinderBody}>
                     <div className={styles.icon}>
                        <img src={standFor1} alt='stand-for' />
                     </div>

                     <div className={styles.content}>
                        <p>MISSION</p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore.
                        </p>
                     </div>
                  </div>
               </div>

               <div className={styles.quickFinderItem}>
                  <div className={styles.quickFinderBody}>
                     <div className={styles.icon}>
                        <img src={standFor2} alt='stand-for' />
                     </div>

                     <div className={styles.content}>
                        <p>VISION</p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore.
                        </p>
                     </div>
                  </div>
               </div>

               <div className={styles.quickFinderItem}>
                  <div className={styles.quickFinderBody}>
                     <div className={styles.icon}>
                        <img src={standFor3} alt='stand-for' />
                     </div>

                     <div className={styles.content}>
                        <p>PEOPLE</p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(WeStandFor)
