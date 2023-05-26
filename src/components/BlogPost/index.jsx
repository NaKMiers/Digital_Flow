import {
   faBars,
   faChevronLeft,
   faChevronRight,
   faComment,
   faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import author from '../../assets/imgs/admin.jpg'
import blogImage1 from '../../assets/imgs/blogImage1.jpg'
import blogImage2 from '../../assets/imgs/blogImage2.jpg'
import blogImage3 from '../../assets/imgs/blogImage3.jpg'
import blogImage4 from '../../assets/imgs/blogImage4.jpg'
import facebook from '../../assets/imgs/facebook.png'
import linkedin from '../../assets/imgs/linkedin.png'
import pinterest from '../../assets/imgs/pinterest.png'
import reddit from '../../assets/imgs/reddit.png'
import twitter from '../../assets/imgs/twitter.png'
import styles from './style.module.scss'
import RelatedPosts from '../RelatedPosts'
import PostComment from '../PostComment'

function BlogPost() {
   const navigate = useNavigate()

   const topRef = useRef(null)
   const part1Ref = useRef(null)
   const part2Ref = useRef(null)
   const postTagsRef = useRef(null)
   const socialsWrapRef = useRef(null)
   const authorRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const elements = [
         ...topRef.current.children,
         ...part1Ref.current.children,
         ...part2Ref.current.children,
         authorRef.current,
      ]
      const postTagsElements = [...postTagsRef.current.children]
      const socialsElements = [...socialsWrapRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      let delay1 = 0.2
      postTagsElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay1 += 0.15
            e.style.opacity = 0
            e.style.animation = `appear 0.6s ease-in-out ${delay1}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      let delay2 = 0.2
      socialsElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay2 += 0.15
            e.style.opacity = 0
            e.style.animation = `zoomOut 0.6s ease-in-out ${delay2}s forwards`
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
      postTagsElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      socialsElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (countAppeared === elements.length + postTagsElements.length + socialsElements.length) {
         console.log('removed---BlogPost')
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
      <section className={styles.BlogPost}>
         <div className={styles.container}>
            {/* Meta & Title */}
            <div className={styles.topPost} ref={topRef}>
               <div className={styles.postMeta}>
                  <div className={styles.left}>
                     <span>By admin</span>
                     <div className={styles.sep} />
                     <span>Creative</span>
                     <div className={styles.sep} />
                     <span>Fashion</span>
                     <div className={styles.sep} />
                     <span>November 3, 2020</span>
                  </div>

                  <div className={styles.right}>
                     <div className={`${styles.icon} ${styles.commentIcon}`}>
                        <FontAwesomeIcon icon={faComment} />
                        <span>0</span>
                     </div>
                     <div className={styles.sep} />
                     <div className={`${styles.icon} ${styles.heartIcon}`}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>0</span>
                     </div>
                     <button
                        className={`${styles.icon} ${styles.backIcon}`}
                        onClick={() => navigate(-1)}
                     >
                        <FontAwesomeIcon icon={faChevronLeft} />
                     </button>
                     <Link to='/blogs' className={`${styles.icon} ${styles.menuIcon}`}>
                        <FontAwesomeIcon icon={faBars} />
                     </Link>
                  </div>
               </div>

               <h1 className={styles.title}>
                  Nemo enim ipsam voluptatem quia set voluptas sit aspernatur aut odit
               </h1>
            </div>

            {/* Content */}
            <div className={styles.postContent}>
               <div className={styles.part} ref={part1Ref}>
                  <div className={styles.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                     </p>
                  </div>

                  <div className={styles.blogImage}>
                     <img src={blogImage1} alt='blog-thumb' />
                  </div>

                  <div className={styles.text}>
                     <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.
                     </p>
                  </div>

                  <div className={styles.textBoxContent}>
                     <div className={styles.textBoxItem}>
                        <span>1</span>
                        <span>Lorem ipsum dolor sit amet consectetur</span>
                     </div>
                     <div className={styles.textBoxItem}>
                        <span>2</span>
                        <span>Lorem ipsum dolor sit amet consectetur</span>
                     </div>
                     <div className={styles.textBoxItem}>
                        <span>3</span>
                        <span>Lorem ipsum dolor sit amet consectetur</span>
                     </div>
                  </div>

                  <div className={styles.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                     </p>
                  </div>

                  <div className={styles.blogImage}>
                     <img src={blogImage2} alt='blog-thumb' />
                  </div>
               </div>

               <div className={styles.part} ref={part2Ref}>
                  <div className={styles.blogImage}>
                     <img src={blogImage3} alt='blog-thumb' />
                  </div>

                  <div className={styles.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                     </p>
                  </div>

                  <div className={styles.blogImage}>
                     <img src={blogImage4} alt='blog-thumb' />
                  </div>

                  <div className={styles.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                     </p>
                  </div>
               </div>
            </div>

            {/* Tags */}
            <div className={styles.postTags} ref={postTagsRef}>
               <Link to='/categories' className={styles.tag}>
                  Branding
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Design
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Illustration
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Interface
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Marketing
               </Link>
            </div>

            {/* Socials */}
            <div className={styles.socialsWrap} ref={socialsWrapRef}>
               <a
                  className={styles.social}
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={facebook} alt='social' />
               </a>
               <a className={styles.social} href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <img src={twitter} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.pinterest.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={pinterest} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.linkedin.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={linkedin} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.reddit.com/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={reddit} alt='social' />
               </a>
            </div>

            {/* Author */}
            <div className={styles.author} ref={authorRef}>
               <div className={styles.avatar}>
                  <img src={author} alt='avatar' />
               </div>

               <div className={styles.detail}>
                  <p>
                     <span>admin</span> / About Author
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                     irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                     pariatur. Excepteur sint.
                  </p>

                  <Link to='/' className={styles.more}>
                     <div>
                        <FontAwesomeIcon icon={faChevronRight} />
                     </div>
                     <span>More posts by admin</span>
                  </Link>
               </div>
            </div>

            <RelatedPosts />

            <PostComment />
         </div>
      </section>
   )
}

export default memo(BlogPost)
