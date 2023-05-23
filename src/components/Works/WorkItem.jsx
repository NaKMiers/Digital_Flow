import { faCamera, faClapperboard, faFileAlt, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

function WorkItem({ data, cases }) {
   const overlayRef = useRef(null)
   const iconWrapRef = useRef(null)
   const iconWrapRef2 = useRef(null)

   const handleMouseOver = useCallback(() => {
      overlayRef.current.style.opacity = 1

      if (!cases) {
         iconWrapRef.current.classList.remove(styles.hide)
         iconWrapRef.current.classList.add(styles.show)
      } else {
         iconWrapRef2.current.classList.remove(styles.hide)
         iconWrapRef2.current.classList.add(styles.show)
      }
   }, [cases])

   const handleMouseLeave = useCallback(() => {
      overlayRef.current.style.opacity = 0

      if (!cases) {
         iconWrapRef.current.classList.remove(styles.show)
         iconWrapRef.current.classList.add(styles.hide)
      } else {
         iconWrapRef2.current.classList.remove(styles.show)
         iconWrapRef2.current.classList.add(styles.hide)
      }
   }, [cases])

   return (
      <div className={styles.workItem} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
         <div className={`${styles.thumbnail} ${cases ? styles.type2 : ''}`}>
            <img src={data.thumbnail} alt='thumbnail' />

            <div
               to='/agency'
               className={`${styles.overlay} ${cases ? styles.type2 : ''}`}
               ref={overlayRef}
            >
               {!cases ? (
                  <div className={styles.iconWrap} ref={iconWrapRef}>
                     <Link to='/doc' className={styles.iconLink}>
                        <FontAwesomeIcon icon={faFileAlt} />
                     </Link>
                     <Link to='/link' className={styles.iconLink}>
                        <FontAwesomeIcon icon={faLink} />
                     </Link>
                     <Link to='/cam' className={styles.iconLink}>
                        <FontAwesomeIcon icon={faCamera} />
                     </Link>
                     <Link to='/clip' className={styles.iconLink}>
                        <FontAwesomeIcon icon={faClapperboard} />
                     </Link>
                  </div>
               ) : (
                  <div className={styles.iconWrap2} ref={iconWrapRef2}>
                     <Link to='/doc' className={styles.iconLink}>
                        <FontAwesomeIcon icon={faFileAlt} />
                     </Link>
                     <Link to='/link' className={styles.iconLink}>
                        <FontAwesomeIcon icon={faLink} />
                     </Link>
                     <Link to='/cam' className={styles.iconLink}>
                        <FontAwesomeIcon icon={faCamera} />
                     </Link>
                     <Link to='/clip' className={styles.iconLink}>
                        <FontAwesomeIcon icon={faClapperboard} />
                     </Link>
                  </div>
               )}
            </div>
         </div>

         <div className={styles.detail}>
            <p>{data.title}</p>
            <div />
            <div>
               <span>{data.date} </span>
               {data.categories.map((category, index) => (
                  <Link key={index} to={`/categories/${category.toLowerCase()}`}>
                     {category}
                     {index !== data.categories.length - 1 && <div />}
                  </Link>
               ))}
            </div>
         </div>
      </div>
   )
}

export default memo(WorkItem)
