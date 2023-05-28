import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import DigitalHeading from '../../components/DigitalHeading'
import contact1 from '../../assets/imgs/contact1.png'
import contact2 from '../../assets/imgs/contact2.png'
import contact3 from '../../assets/imgs/contact3.png'

function ContactInfo() {
   const containerRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

      let delay = 0.2
      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.2
            e.style.opacity = 0
            e.style.animation = `appear 0.6s ease-in-out ${delay}s forwards`
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
         // console.log('removed---ContactInfo')
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
      <section className={styles.ContactInfo}>
         <DigitalHeading
            data={{
               title: 'Contact information',
               desc: [
                  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus!',
               ],
            }}
            style={{ padding: '120px 0 90px' }}
         />

         <div className={styles.container} ref={containerRef}>
            <div className={styles.contactItem}>
               <div className={styles.image}>
                  <img src={contact1} alt='icon' />
               </div>
               <div className={styles.content}>
                  <p>AGENCY ADDRESS</p>
                  <p>08 New Hampshire Avenue #100, New Yourk, DC 20037, United States</p>
               </div>
            </div>

            <div className={styles.contactItem}>
               <div className={styles.image}>
                  <img src={contact2} alt='icon' />
               </div>
               <div className={styles.content}>
                  <p>AGENCY PHONES</p>
                  <p>08 New Hampshire Avenue #100, New Yourk, DC 20037, United States</p>
               </div>
            </div>

            <div className={styles.contactItem}>
               <div className={styles.image}>
                  <img src={contact3} alt='icon' />
               </div>
               <div className={styles.content}>
                  <p>AGENCY SUPPORT</p>
                  <p>08 New Hampshire Avenue #100, New Yourk, DC 20037, United States</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(ContactInfo)
