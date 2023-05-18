import React, { memo } from 'react'
import RecentWorkItem from './RecentWorkItem'
import styles from './style.module.scss'
import { recentWorks } from '../../data'

function RecentWork() {
   return (
      <section className={styles.RecentWork}>
         <div className={styles.textBackground}>work</div>

         <div className={styles.container}>
            {/* part 1 */}
            <div className={styles.part}>
               <div className={styles.coverLetter}>
                  <h6>EXPLORE RECENT WORKS</h6>

                  <div>
                     <span>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore.
                     </span>
                  </div>

                  <button>See all cases</button>
               </div>

               <RecentWorkItem data={recentWorks[0]} />
               <RecentWorkItem data={recentWorks[1]} />
            </div>

            {/* part 2 */}
            <div className={styles.part}>
               <RecentWorkItem data={recentWorks[2]} />
               <RecentWorkItem data={recentWorks[3]} />
            </div>
         </div>
      </section>
   )
}

export default memo(RecentWork)
