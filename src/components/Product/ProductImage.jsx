import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

function ProductImage({ data, main }) {
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
         className={`${styles.productImage} ${main ? styles.main : styles.secondary}`}
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         onClick={() => navigate('/img/1')}
      >
         <div>
            <img src={data} alt='product' />
            <div className={styles.overlay} ref={overlayRef}>
               <div className={styles.iconWrap} ref={iconWrapRef}>
                  <Link to='/imgs/1' className={styles.iconLink}>
                     <FontAwesomeIcon icon={faCamera} />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductImage
