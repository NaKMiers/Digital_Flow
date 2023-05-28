import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import galery1 from '../../assets/imgs/galery1.jpg'
import galery2 from '../../assets/imgs/galery2.jpg'
import galery3 from '../../assets/imgs/galery3.jpg'
import DigitalHeading from '../DigitalHeading'

function DigitalGallery() {
   const textItemRef1 = useRef(null)
   const textItemRef2 = useRef(null)
   const textItemRef3 = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [
         ...textItemRef1.current.children,
         ...textItemRef2.current.children,
         ...textItemRef3.current.children,
      ]
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
         // console.log('removed---DigitalGallery')
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
      <section className={styles.DigitalGallery}>
         <DigitalHeading
            data={{
               title: 'We deliver smart and flexible solutions',
               smallTitle: true,
               desc: [
                  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus!',
               ],
            }}
            style={{ padding: '120px 0 90px' }}
         />

         <div className={styles.container}>
            <div className={`${styles.galeryItem} ${styles.textItem}`} ref={textItemRef1}>
               <h2>Great inspiration</h2>
               <p>
                  Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi
                  labore et dolore. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris
                  nisi ut!
               </p>
               <span className={styles.textBackground}>01</span>
            </div>

            <div className={`${styles.galeryItem} ${styles.imageItem}`}>
               <img src={galery1} alt='galery' />
            </div>

            <div className={`${styles.galeryItem} ${styles.textItem}`} ref={textItemRef2}>
               <h2>Customer focused</h2>
               <p>
                  Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi
                  labore et dolore. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris
                  nisi ut!
               </p>
               <span className={styles.textBackground}>02</span>
            </div>

            <div className={`${styles.galeryItem} ${styles.imageItem}`}>
               <img src={galery2} alt='galery' />
            </div>

            <div className={`${styles.galeryItem} ${styles.textItem}`} ref={textItemRef3}>
               <h2>Smart technology</h2>
               <p>
                  Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi
                  labore et dolore. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris
                  nisi ut!
               </p>
               <span className={styles.textBackground}>03</span>
            </div>

            <div className={`${styles.galeryItem} ${styles.imageItem}`}>
               <img src={galery3} alt='galery' />
            </div>
         </div>
      </section>
   )
}

export default memo(DigitalGallery)
