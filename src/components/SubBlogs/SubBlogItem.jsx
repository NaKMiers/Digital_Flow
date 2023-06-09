import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import admin from '../../assets/imgs/admin.jpg'
import styles from './style.module.scss'

function SubBlogItem({ data }) {
   const overlayRef = useRef(null)
   const authorRef = useRef(null)

   const handleMouseOver = useCallback(() => {
      overlayRef.current.style.background = 'rgba(0, 0, 0, 0.7)'
   }, [])

   const handleMouseLeave = useCallback(() => {
      overlayRef.current.style.background = 'rgba(0, 0, 0, 0)'
   }, [])

   return (
      <Link
         to='/blogs/1'
         className={styles.subBlogItem}
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
      >
         <div className={styles.blogItemBody}>
            <div className={styles.thumbnail}>
               <img src={data.thumbnail} alt='thumbnail' />

               <div className={styles.overlay} ref={overlayRef}>
                  <div className={styles.author} ref={authorRef}>
                     <div className={styles.avatar}>
                        <img src={admin} alt='avatar' />
                     </div>
                     <span>{data.author}</span>
                  </div>

                  <div className={styles.date}>{data.date}</div>

                  <div className={styles.caption}>
                     <div className={styles.captionTrack1}>
                        <div />
                        <p>
                           {data.categories.map((c, index) => (
                              <span key={index}>
                                 {c}
                                 {index !== data.categories.length - 1 && ', '}
                              </span>
                           ))}
                        </p>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua lorem ipsum. Dolore magnam aliquam
                           quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas.
                        </p>
                        <div>
                           <FontAwesomeIcon icon={faShareAlt} />
                           <FontAwesomeIcon icon={faMessage} />
                           <span>0</span>
                        </div>
                     </div>
                     <div className={styles.captionTrack2}>
                        <p>{data.title}</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className={styles.detail}>
               <p>{data.date}</p>
               <p>{data.title}</p>
            </div>
         </div>
      </Link>
   )
}

export default memo(SubBlogItem)
