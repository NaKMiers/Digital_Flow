import React from 'react'
import styles from './style.module.scss'

function Quote() {
   return (
      <section className={styles.Quote}>
         <div className={styles.gap} />

         <div className={styles.content}>
            <span>
               Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
               velit, sed quia non numquam eius modi tempora incidunt ut labore!
            </span>
            <span>”</span>
         </div>

         <div className={styles.hero} />
      </section>
   )
}

export default Quote
