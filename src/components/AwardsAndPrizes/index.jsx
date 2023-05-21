import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import award from '../../assets/imgs/award.png'

function AwardsAndPrices() {
   const topRef = useRef(null)
   const awardWrapRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...topRef.current.children, ...awardWrapRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
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
      if (countAppeared === elements.length) {
         window.removeEventListener('scroll', handleScrollAnimation)
         console.log('removed---AwardsAndPrices')
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
      <section className={styles.AwardsAndPrizes}>
         <div className={styles.container}>
            <div className={styles.top} ref={topRef}>
               <h6>AWARDS & PRIZES</h6>
               <p>
                  We’re constantly refining our product. Adding new features. Working to help your
                  business grow.
               </p>
            </div>

            <div className={styles.awardsWrap} ref={awardWrapRef}>
               <div className={styles.awardItem}>
                  <div className={styles.image}>
                     <img src={award} alt='award' />
                  </div>

                  <p>DIGITAL MARKETING 2017</p>
                  <p>Award 2017</p>
               </div>

               <div className={styles.awardItem}>
                  <div className={styles.image}>
                     <img src={award} alt='award' />
                  </div>

                  <p>DIGITAL MARKETING 2018</p>
                  <p>Award 2018</p>
               </div>

               <div className={styles.awardItem}>
                  <div className={styles.image}>
                     <img src={award} alt='award' />
                  </div>

                  <p>DIGITAL MARKETING 2019</p>
                  <p>Award 2019</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(AwardsAndPrices)
