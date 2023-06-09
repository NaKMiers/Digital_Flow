import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faEnvelope, faGlobe, faUser, faCheck } from '@fortawesome/free-solid-svg-icons'

function PostComment() {
   const [checked, setChecked] = useState(false)

   const commentTitleRef = useRef(null)
   const formCommentRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [commentTitleRef.current, ...formCommentRef.current.children]

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
         // console.log('removed---PostComment')
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
      <div className={styles.PostComment}>
         <div className={styles.commentTitle} ref={commentTitleRef}>
            <div className={styles.icon}>
               <FontAwesomeIcon icon={faCopy} />
            </div>
            <h2>
               <span>Leave</span> a comment
            </h2>
         </div>

         <form className={styles.formComment} ref={formCommentRef}>
            <div className={styles.messageArea}>
               <textarea name='message' rows='10' placeholder='Message*' required></textarea>
            </div>

            <div className={styles.infoArea}>
               <div>
                  <input name='name' type='text' placeholder='Name*' required />
                  <div>
                     <FontAwesomeIcon icon={faUser} />
                  </div>
               </div>
               <div>
                  <input name='email' type='email' placeholder='Email*' required />
                  <div>
                     <FontAwesomeIcon icon={faEnvelope} />
                  </div>
               </div>
               <div>
                  <input name='website' type='url' placeholder='Website' />
                  <div>
                     <FontAwesomeIcon icon={faGlobe} />
                  </div>
               </div>
            </div>

            <div className={styles.checkArea}>
               <input
                  type='checkbox'
                  name='check'
                  id='check'
                  checked={checked}
                  style={{ display: 'none' }}
                  onChange={() => {}}
               />
               <div className={styles.checkbox} onClick={() => setChecked(!checked)}>
                  {checked && <FontAwesomeIcon icon={faCheck} />}
               </div>
               <label htmlFor='check' onClick={() => setChecked(!checked)}>
                  Save my name, email, and website in this browser for the next time I comment.
               </label>
            </div>

            <div className={styles.submitArea}>
               <button>SEND COMMENT</button>
            </div>
         </form>
      </div>
   )
}

export default memo(PostComment)
