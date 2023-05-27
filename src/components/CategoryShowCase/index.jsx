import React, { useCallback, useEffect, useRef } from 'react'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'
import styles from './style.module.scss'

function CategoryShowCase() {
   const categoriesRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...categoriesRef.current.children]

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
         console.log('removed---CategoryShowCase')
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
      <section className={styles.CategoryShowCase}>
         <div className={styles.container}>
            <div className={styles.categories} ref={categoriesRef}>
               {categories.map((category, index) => (
                  <CategoryItem data={category} key={index} />
               ))}
            </div>
         </div>
      </section>
   )
}

export default CategoryShowCase
