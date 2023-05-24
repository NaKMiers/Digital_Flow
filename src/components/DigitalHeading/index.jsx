import React, { useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import facebook from '../../assets/imgs/facebook.png'
import twitter from '../../assets/imgs/twitter.png'
import instagram from '../../assets/imgs/instagram.png'
import pinterest from '../../assets/imgs/pinterest.png'
import youtube from '../../assets/imgs/youtube.png'

function DigitalHeading({ data, style }) {
   const topRef = useRef(null)
   const contentRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...topRef.current.children, ...contentRef.current.children]

      // 1
      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })

      if (countAppeared === elements.length) {
         console.log('removed---DigitalHeading')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <section className={styles.DigitalHeading} style={{ ...style }}>
         <div className={styles.top} ref={topRef}>
            <h6>THEGEM DIGITAL AGENCY</h6>
            <h1 className={data?.smallTitle ? styles.smallTitle : ''}>{data?.title}</h1>
         </div>

         <div className={styles.bottom}>
            <div className={styles.hero} />

            <div className={styles.content} ref={contentRef}>
               {data?.desc && (
                  <>
                     {data.desc.map((datum, index) => (
                        <p key={index}>{datum}</p>
                     ))}
                  </>
               )}
               {data?.social && (
                  <div className={styles.social}>
                     <a href='/'>
                        <img src={facebook} alt='social' />
                     </a>
                     <a href='/'>
                        <img src={twitter} alt='social' />
                     </a>
                     <a href='/'>
                        <img src={instagram} alt='social' />
                     </a>
                     <a href='/'>
                        <img src={pinterest} alt='social' />
                     </a>
                     <a href='/'>
                        <img src={youtube} alt='social' />
                     </a>
                  </div>
               )}
            </div>
         </div>
      </section>
   )
}

export default DigitalHeading
