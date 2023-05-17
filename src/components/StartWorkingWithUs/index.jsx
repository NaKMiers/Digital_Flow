import React, { memo } from 'react'
import styles from './style.module.scss'

function StartWorkingWithUs() {
   return (
      <section className={styles.StartWorkingWithUs}>
         <div className={styles.sectionBody}>
            <h6>START WORKING WITH US</h6>

            <h1>Experience design and intelligent marketing for growing brands</h1>

            <button>Get started</button>
         </div>

         <div className={styles.textBackground}>started</div>
      </section>
   )
}

export default memo(StartWorkingWithUs)
