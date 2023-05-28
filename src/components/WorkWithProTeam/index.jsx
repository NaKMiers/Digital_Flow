import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

function WorkWithProTeam() {
   const navigate = useNavigate()
   const containerRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

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
         // console.log('removed---WorkWithProTeam')
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
      <section className={styles.WorkWithProTeam}>
         <div className={styles.container} ref={containerRef}>
            <h6>WORK WITH PRO TEAM</h6>

            <h1>Would you like to have professional project? Let’s talk about it!</h1>

            <button onClick={() => navigate('/contact')}>Get started</button>
         </div>
      </section>
   )
}

export default memo(WorkWithProTeam)
