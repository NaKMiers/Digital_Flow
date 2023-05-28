import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import facebook from '../../assets/imgs/facebook-color.png'
import twitter from '../../assets/imgs/twitter-color.png'
import instagram from '../../assets/imgs/instagram-color.png'
import youtube from '../../assets/imgs/youtube-color.png'
import pinterest from '../../assets/imgs/pinterest-color.png'

function VisitUs() {
   const containerRef = useRef(null)
   const socialsWrapRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      let topElements = [...containerRef.current.children]
      topElements = topElements.slice(0, topElements.length)
      const socialsWrapElements = [...socialsWrapRef.current.children]

      topElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      let delay = 0.2
      socialsWrapElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.15
            e.style.opacity = 0
            e.style.animation = `zoomOut 0.6s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      topElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      socialsWrapElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (countAppeared === topElements.length + socialsWrapElements.length) {
         // console.log('removed---VisitUs')
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
      <section className={styles.VisitUs}>
         <div className={styles.container} ref={containerRef}>
            <p>VISIT US IN SOCIAL NETWORKS</p>

            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua.
            </p>

            <div className={styles.socialsWrap} ref={socialsWrapRef}>
               <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
                  <img src={facebook} alt='social' />
               </a>
               <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <img src={twitter} alt='social' />
               </a>
               <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                  <img src={instagram} alt='social' />
               </a>
               <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
                  <img src={youtube} alt='social' />
               </a>
               <a href='https://www.pinterest.com' target='_blank' rel='noreferrer'>
                  <img src={pinterest} alt='social' />
               </a>
            </div>
         </div>
      </section>
   )
}

export default memo(VisitUs)
