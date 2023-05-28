import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function History() {
   const part1Ref = useRef(null)
   const part2Ref = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [...part1Ref.current.children, ...part2Ref.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.style.opacity = 0
            e.style.animation = `appear 0.8s ease-in-out 0.2s forwards`
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
         // console.log('removed---History')
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
      <section className={styles.History}>
         <div className={styles.container}>
            <div className={styles.part} ref={part1Ref}>
               <div className={styles.historyItem}>
                  <h1 className={styles.year}>2017</h1>

                  <div className={styles.content}>
                     <p>Excepteur sint occaecat cupidatat non proident</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud.
                     </p>
                  </div>
               </div>

               <div className={styles.historyItem}>
                  <h1 className={styles.year}>2018</h1>

                  <div className={styles.content}>
                     <p>Excepteur sint occaecat cupidatat non proident</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud.
                     </p>
                  </div>
               </div>

               <div className={styles.historyItem}>
                  <h1 className={styles.year}>2019</h1>

                  <div className={styles.content}>
                     <p>Excepteur sint occaecat cupidatat non proident</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud.
                     </p>
                  </div>
               </div>

               <div className={styles.historyItem}>
                  <h1 className={styles.year}>2020</h1>

                  <div className={styles.content}>
                     <p>Excepteur sint occaecat cupidatat non proident</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud.
                     </p>
                  </div>
               </div>
            </div>

            <div className={styles.part} ref={part2Ref}>
               <div className={styles.historyItem}>
                  <h1 className={styles.year}>2021</h1>

                  <div className={styles.content}>
                     <p>Excepteur sint occaecat cupidatat non proident</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud.
                     </p>
                  </div>
               </div>
               <div className={styles.historyItem}>
                  <h1 className={styles.year}>2022</h1>

                  <div className={styles.content}>
                     <p>Excepteur sint occaecat cupidatat non proident</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud.
                     </p>
                  </div>
               </div>
               <div className={styles.historyItem}>
                  <h1 className={styles.year}>2023</h1>

                  <div className={styles.content}>
                     <p>Excepteur sint occaecat cupidatat non proident</p>
                     <p>
                        Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                        incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(History)
