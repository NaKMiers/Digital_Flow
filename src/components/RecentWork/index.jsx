import React, { memo, useCallback, useEffect, useRef } from 'react'
import RecentWorkItem from './RecentWorkItem'
import styles from './style.module.scss'
import { recentWorks } from '../../data'

function RecentWork() {
   const part1Ref = useRef(null)
   const part2Ref = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...part1Ref.current.children, ...part2Ref.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (countAppeared === elements.length) {
         console.log('removed---RecentWork')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)
      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <section className={styles.RecentWork}>
         <div className={styles.textBackground}>work</div>

         <div className={styles.container}>
            {/* part 1 */}
            <div className={styles.part} ref={part1Ref}>
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
            <div className={styles.part} ref={part2Ref}>
               <RecentWorkItem data={recentWorks[2]} />
               <RecentWorkItem data={recentWorks[3]} />
            </div>
         </div>
      </section>
   )
}

export default memo(RecentWork)
