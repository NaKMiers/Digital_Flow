import React, { memo, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import quickFinder1 from '../../assets/imgs/quickFinder1.png'
import quickFinder2 from '../../assets/imgs/quickFinder2.png'
import quickFinder3 from '../../assets/imgs/quickFinder3.png'
import quickFinder4 from '../../assets/imgs/quickFinder4.png'
import styles from './style.module.scss'

function Difference() {
   const isCounting = useRef(false)

   const paramRef1 = useRef(null)
   const paramRef2 = useRef(null)
   const paramRef3 = useRef(null)

   const parametersRef = useRef(null)
   const contentRef = useRef(null)
   const quickFinderIconRef1 = useRef(null)
   const quickFinderIconRef2 = useRef(null)
   const quickFinderIconRef3 = useRef(null)
   const quickFinderIconRef4 = useRef(null)

   const handleCountingAnimation = useCallback(() => {
      const paramTop = parametersRef.current.getBoundingClientRect().top
      const paramBottom = parametersRef.current.getBoundingClientRect().bottom

      if (paramTop < window.innerHeight && paramBottom > 0) {
         const parameters = [paramRef1, paramRef2, paramRef3]
         parameters.forEach(param => {
            let startValue = 0
            let endValue = parseInt(param.current.getAttribute('data-value'))

            let counter = setInterval(() => {
               startValue += 1
               param.current.textContent = startValue

               if (startValue === endValue) {
                  clearInterval(counter)
               }
            }, 0)
         })
      }
   }, [])

   const handleScrollAnimation = useCallback(() => {
      const topElements = [parametersRef.current, ...contentRef.current.children]
      const quickFinderElements = [
         quickFinderIconRef1.current,
         quickFinderIconRef2.current,
         quickFinderIconRef3.current,
         quickFinderIconRef4.current,
      ]

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
            delay += 0.15
            e.style.opacity = 0
            e.style.animation = `zoomOut 0.6s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      // handle counting
      if (!isCounting.current) {
         isCounting.current = true
         handleCountingAnimation()
      }

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
         console.log('removed---Difference')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [isCounting, handleCountingAnimation])

   // appear on scroll
   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <section className={styles.Difference}>
         <div className={styles.parameters} ref={parametersRef}>
            <div className={styles.paramWrap}>
               <div className={styles.paramItem}>
                  <span data-value={322} ref={paramRef1}>
                     000
                  </span>
                  <span>Completed projects</span>
               </div>

               <div className={styles.paramItem}>
                  <span data-value={487} ref={paramRef2}>
                     000
                  </span>
                  <span>Clients overall</span>
               </div>

               <div className={styles.paramItem}>
                  <span data-value={210} ref={paramRef3}>
                     000
                  </span>
                  <span>Frequent clients</span>
               </div>
            </div>
         </div>

         <div className={styles.paramContent} ref={contentRef}>
            <h1>What makes us different from others</h1>
            <p>
               Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore
               et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.
            </p>
         </div>

         <div className={styles.quickFinder}>
            <Link to='/' className={styles.quickFinderItem}>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <p>Expert Support</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam
                     </p>
                  </div>

                  <div className={styles.icon} ref={quickFinderIconRef1}>
                     <img src={quickFinder1} alt='icon' />
                  </div>
               </div>
            </Link>

            <Link to='/' className={styles.quickFinderItem}>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <p>Creative Environment</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam
                     </p>
                  </div>

                  <div className={styles.icon} ref={quickFinderIconRef2}>
                     <img src={quickFinder2} alt='icon' />
                  </div>
               </div>
            </Link>

            <Link to='/' className={styles.quickFinderItem}>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <p>Award winning team</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam
                     </p>
                  </div>

                  <div className={styles.icon} ref={quickFinderIconRef3}>
                     <img src={quickFinder3} alt='icon' />
                  </div>
               </div>
            </Link>

            <Link to='/' className={styles.quickFinderItem}>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <p>Safe & secure</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam
                     </p>
                  </div>

                  <div className={styles.icon} ref={quickFinderIconRef4}>
                     <img src={quickFinder4} alt='icon' />
                  </div>
               </div>
            </Link>
         </div>
      </section>
   )
}

export default memo(Difference)
