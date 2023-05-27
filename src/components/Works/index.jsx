import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { recentWorks, works } from '../../data'
import WorkItem from './WorkItem'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

function Works({ cases, filter }) {
   const navigate = useNavigate()
   const partRef = useRef(null)
   const part1Ref = useRef(null)
   const part2Ref = useRef(null)
   const [data, setData] = useState(works)

   useEffect(() => {
      if (cases && filter) {
         let newData = []
         newData = works.filter(
            work => work.categories.includes(filter.category) || filter.category === 'All'
         )

         // sort by name or date
         if (filter.sortByName) {
            newData.sort((a, b) => {
               let titleA = a.title.toLowerCase()
               let titleB = b.title.toLowerCase()
               return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
            })
         } else {
            newData.sort((a, b) => {
               return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0
            })
         }
         // desc or asc
         newData = newData.reverse()
         if (filter.sortByAsc) {
            newData = newData.reverse()
         }
         setData(newData)
      }
   }, [cases, filter])

   const handleScrollAnimation = useCallback(() => {
      let elements = []
      if (!cases) {
         elements = [...part1Ref.current.children, ...part2Ref.current.children]
      } else {
         elements = [...partRef.current.children]
      }

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
         console.log('removed---Works')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [cases])

   // appear on scroll
   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)
      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <section className={styles.Works}>
         <div className={styles.container} style={cases && { padding: 0 }}>
            {!cases ? (
               <>
                  <div className={styles.part} ref={part1Ref}>
                     <div className={styles.coverLetter}>
                        <h6>EXPLORE RECENT WORKS</h6>

                        <div>
                           <span>
                              Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod
                              tempor incidi labore et dolore.
                           </span>
                        </div>

                        <button onClick={() => navigate('/cases')}>See all cases</button>
                     </div>

                     <WorkItem data={recentWorks[0]} />
                     <WorkItem data={recentWorks[1]} />
                  </div>

                  {/* part 2 */}
                  <div className={styles.part} ref={part2Ref}>
                     <WorkItem data={recentWorks[2]} />
                     <WorkItem data={recentWorks[3]} />
                  </div>
               </>
            ) : (
               <>
                  <div className={`${styles.part} ${styles.fullWidth}`} ref={partRef}>
                     {data.map((work, index) => (
                        <WorkItem data={work} cases key={index} />
                     ))}
                  </div>
               </>
            )}
         </div>

         <div className={styles.textBackground}>work</div>
      </section>
   )
}

export default memo(Works)
