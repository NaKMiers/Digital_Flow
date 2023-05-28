import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Offers() {
   const topRef = useRef(null)
   const pricingTableRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...topRef.current.children, ...pricingTableRef.current.children]

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
         // console.log('removed---Offers')
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
      <section className={styles.Offers}>
         <div className={styles.container}>
            <div className={styles.top} ref={topRef}>
               <h6>SPECIAL OFFERS</h6>
               <p>
                  We’re constantly refining our product. Adding new features. Working to help your
                  business grow.
               </p>
            </div>

            <div className={styles.pricingTable} ref={pricingTableRef}>
               <div className={styles.priceItem}>
                  <div className={styles.priceTitle}>
                     <span>Beginner</span>
                     <span>
                        <span>$99</span> <span>Per Month</span>
                     </span>
                  </div>

                  <div className={styles.features}>
                     <ul className={styles.featuresWrap}>
                        <li>Photo sharing school</li>
                        <li>Drop out ramen hustle</li>
                        <li>Crush revenue traction</li>
                        <li className={styles.removed}>Crush revenue traction</li>
                        <li className={styles.removed}>User base minimum viable</li>
                        <li className={styles.removed}>Lorem ipsum dolor</li>
                     </ul>

                     <div className={styles.orderBtnWrap}>
                        <button>Order</button>
                     </div>
                  </div>
               </div>

               <div className={styles.priceItem}>
                  <div className={`${styles.priceTitle} ${styles.type2}`}>
                     <span>Advanced</span>
                     <span>
                        <span>$199</span> <span>Per Month</span>
                     </span>
                  </div>

                  <div className={styles.features}>
                     <ul className={styles.featuresWrap}>
                        <li>Photo sharing school</li>
                        <li>Drop out ramen hustle</li>
                        <li>Crush revenue traction</li>
                        <li className={styles.removed}>Crush revenue traction</li>
                        <li className={styles.removed}>User base minimum viable</li>
                        <li className={styles.removed}>Lorem ipsum dolor</li>
                     </ul>

                     <div className={styles.orderBtnWrap}>
                        <button>Order</button>
                     </div>
                  </div>
               </div>

               <div className={styles.priceItem}>
                  <div className={styles.priceTitle}>
                     <span>Ultimate</span>
                     <span>
                        <span>$299</span> <span>Per Month</span>
                     </span>
                  </div>

                  <div className={styles.features}>
                     <ul className={styles.featuresWrap}>
                        <li>Photo sharing school</li>
                        <li>Drop out ramen hustle</li>
                        <li>Crush revenue traction</li>
                        <li className={styles.removed}>Crush revenue traction</li>
                        <li className={styles.removed}>User base minimum viable</li>
                        <li className={styles.removed}>Lorem ipsum dolor</li>
                     </ul>

                     <div className={styles.orderBtnWrap}>
                        <button>Order</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(Offers)
