import React, { memo } from 'react'
import logoFooter from '../../assets/imgs/logo-footer.png'
import twitter from '../../assets/imgs/twitter-color.png'
import facebook from '../../assets/imgs/facebook-color.png'
import pinterest from '../../assets/imgs/pinterest-color.png'
import youtube from '../../assets/imgs/youtube-color.png'
import styles from './style.module.scss'

function Footer() {
   return (
      <footer className={styles.Footer}>
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
            <div className={styles.socialWrap}>
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
      </footer>
   )
}

export default memo(Footer)
