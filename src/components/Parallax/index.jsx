import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Parallax() {
   const parallaxRef = useRef(null)
   const prlImageRef = useRef(null)

   const handleScroll = useCallback(() => {
      const width = parallaxRef.current.clientWidth
      const scrollTop = window.pageYOffset
      prlImageRef.current.style.backgroundPositionY = `calc(0px + -${scrollTop * 0.1}px)`

      if (width < 780 && width > 420) {
         prlImageRef.current.style.transform = 'scale(1.2)'
         prlImageRef.current.style.backgroundPositionY = `calc(135px + -${scrollTop * 0.08}px)`
      } else if (width < 420) {
         prlImageRef.current.style.transform = 'scale(1.3)'
         prlImageRef.current.style.backgroundPositionY = `calc(115px + -${scrollTop * 0.05}px)`
      }
   }, [])

   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section className={styles.Parallax} ref={parallaxRef}>
         <div className={styles.paralaxImage} ref={prlImageRef}></div>
      </section>
   )
}

export default memo(Parallax)
