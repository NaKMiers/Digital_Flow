import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { subSlides } from '../../data'
import styles from './style.module.scss'

function SubSlider({ style }) {
   const [slide, setSlide] = useState(1)
   const slideTrackRef = useRef(null)

   useEffect(() => {
      slideTrackRef.current.style.marginLeft = `calc(-100% * ${slide - 1})`
   }, [slide])

   return (
      <div className={styles.SubSlider} style={{ ...style }}>
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

                     <button>READ MORE</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default SubSlider
