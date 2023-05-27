import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import serviceImage1 from '../../assets/imgs/serviceImage1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ServiceContent() {
   const [panel, setPanel] = useState(1)

   const topContentRef = useRef(null)
   const panelWrapRef = useRef(null)
   const descriptionRef = useRef(null)
   const imageRef = useRef(null)
   const diagramContentRef = useRef(null)
   const diagramWrapRef = useRef(null)
   const isCounting = useRef(false)

   const handleScrollAnimation = useCallback(() => {
      const elements = [
         ...topContentRef.current.children,
         ...panelWrapRef.current.children,
         descriptionRef.current,
         imageRef.current,
         ...diagramContentRef.current.children,
      ]

      // 1
      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      // 2
      const top = diagramWrapRef.current.getBoundingClientRect().top
      const bottom = diagramWrapRef.current.getBoundingClientRect().bottom

      if (top < window.innerHeight && bottom > 0) {
         const diagramElements = [...diagramWrapRef.current.children]
         diagramWrapRef.current.classList.add(styles.appear)

         if (!isCounting.current) {
            isCounting.current = true

            diagramElements.forEach(e => {
               const label = e.children[0].children[1]
               const bar = e.children[1].children[0]
               const dataValue = parseInt(label.getAttribute('data-value'))

               bar.style.width = dataValue + '%'

               let startValue = 0
               let endValue = dataValue
               let interval = setInterval(() => {
                  startValue += 1
                  label.textContent = startValue + '%'
                  if (startValue === endValue) {
                     clearInterval(interval)
                  }
               }, 15)
            })
         }
      }

      // remove event when all are appeared
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (diagramWrapRef.current.className.includes(styles.appeared)) {
         countAppeared++
      }
      if (countAppeared === elements.length + 1) {
         console.log('removed---ServiceContent')
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
      <section className={styles.ServiceContent}>
         <div className={styles.container}>
            {/* 1 */}
            <div className={styles.topContent} ref={topContentRef}>
               <p className={styles.title}>LOREM IPSUM DOLOR SIIT AMET ELIT</p>
               <p className={styles.text}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum sed ut perspiciatis unde omnis iste natus! Sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
               </p>
            </div>

            {/* 2 */}
            <div className={styles.panelWrap} ref={panelWrapRef}>
               <div className={`${styles.panelItem} ${panel === 1 ? styles.active : ''}`}>
                  <div className={styles.panelTitle} onClick={() => setPanel(1)}>
                     <div>
                        <FontAwesomeIcon icon={faPlus} />
                     </div>
                     <span>OFFICE MANAGER</span>
                  </div>

                  <div className={styles.panelContent}>
                     <div>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur.
                        </p>
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                           error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis!
                        </p>
                     </div>
                  </div>
               </div>

               <div className={`${styles.panelItem} ${panel === 2 ? styles.active : ''}`}>
                  <div className={styles.panelTitle} onClick={() => setPanel(2)}>
                     <div>
                        <FontAwesomeIcon icon={faPlus} />
                     </div>
                     <span>CREATIVE DESIGNER</span>
                  </div>

                  <div className={styles.panelContent}>
                     <div>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur.
                        </p>
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                           error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis!
                        </p>
                     </div>
                  </div>
               </div>

               <div className={`${styles.panelItem} ${panel === 3 ? styles.active : ''}`}>
                  <div className={styles.panelTitle} onClick={() => setPanel(3)}>
                     <div>
                        <FontAwesomeIcon icon={faPlus} />
                     </div>
                     <span>CREATIVE DEVELOPER</span>
                  </div>

                  <div className={styles.panelContent}>
                     <div>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur.
                        </p>
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                           error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis!
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* 3 */}
            <div className={styles.description} ref={descriptionRef}>
               <p className={styles.text}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
               </p>
            </div>

            {/* 4 */}
            <div className={styles.image} ref={imageRef}>
               <img src={serviceImage1} alt='service' />
            </div>

            {/* 5 */}
            <div className={styles.diagramContent} ref={diagramContentRef}>
               <p className={styles.title}>LOREM IPSUM DOLOR SIIT AMET ELIT</p>
               <p className={styles.text} style={{ marginBottom: 35 }}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
               </p>

               <div className={styles.diagramWrap} ref={diagramWrapRef}>
                  <div className={styles.diagram}>
                     <div className={styles.diagramLabel}>
                        <span>Programming</span>
                        <span data-value='73'>0</span>
                     </div>
                     <div className={styles.diagramBar}>
                        <div />
                     </div>
                  </div>
                  <div className={styles.diagram}>
                     <div className={styles.diagramLabel}>
                        <span>Marketing</span>
                        <span data-value='48'>0</span>
                     </div>
                     <div className={styles.diagramBar}>
                        <div />
                     </div>
                  </div>
                  <div className={styles.diagram}>
                     <div className={styles.diagramLabel}>
                        <span>Design</span>
                        <span data-value='65'>0</span>
                     </div>
                     <div className={styles.diagramBar}>
                        <div />
                     </div>
                  </div>
               </div>

               <p className={styles.text} style={{ marginTop: 25 }}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
               </p>
            </div>
         </div>
      </section>
   )
}

export default ServiceContent
