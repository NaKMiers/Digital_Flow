import React from 'react'
import styles from './style.module.scss'
import service1 from '../../assets/imgs/service1.png'
import service2 from '../../assets/imgs/service2.png'
import service3 from '../../assets/imgs/service3.png'
import service4 from '../../assets/imgs/service4.png'
import service5 from '../../assets/imgs/service5.png'
import service6 from '../../assets/imgs/service6.png'
import service7 from '../../assets/imgs/service7.png'
import service8 from '../../assets/imgs/service8.png'

function AgencyServices() {
   return (
      <section className={styles.AgencyServices}>
         <div className={styles.top}>
            <h6>SERVICES THEGEM AGENCY</h6>

            <div>
               <div />
               <div>
                  <span>
                     Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi
                     labore et dolore.
                  </span>
               </div>
            </div>
         </div>

         <div className={styles.bottom}>
            <div className={styles.servicesWrap}>
               <a className={styles.serviceItem} href='/'>
                  <div className={styles.service}>
                     <div className={styles.image}>
                        <img src={service1} alt='service' />
                     </div>

                     <div className={styles.content}>
                        <p>01</p>
                        <p>WEB DEVELOPMENT</p>
                     </div>
                  </div>
               </a>

               <a className={styles.serviceItem} href='/'>
                  <div className={styles.service}>
                     <div className={styles.image}>
                        <img src={service2} alt='service' />
                     </div>

                     <div className={styles.content}>
                        <p>02</p>
                        <p>DESIGN</p>
                     </div>
                  </div>
               </a>

               <a className={styles.serviceItem} href='/'>
                  <div className={styles.service}>
                     <div className={styles.image}>
                        <img src={service3} alt='service' />
                     </div>

                     <div className={styles.content}>
                        <p>03</p>
                        <p>BRANDING</p>
                     </div>
                  </div>
               </a>

               <a className={styles.serviceItem} href='/'>
                  <div className={styles.service}>
                     <div className={styles.image}>
                        <img src={service4} alt='service' />
                     </div>

                     <div className={styles.content}>
                        <p>04</p>
                        <p>MARKETING</p>
                     </div>
                  </div>
               </a>

               <a className={styles.serviceItem} href='/'>
                  <div className={styles.service}>
                     <div className={styles.image}>
                        <img src={service5} alt='service' />
                     </div>

                     <div className={styles.content}>
                        <p>05</p>
                        <p>IOS APPS</p>
                     </div>
                  </div>
               </a>

               <a className={styles.serviceItem} href='/'>
                  <div className={styles.service}>
                     <div className={styles.image}>
                        <img src={service6} alt='service' />
                     </div>

                     <div className={styles.content}>
                        <p>06</p>
                        <p>CUSTOM CMS</p>
                     </div>
                  </div>
               </a>

               <a className={styles.serviceItem} href='/'>
                  <div className={styles.service}>
                     <div className={styles.image}>
                        <img src={service7} alt='service' />
                     </div>

                     <div className={styles.content}>
                        <p>07</p>
                        <p>ECOMMERCE</p>
                     </div>
                  </div>
               </a>

               <a className={styles.serviceItem} href='/'>
                  <div className={styles.service}>
                     <div className={styles.image}>
                        <img src={service8} alt='service' />
                     </div>

                     <div className={styles.content}>
                        <p>08</p>
                        <p>UI-UX DESIGN</p>
                     </div>
                  </div>
               </a>
            </div>
         </div>
      </section>
   )
}

export default AgencyServices
