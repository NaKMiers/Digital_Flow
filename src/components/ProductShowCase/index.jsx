import React, { useState } from 'react'
import styles from './style.module.scss'
import Works from '../Works'

function ProductShowCase() {
   const [category, setCategories] = useState('all')
   const [sort1, setSort1] = useState(false)
   const [sort2, setSort2] = useState(false)

   return (
      <section className={styles.ProductShowCase}>
         <div className={styles.container}>
            <div className={styles.filterWrap}>
               <div className={styles.filterLeft}>
                  <button
                     className={category === 'all' ? styles.active : ''}
                     onClick={() => setCategories('all')}
                  >
                     All
                  </button>
                  <button
                     className={category === 'branding' ? styles.active : ''}
                     onClick={() => setCategories('branding')}
                  >
                     Branding
                  </button>
                  <button
                     className={category === 'illustration' ? styles.active : ''}
                     onClick={() => setCategories('illustration')}
                  >
                     Illustration
                  </button>
                  <button
                     className={category === 'marketing' ? styles.active : ''}
                     onClick={() => setCategories('marketing')}
                  >
                     Marketing
                  </button>
                  <button
                     className={category === 'web-design' ? styles.active : ''}
                     onClick={() => setCategories('web-design')}
                  >
                     Web Design
                  </button>
               </div>

               <div className={styles.filterRight}>
                  <div className={styles.sort} onClick={() => setSort1(!sort1)}>
                     <span>Date</span>

                     <button className={styles.switchBtn}>
                        <div className={sort1 ? styles.active : ''} />
                     </button>

                     <span>Name</span>
                  </div>

                  <div className={styles.separate} />

                  <div className={styles.sort} onClick={() => setSort2(!sort2)}>
                     <span>Desc</span>

                     <button className={styles.switchBtn}>
                        <div className={sort2 ? styles.active : ''} />
                     </button>

                     <span>Asc</span>
                  </div>
               </div>
            </div>

            <Works cases />
         </div>
      </section>
   )
}

export default ProductShowCase
