import React, { useState } from 'react'
import styles from './style.module.scss'
import Works from '../Works'

function ProductShowCase() {
   const [filter, setFilters] = useState({ category: 'All', sortByName: false, sortByAsc: false })

   return (
      <section className={styles.ProductShowCase}>
         <div className={styles.container}>
            <div className={styles.filterWrap}>
               <div className={styles.filterLeft}>
                  <button
                     className={filter.category === 'All' ? styles.active : ''}
                     onClick={() => setFilters(prev => ({ ...prev, category: 'All' }))}
                  >
                     All
                  </button>
                  <button
                     className={filter.category === 'Branding' ? styles.active : ''}
                     onClick={() => setFilters(prev => ({ ...prev, category: 'Branding' }))}
                  >
                     Branding
                  </button>
                  <button
                     className={filter.category === 'Illustration' ? styles.active : ''}
                     onClick={() => setFilters(prev => ({ ...prev, category: 'Illustration' }))}
                  >
                     Illustration
                  </button>
                  <button
                     className={filter.category === 'Marketing' ? styles.active : ''}
                     onClick={() => setFilters(prev => ({ ...prev, category: 'Marketing' }))}
                  >
                     Marketing
                  </button>
                  <button
                     className={filter.category === 'Web Design' ? styles.active : ''}
                     onClick={() => setFilters(prev => ({ ...prev, category: 'Web Design' }))}
                  >
                     Web Design
                  </button>
               </div>

               <div className={styles.filterRight}>
                  <div
                     className={styles.sort}
                     onClick={() => setFilters(prev => ({ ...prev, sortByName: !prev.sortByName }))}
                  >
                     <span>Date</span>

                     <button className={styles.switchBtn}>
                        <div className={filter.sortByName ? styles.active : ''} />
                     </button>

                     <span>Name</span>
                  </div>

                  <div className={styles.separate} />

                  <div
                     className={styles.sort}
                     onClick={() => setFilters(prev => ({ ...prev, sortByAsc: !prev.sortByAsc }))}
                  >
                     <span>Desc</span>

                     <button className={styles.switchBtn}>
                        <div className={filter.sortByAsc ? styles.active : ''} />
                     </button>

                     <span>Asc</span>
                  </div>
               </div>
            </div>

            <Works cases filter={filter} />
         </div>
      </section>
   )
}

export default ProductShowCase
