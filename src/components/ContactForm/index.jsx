import React, { useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import DigitalHeading from '../DigitalHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

function ContactForm() {
   const topFormRef = useRef(null)
   const middleFormRef = useRef(null)
   const bottomFormRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const topFormElements = [...topFormRef.current.children]
      const bottomFormElements = [middleFormRef.current, bottomFormRef.current]

      let delay = 0.2
      topFormElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.15
            e.style.opacity = 0
            e.style.animation = `appear 0.8s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      bottomFormElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      topFormElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      bottomFormElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (countAppeared === topFormElements.length + bottomFormElements.length) {
         console.log('removed---ContactForm')
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
      <section className={styles.ContactForm}>
         <DigitalHeading
            data={{
               title: 'Contact form',
               subTitle: 'TO REQUEST MORE INFORMATION',
               desc: [
                  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus!',
               ],
            }}
            style={{ padding: '120px 0 90px' }}
         />

         <div className={styles.container}>
            <form className={styles.form}>
               <div className={styles.topForm} ref={topFormRef}>
                  <div>
                     <input name='name' type='text' placeholder='Name*' required />
                     <div>
                        <FontAwesomeIcon icon={faUser} />
                     </div>
                  </div>
                  <div>
                     <input name='email' type='email' placeholder='Email*' required />
                     <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                     </div>
                  </div>
                  <div>
                     <input name='website' type='url' placeholder='Website' />
                     <div>
                        <FontAwesomeIcon icon={faGlobe} />
                     </div>
                  </div>
               </div>

               <div className={styles.middleForm} ref={middleFormRef}>
                  <textarea name='message' rows='10' placeholder='Message' required></textarea>
               </div>

               <div className={styles.bottomForm} ref={bottomFormRef}>
                  <button>Submit message</button>
               </div>
            </form>
         </div>
      </section>
   )
}

export default ContactForm
