import React, { memo, useCallback, useEffect, useRef } from 'react'

import BlogItem from './BlogItem'
import styles from './style.module.scss'

function Blogs({ data }) {
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
         console.log('removed---Blogs')
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
      <section className={styles.Blogs}>
         <div className={styles.container} ref={containerRef}>
            {data.map((blog, index) => (
               <BlogItem data={blog} key={index} />
            ))}
         </div>
      </section>
   )
}

export default memo(Blogs)
