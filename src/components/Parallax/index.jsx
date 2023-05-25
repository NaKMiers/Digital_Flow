import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Parallax() {
   const prlImageRef = useRef(null)

   const handleScroll = useCallback(() => {
      const scrollTop = window.pageYOffset
      prlImageRef.current.style.backgroundPosition = `center calc(444px + -${scrollTop * 0.5}px)`
   }, [])

   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section className={styles.Parallax}>
         <div className={styles.paralaxImage} ref={prlImageRef}></div>
      </section>
   )
}

export default memo(Parallax)
