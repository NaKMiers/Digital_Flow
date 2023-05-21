import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import ourProcess1 from '../../assets/imgs/ourProcess1.png'
import ourProcess2 from '../../assets/imgs/ourProcess2.png'
import ourProcess3 from '../../assets/imgs/ourProcess3.png'
import ourProcess4 from '../../assets/imgs/ourProcess4.png'
import { Link } from 'react-router-dom'

function OurProcess() {
   const topRef = useRef(null)
   const quickFinderWrapRef = useRef(null)
   const textBgRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const topElements = [...topRef.current.children, textBgRef.current]
      const quickFinderElements = [...quickFinderWrapRef.current.children]

      topElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom
         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      let delay = 0.2
      quickFinderElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom
         if (top < window.innerHeight && bottom > 0) {
            delay += 0.2
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
      quickFinderElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (countAppeared === topElements.length + quickFinderElements.length) {
         console.log('removed---OurProcess')
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
      <section className={styles.OurProcess}>
         <div className={styles.container}>
            <div className={styles.top} ref={topRef}>
               <h6>WE CREATE POWERFUL PROJECTS</h6>
               <h1>Our process</h1>
            </div>

            <div className={styles.quickFinderWrap} ref={quickFinderWrapRef}>
               <Link to='/' className={styles.quickFinderItem}>
                  <div className={styles.icon}>
                     <img src={ourProcess1} alt='quick-finder' />
                  </div>

                  <div className={styles.body}>
                     <p>LUNCHED</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore.
                     </p>
                  </div>
               </Link>

               <div className={styles.quickFinderItem}>
                  <div className={styles.icon}>
                     <img src={ourProcess2} alt='quick-finder' />
                  </div>

                  <div className={styles.body}>
                     <p>PROTOTYPE</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore.
                     </p>
                  </div>
               </div>

               <div className={styles.quickFinderItem}>
                  <div className={styles.icon}>
                     <img src={ourProcess3} alt='quick-finder' />
                  </div>

                  <div className={styles.body}>
                     <p>EXECUTION</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore.
                     </p>
                  </div>
               </div>

               <div className={styles.quickFinderItem}>
                  <div className={styles.icon}>
                     <img src={ourProcess4} alt='quick-finder' />
                  </div>

                  <div className={styles.body}>
                     <p>PREPARETION</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <span className={styles.textBackground} ref={textBgRef}>
            steps
         </span>
      </section>
   )
}

export default memo(OurProcess)
