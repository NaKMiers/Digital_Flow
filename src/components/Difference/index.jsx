import React from 'react'
import styles from './style.module.scss'
import quickFinder1 from '../../assets/imgs/quickFinder1.png'
import quickFinder2 from '../../assets/imgs/quickFinder2.png'
import quickFinder3 from '../../assets/imgs/quickFinder3.png'
import quickFinder4 from '../../assets/imgs/quickFinder4.png'
import { Link } from 'react-router-dom'

function Difference() {
   return (
      <section className={styles.Difference}>
         <div className={styles.parameters}>
            <div className={styles.paramWrap}>
               <div className={styles.paramItem}>
                  <span>322</span>
                  <span>Completed projects</span>
               </div>

               <div className={styles.paramItem}>
                  <span>487</span>
                  <span>Clients overall</span>
               </div>

               <div className={styles.paramItem}>
                  <span>210</span>
                  <span>Frequent clients</span>
               </div>
            </div>
         </div>
         <div className={styles.paramContent}>
            <h1>What makes us different from others</h1>
            <p>
               Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore
               et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.
            </p>
         </div>

         <div className={styles.quickFinder}>
            <Link to='/' className={styles.quickFinderItem}>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <p>Expert Support</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam
                     </p>
                  </div>

                  <div className={styles.icon}>
                     <img src={quickFinder1} alt='icon' />
                  </div>
               </div>
            </Link>

            <Link to='/' className={styles.quickFinderItem}>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <p>Creative Environment</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam
                     </p>
                  </div>

                  <div className={styles.icon}>
                     <img src={quickFinder2} alt='icon' />
                  </div>
               </div>
            </Link>

            <Link to='/' className={styles.quickFinderItem}>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <p>Award winning team</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam
                     </p>
                  </div>

                  <div className={styles.icon}>
                     <img src={quickFinder3} alt='icon' />
                  </div>
               </div>
            </Link>

            <Link to='/' className={styles.quickFinderItem}>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <p>Safe & secure</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam
                     </p>
                  </div>

                  <div className={styles.icon}>
                     <img src={quickFinder4} alt='icon' />
                  </div>
               </div>
            </Link>
         </div>
      </section>
   )
}

export default Difference
