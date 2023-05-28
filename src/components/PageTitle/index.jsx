import React, { memo } from 'react'
import styles from './style.module.scss'

function PageTitle() {
   return (
      <section className={styles.PageTitle}>
         <div />
         <div>
            <h1>Web development</h1>
         </div>
         <div>
            <div />
         </div>
      </section>
   )
}

export default memo(PageTitle)
