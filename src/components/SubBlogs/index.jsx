import React, { memo, useCallback, useEffect, useRef } from 'react'
import { subBlogs } from '../../data'
import SubBlogItem from './SubBlogItem'
import styles from './style.module.scss'

function SubBlogs() {
   const subBlogsRef = useRef(null)

   const flattenArray = useCallback(
      arr =>
         arr.reduce(
            (acc, val) => (Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)),
            []
         ),
      []
   )

   const handleScrollAnimation = useCallback(() => {
      let elements = [...subBlogsRef.current.children].map(s => [...s.children[0].children])
      elements = flattenArray(elements)

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
         // console.log('removed---SubBlogs')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [flattenArray])

   // appear on scroll
   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <section className={styles.SubBlogs} ref={subBlogsRef}>
         {subBlogs.map((subBlog, index) => (
            <SubBlogItem data={subBlog} key={index} />
         ))}
      </section>
   )
}

export default memo(SubBlogs)
