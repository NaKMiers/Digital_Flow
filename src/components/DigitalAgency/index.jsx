import React, { useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import facebook from '../../assets/imgs/facebook.png'
import twitter from '../../assets/imgs/twitter.png'
import instagram from '../../assets/imgs/instagram.png'
import pinterest from '../../assets/imgs/pinterest.png'
import youtube from '../../assets/imgs/youtube.png'

function DigitalAgency({ workTogether, style }) {
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
         console.log('removed---DigitalAgency')
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
      <section className={styles.DigitalAgency} style={{ ...style }}>
         <div className={styles.top} ref={topRef}>
            <h6>THEGEM DIGITAL AGENCY</h6>
            <h1>{!workTogether ? 'About Agency' : 'Let’s work together'}</h1>
         </div>

         <div className={styles.bottom}>
            <div className={styles.hero} />

            <div className={styles.content} ref={contentRef}>
               <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum sed ut perspiciatis unde omnis iste natus!
               </p>
               {!workTogether && (
                  <p>
                     Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                     ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                     consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                     quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                     sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                     quaerat voluptatem.
                  </p>
               )}

               {!workTogether && (
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

export default DigitalAgency
