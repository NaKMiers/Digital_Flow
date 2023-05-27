import React, { useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import DigitalHeading from '../../components/DigitalHeading'
import LatestProjectItem from './LatestProjectItem'
import { latestProjects } from '../../data'

function LatestProject() {
   const containerRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

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
         console.log('removed---LatestProject')
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
      <section className={styles.LatestProject}>
         <DigitalHeading
            data={{
               title: 'Latest project',
               desc: [
                  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus!',
               ],
            }}
            style={{ padding: '120px 0 90px' }}
         />

         <div className={styles.container} ref={containerRef}>
            {latestProjects.map((project, index) => (
               <LatestProjectItem key={index} data={project} />
            ))}
         </div>
      </section>
   )
}

export default LatestProject
