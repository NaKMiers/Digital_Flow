import React from 'react'
import styles from './style.module.scss'

function Newsletter() {
   return (
      <section className={styles.Newsletter}>
         <div className={styles.left}>
            <h6>SUBSCRIBE TO OUR FREE</h6>
            <h1>Newsletter</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed usmod tempor incididunt ut
               labore et dolore magna.
            </p>
         </div>

         <div className={styles.right}>
            <form className={styles.form}>
               <input type='email' placeholder='Your email address' required />
               <button>SUBSCRIBE</button>
            </form>
         </div>

         <div className={styles.textBackground}>subscribe</div>
      </section>
   )
}

export default Newsletter
