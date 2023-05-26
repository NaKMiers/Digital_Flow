import { faFileAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, memo, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

function BlogItem({ data }) {
   const overlayRef = useRef(null)
   const iconWrapRef = useRef(null)

   const handleMouseOver = useCallback(() => {
      overlayRef.current.style.opacity = 1
      iconWrapRef.current.classList.remove(styles.hide)
      iconWrapRef.current.classList.add(styles.show)
   }, [])

   const handleMouseLeave = useCallback(() => {
      overlayRef.current.style.opacity = 0
      iconWrapRef.current.classList.remove(styles.show)
      iconWrapRef.current.classList.add(styles.hide)
   }, [])

   return (
      <Link
         to='/blogs/1'
         className={styles.blogItem}
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
      >
         <div className={styles.thumbnail}>
            <img src={data.thumbnail} alt='thumbnail' />

            <div className={styles.categories}>
               {data.categories.map((category, index) => (
                  <Fragment key={index}>
                     <Link to={`/blogs/${category.toLowerCase()}`}>{category}</Link>
                     {index !== data.categories.length - 1 && ', '}
                  </Fragment>
               ))}
            </div>

            <div className={styles.overlay} ref={overlayRef}>
               <div className={styles.iconWrap} ref={iconWrapRef}>
                  <Link to='/doc' className={styles.iconLink}>
                     <FontAwesomeIcon icon={faFileAlt} />
                  </Link>
               </div>
            </div>
         </div>

         <div className={styles.detail}>
            <p>{data.date}</p>
            <p>{data.title}</p>
            <p>{data.desc}</p>

            <div>
               <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <span>4</span>
               </div>

               <div>
                  <FontAwesomeIcon icon={faShareAlt} />
               </div>
            </div>
         </div>
      </Link>
   )
}

export default memo(BlogItem)
