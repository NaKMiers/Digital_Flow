import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function StartWorkingWithUs() {
   const containerRef = useRef(null)
   const textBgRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children, textBgRef.current]

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
         console.log('removed---StartWorkingWithUs')
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
      <section className={styles.StartWorkingWithUs}>
         <div className={styles.container} ref={containerRef}>
            <h6>START WORKING WITH US</h6>

            <h1>Experience design and intelligent marketing for growing brands</h1>

            <button>Get started</button>
         </div>

         <div className={styles.textBackground} ref={textBgRef}>
            started
         </div>
      </section>
   )
}

export default memo(StartWorkingWithUs)
