import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import { clientBrands } from '../../data'

function OurClients() {
   const topRef = useRef(null)
   const middleRef = useRef(null)
   const brandWrapRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...topRef.current.children, ...middleRef.current.children]
      const brandElements = [...brandWrapRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      let delay = 0.2
      brandElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.15
            e.style.opacity = 0
            e.style.animation = `appear 0.8s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      brandElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (countAppeared === elements.length + brandElements.length) {
         // console.log('removed---OurClients')
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
      <section className={styles.OurClients}>
         <div className={styles.container}>
            <div className={styles.top} ref={topRef}>
               <h6>START WORKING WITH US</h6>

               <h1>Our clients</h1>

               <p>
                  Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi
                  labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
            </div>
            <div className={styles.middle} ref={middleRef}>
               <p>
                  Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi
                  labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
               </p>
            </div>

            <div className={styles.bottom}>
               <div className={styles.brandWrap} ref={brandWrapRef}>
                  {clientBrands.map((brand, index) => (
                     <div key={index} className={styles.brandItem}>
                        <a href='/' className={styles.image}>
                           <img src={brand} alt='brand' />
                        </a>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(OurClients)
