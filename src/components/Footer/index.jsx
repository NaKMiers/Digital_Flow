import React, { memo, useCallback, useEffect, useRef } from 'react'
import logoFooter from '../../assets/imgs/logo-footer.png'
import twitter from '../../assets/imgs/twitter-color.png'
import facebook from '../../assets/imgs/facebook-color.png'
import pinterest from '../../assets/imgs/pinterest-color.png'
import youtube from '../../assets/imgs/youtube-color.png'
import styles from './style.module.scss'

function Footer() {
   const containerRef = useRef(null)
   const socialWrapRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const footerElements = [...containerRef.current.children]
      const socialElements = [...socialWrapRef.current.children]

      footerElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      const socialTop = socialWrapRef.current.getBoundingClientRect().top
      const socialBottom = socialWrapRef.current.getBoundingClientRect().bottom

      if (socialTop < window.innerHeight && socialBottom > 0) {
         let delay = 0.2
         socialElements.forEach(e => {
            delay += 0.1
            e.style.opacity = 0
            e.style.animation = `flyLeft 0.4s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         })
      }

      // remove event when all are appeared
      let countAppeared = 0
      footerElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      socialElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })

      if (countAppeared === footerElements.length + socialElements.length) {
         console.log('removed---Footer')
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
      <footer className={styles.Footer}>
         <div className={styles.container} ref={containerRef}>
            <div className={styles.logo}>
               <img src={logoFooter} alt='logo' />
            </div>

            <div className={styles.heading}>
               <h1>Marketing and digital products that grow businesses!</h1>
            </div>

            <div className={styles.contactInfo}>
               <span>08 New Hampshire Avenue #100, New Yourk, DC 20037, United States</span>
               <span>
                  Phone: +1 916-875-2235 <br /> Fax: +1 916-875-2235
               </span>
               <span>
                  Email: <a href='mailto:diwas118151@gmail.com'>info@domain.tld</a>
               </span>
            </div>

            <div className={styles.connectUs}>
               <h6>CONNECT WITH US</h6>
               <div className={styles.socialWrap} ref={socialWrapRef}>
                  <div>
                     <img src={twitter} alt='social' />
                     <span>Twitter</span>
                  </div>
                  <div>
                     <img src={facebook} alt='social' />
                     <span>Facebook</span>
                  </div>
                  <div>
                     <img src={pinterest} alt='social' />
                     <span>Pinterest</span>
                  </div>
                  <div>
                     <img src={youtube} alt='social' />
                     <span>Youtube</span>
                  </div>
               </div>
               <p>
                  © Copyright <span>CodexThemes</span>
               </p>
            </div>
         </div>
      </footer>
   )
}

export default memo(Footer)
