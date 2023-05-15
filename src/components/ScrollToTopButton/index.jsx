import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

function ScrollToTopButton() {
   const scrollBtnRef = useRef(null)
   const [show, setShow] = useState(false)

   const handleScroll = useCallback(() => {
      if (window.pageYOffset > 100) {
         if (!show) {
            setShow(true)
            scrollBtnRef.current.classList.remove(styles.hide)
            scrollBtnRef.current.style.display = 'flex'
            scrollBtnRef.current.classList.add(styles.show)
         }
      } else {
         if (show) {
            scrollBtnRef.current.classList.remove(styles.show)
            scrollBtnRef.current.classList.add(styles.hide)

            setTimeout(() => {
               scrollBtnRef.current.style.display = 'none'
               setShow(false)
            }, 299) // button duration: 0.3s
         }
      }
   }, [show])

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   const handleScrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }, [])

   return (
      <div className={styles.ScrollToTopButton} ref={scrollBtnRef} onClick={handleScrollToTop}>
         <FontAwesomeIcon icon={faChevronUp} />
      </div>
   )
}

export default ScrollToTopButton
