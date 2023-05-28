import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SubSlider from '../SubSlider'
import styles from './style.module.scss'

function LatestNews() {
   const titleRef = useRef(null)
   const newsRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [titleRef.current, ...newsRef.current.children]

      let delay = 0.2
      elements.forEach(e => {
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
      if (countAppeared === elements.length) {
         // console.log('removed---LatestNews')
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
      <section className={styles.LatestNews}>
         <div className={styles.container}>
            <h1 className={styles.title} ref={titleRef}>
               Latest news from the blog
            </h1>

            <SubSlider />

            <div className={styles.news} ref={newsRef}>
               <div className={styles.newsItem}>
                  <p>November 4, 2020</p>
                  <Link to='/blogs/1' className={styles.link}>
                     How collaborative teams create meaningful things in this time
                  </Link>
                  <p>We provide a free day to experience our benefits of digital world!</p>
                  <div>
                     <div>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>6</span>
                     </div>
                     <div>
                        <FontAwesomeIcon icon={faShareAlt} />
                     </div>
                  </div>
               </div>

               <div className={styles.newsItem}>
                  <p>November 4, 2020</p>
                  <Link to='/blogs/1' className={styles.link}>
                     Can your business become better with new technology?
                  </Link>
                  <p>We provide a free day to experience our benefits of digital world!</p>
                  <div>
                     <div>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>10</span>
                     </div>
                     <div>
                        <FontAwesomeIcon icon={faShareAlt} />
                     </div>
                  </div>
               </div>

               <div className={styles.newsItem}>
                  <p>November 4, 2020</p>
                  <Link to='/blogs/1' className={styles.link}>
                     We are nominated to agency of year for the second time
                  </Link>
                  <p>We provide a free day to experience our benefits of digital world!</p>
                  <div>
                     <div>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>6</span>
                     </div>
                     <div>
                        <FontAwesomeIcon icon={faShareAlt} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(LatestNews)
