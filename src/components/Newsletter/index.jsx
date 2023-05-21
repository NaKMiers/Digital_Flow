import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Newsletter() {
   const leftRef = useRef(null)
   const rightRef = useRef(null)
   const textBgRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...leftRef.current.children, ...rightRef.current.children, textBgRef.current]

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
         console.log('removed---Newsletter')
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
      <section className={styles.Newsletter}>
         <div className={styles.left} ref={leftRef}>
            <h6>SUBSCRIBE TO OUR FREE</h6>
            <h1>Newsletter</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed usmod tempor incididunt ut
               labore et dolore magna.
            </p>
         </div>

         <div className={styles.right} ref={rightRef}>
            <form className={styles.form}>
               <input type='email' placeholder='Your email address' required />
               <button>SUBSCRIBE</button>
            </form>
         </div>

         <div className={styles.textBackground} ref={textBgRef}>
            subscribe
         </div>
      </section>
   )
}

export default memo(Newsletter)
