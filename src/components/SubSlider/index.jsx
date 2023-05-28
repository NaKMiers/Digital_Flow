import React, { Fragment, memo, useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { subSlides } from '../../data'
import styles from './style.module.scss'

function SubSlider({ style }) {
   const navigate = useNavigate()

   const [slide, setSlide] = useState(1)
   const subSliderRef = useRef(null)
   const slideTrackRef = useRef(null)

   useEffect(() => {
      slideTrackRef.current.style.marginLeft = `calc(-100% * ${slide - 1})`
   }, [slide])

   const handleScrollAnimation = useCallback(() => {
      const top = subSliderRef.current.getBoundingClientRect().top
      const bottom = subSliderRef.current.getBoundingClientRect().bottom

      if (top < window.innerHeight && bottom > 0) {
         subSliderRef.current.classList.add('appear')
         subSliderRef.current.classList.add(styles.appeared)

         // remove event when all are appeared
         // console.log('removed---SubSlider')
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
      <div className={styles.SubSlider} style={{ ...style }} ref={subSliderRef}>
         <div className={styles.slidePagination}>
            {subSlides.map((_, index) => (
               <button
                  key={index}
                  className={index + 1 === slide ? styles.active : ''}
                  onClick={() => setSlide(index + 1)}
               />
            ))}
         </div>

         <div className={styles.slideTrack} ref={slideTrackRef}>
            {subSlides.map((subSlide, index) => (
               <div
                  key={index}
                  className={styles.slide}
                  style={{ background: `url(${subSlide.background}) no-repeat center / cover` }}
               >
                  <div className={styles.slideBody}>
                     <div className={styles.categories}>
                        {subSlide.categories.map((category, index) => (
                           <Fragment key={index}>
                              <Link to={`/categories/${category.toLowerCase()}`}>{category}</Link>
                              {index !== subSlide.categories.length - 1 && ', '}
                           </Fragment>
                        ))}
                     </div>

                     <h1>{subSlide.title}</h1>

                     <button onClick={() => navigate('/blogs/1')}>READ MORE</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default memo(SubSlider)
