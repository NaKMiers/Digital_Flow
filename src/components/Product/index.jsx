import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import member1 from '../../assets/imgs/member1.jpg'
import member2 from '../../assets/imgs/member2.jpg'
import member3 from '../../assets/imgs/member3.jpg'
import productImg1 from '../../assets/imgs/productImg1.jpg'
import productImg2 from '../../assets/imgs/productImg2.jpg'
import productImg3 from '../../assets/imgs/productImg3.jpg'
import productImg4 from '../../assets/imgs/productImg4.jpg'
import productImg5 from '../../assets/imgs/productImg5.jpg'
import ProductImage from './ProductImage'
import styles from './style.module.scss'

const productImages = [productImg1, productImg2, productImg3, productImg4, productImg5]

function Product() {
   const isCounting = useRef(false)
   const diagramWrapRef = useRef(null)

   const topRef = useRef(null)
   const part1Ref = useRef(null)
   const part2Ref = useRef(null)
   const prevBtnRef = useRef(null)
   const nextBtnRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [
         ...topRef.current.children,
         ...part1Ref.current.children,
         ...part2Ref.current.children,
         prevBtnRef.current,
         nextBtnRef.current,
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
         console.log('removed---Product')
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

   const navigate = useNavigate()

   return (
      <section className={styles.Product}>
         <div className={styles.container}>
            {/* Meta & Title */}
            <div className={styles.topPost} ref={topRef}>
               <div className={styles.postMeta}>
                  <div className={styles.left}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCalendar} />
                     </div>
                     <span>November 3, 2020</span>
                     <div className={styles.sep} />
                     <span className={styles.category}>Creative</span>
                     <div className={styles.sep} />
                     <span className={styles.category}>Fashion</span>
                  </div>

                  <div className={styles.right}>
                     <button className={`${styles.icon} ${styles.navIcon}`} onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                     </button>
                     <button className={`${styles.icon} ${styles.navIcon}`} onClick={() => navigate(+1)}>
                        <FontAwesomeIcon icon={faChevronRight} />
                     </button>
                  </div>
               </div>
            </div>

            {/* Content */}
            <div className={styles.contentWrap}>
               <div className={`${styles.part} ${styles.part1}`} ref={part1Ref}>
                  {productImages.map((image, index) => (
                     <ProductImage key={index} data={image} main={index === 0} />
                  ))}
               </div>

               <div className={`${styles.part} ${styles.part2}`} ref={part2Ref}>
                  <h4 className={styles.heading} style={{ marginTop: -8 }}>
                     Description
                  </h4>

                  <div className={styles.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                     </p>
                  </div>

                  <div className={styles.quote}>
                     <p>…Lorem Ipsum proin gravida nibh vel velit aliquet.</p>
                     <span>”</span>
                  </div>

                  <div className={styles.text} style={{ marginBottom: 32 }}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                     </p>
                  </div>

                  <h4 className={styles.heading}>Diagram Title</h4>

                  <div className={styles.diagramWrap} ref={diagramWrapRef}>
                     <div className={styles.diagram}>
                        <div className={styles.diagramLabel}>
                           <span>Databases</span>
                           <span data-value='89'>89%</span>
                        </div>
                        <div className={styles.diagramBar}>
                           <div />
                        </div>
                     </div>
                     <div className={styles.diagram}>
                        <div className={styles.diagramLabel}>
                           <span>Programming</span>
                           <span data-value='73'>73%</span>
                        </div>
                        <div className={styles.diagramBar}>
                           <div />
                        </div>
                     </div>
                     <div className={styles.diagram}>
                        <div className={styles.diagramLabel}>
                           <span>Marketing</span>
                           <span data-value='48'>48%</span>
                        </div>
                        <div className={styles.diagramBar}>
                           <div />
                        </div>
                     </div>
                     <div className={styles.diagram}>
                        <div className={styles.diagramLabel}>
                           <span>Design</span>
                           <span data-value='65'>65%</span>
                        </div>
                        <div className={styles.diagramBar}>
                           <div />
                        </div>
                     </div>
                  </div>

                  <h4 className={styles.heading} style={{ marginBottom: 58 }}>
                     Team members
                  </h4>

                  <div className={styles.teamMembersWrap}>
                     <div className={styles.teamMember}>
                        <div className={styles.avatar}>
                           <img src={member1} alt='avatar' />
                        </div>

                        <div className={styles.detailInfo}>
                           <p>Emerson Anderson</p>
                           <p>Senior Sales Manager</p>
                           <a href='tel:+1 (987) 1625346'>+1 (987) 1625346</a>
                        </div>
                     </div>

                     <div className={styles.teamMember}>
                        <div className={styles.avatar}>
                           <img src={member2} alt='avatar' />
                        </div>

                        <div className={styles.detailInfo}>
                           <p>Gordon Edwards</p>
                           <p>Graphic Designer</p>
                           <a href='tel:+1 (987) 1625346'>+1 (987) 1625346</a>
                        </div>
                     </div>

                     <div className={styles.teamMember}>
                        <div className={styles.avatar}>
                           <img src={member3} alt='avatar' />
                        </div>

                        <div className={styles.detailInfo}>
                           <p>Jackie Jackson</p>
                           <p>Graphic Designer</p>
                           <a href='tel:+1 (987) 1625346'>+1 (987) 1625346</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Nav Button Bottom */}
            <button className={`${styles.bottomBtn} ${styles.prevBtn}`} ref={prevBtnRef}>
               <div>
                  <FontAwesomeIcon icon={faChevronLeft} />
               </div>
               <span>PREV</span>
            </button>
            <button className={`${styles.bottomBtn} ${styles.nextBtn}`} ref={nextBtnRef}>
               <div>
                  <FontAwesomeIcon icon={faChevronLeft} />
               </div>
               <span>NEXT</span>
            </button>
         </div>
      </section>
   )
}

export default Product
