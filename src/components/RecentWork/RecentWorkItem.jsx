import { faCamera, faClapperboard, faFileAlt, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

function WorkItem({ data }) {
   const navigate = useNavigate()
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
      <div
         className={styles.workItem}
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         onClick={() => navigate('/cases')}
      >
         <div className={styles.thumbnail}>
            <img src={data.thumbnail} alt='thumbnail' />

            <div to='/agency' className={styles.overlay} ref={overlayRef}>
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
            </div>
         </div>

         <div className={styles.detail}>
            <p>{data.title}</p>
            <div />
            <div>
               <span>{data.date} </span>
               <Link to={`/categories/${data.category.toLowerCase()}`}>{data.category}</Link>
            </div>
         </div>
      </div>
   )
}

export default memo(WorkItem)
