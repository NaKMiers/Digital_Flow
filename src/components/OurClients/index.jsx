import React from 'react'
import styles from './style.module.scss'
import { clientBrands } from '../../data'

function OurClients() {
   return (
      <section className={styles.OurClients}>
         <div className={styles.container}>
            <div className={styles.top}>
               <h6>START WORKING WITH US</h6>

               <h1>Our clients</h1>

               <p>
                  Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi
                  labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
            </div>
            <div className={styles.middle}>
               <p>
                  Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi
                  labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
               <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
               </p>
            </div>
            <div className={styles.bottom}>
               <div className={styles.brandWrap}>
                  {clientBrands.map((brand, index) => (
                     <div key={index} className={styles.brandItem}>
                        <a href='/' className={styles.image}>
                           <img src={brand} alt='brand' />
                        </a>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default OurClients
