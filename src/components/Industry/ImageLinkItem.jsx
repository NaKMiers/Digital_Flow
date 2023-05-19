import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

function ImageLinkItem({ index, data, openImageModal }) {
   const overlayRef = useRef(null)
   const iconRef = useRef(null)

   const handleMouseOver = useCallback(() => {
      overlayRef.current.style.opacity = 1
      iconRef.current.classList.remove(styles.hide)
      iconRef.current.classList.add(styles.show)
   }, [])

   const handleMouseLeave = useCallback(() => {
      overlayRef.current.style.opacity = 0
      iconRef.current.classList.remove(styles.show)
      iconRef.current.classList.add(styles.hide)
   }, [])

   return (
      <Link
         className={styles.link}
         to='/'
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         onClick={() => {
            console.log(1323132)
            openImageModal(index)
         }}
      >
         <img src={data} alt='img' />
         <div className={styles.overlay} ref={overlayRef}>
            <div className={styles.icon} ref={iconRef}>
               <FontAwesomeIcon icon={faCamera} />
            </div>
         </div>
      </Link>
   )
}

export default memo(ImageLinkItem)
