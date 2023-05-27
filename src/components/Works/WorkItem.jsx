import { faCamera, faClapperboard, faFileAlt, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

function WorkItem({ data, cases }) {
   const navigate = useNavigate()
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
      <div
         className={styles.workItem}
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         onClick={() => navigate('/cases/1')}
      >
         <div className={`${styles.thumbnail} ${cases ? styles.type2 : ''}`}>
            <img src={data.thumbnail} alt='thumbnail' />

            <div className={`${styles.overlay} ${cases ? styles.type2 : ''}`} ref={overlayRef}>
               {!cases ? (
                  <div className={styles.iconWrap} ref={iconWrapRef}>
                     <Link to='/doc/1' className={styles.iconLink} onClick={e => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faFileAlt} />
                     </Link>
                     <Link to='/link/1' className={styles.iconLink} onClick={e => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faLink} />
                     </Link>
                     <Link to='/img/1' className={styles.iconLink} onClick={e => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faCamera} />
                     </Link>
                     <Link to='/video/1' className={styles.iconLink} onClick={e => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faClapperboard} />
                     </Link>
                  </div>
               ) : (
                  <div className={styles.iconWrap2} ref={iconWrapRef2}>
                     <Link to='/doc/1' className={styles.iconLink} onClick={e => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faFileAlt} />
                     </Link>
                     <Link to='/link/1' className={styles.iconLink} onClick={e => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faLink} />
                     </Link>
                     <Link to='/img/1' className={styles.iconLink} onClick={e => e.stopPropagation()}>
                        <FontAwesomeIcon icon={faCamera} />
                     </Link>
                     <Link to='/video/1' className={styles.iconLink} onClick={e => e.stopPropagation()}>
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
                  <Link
                     key={index}
                     to={`/categories/${category.toLowerCase()}`}
                     onClick={e => e.stopPropagation()}
                  >
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
