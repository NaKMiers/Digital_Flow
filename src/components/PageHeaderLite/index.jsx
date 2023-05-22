import React, { memo } from 'react'
import styles from './style.module.scss'

function PageHeaderLite({ title }) {
   return (
      <section className={styles.PageHeaderLite}>
         <div className={styles.top}>
            <h1 className={styles.heading}>{title}</h1>
         </div>

         <div className={styles.bottom}>
            <div />
            <div className={styles.desc}>
               <span>We provide a free day to experience our benefits of digital world!</span>
            </div>
            <span className={styles.bottomBackground}>digital</span>
         </div>
      </section>
   )
}

export default memo(PageHeaderLite)
