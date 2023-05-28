import React, { memo, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

import { teamMembers } from '../../data'

function TeamMembers() {
   const topRef = useRef(null)
   const teamMembersRef = useRef(null)

   const handleScrollAnimation = useCallback(() => {
      const topElements = [...topRef.current.children]
      const teamMembersElements = [...teamMembersRef.current.children]

      topElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      let delay = 0.2
      teamMembersElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.1
            e.style.opacity = 0
            e.style.animation = `zoomOut 0.6s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      // remove event when all are appeared
      let countAppeared = 0
      topElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      teamMembersElements.forEach(e => {
         if (e.className.includes(styles.appeared)) {
            countAppeared++
         }
      })
      if (countAppeared === topElements.length + teamMembersElements.length) {
         // console.log('removed---TeamMembers')
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
      <section className={styles.TeamMembers}>
         <div className={styles.container}>
            <div className={styles.top} ref={topRef}>
               <h6>PROFESSIONAL STAFF</h6>
               <h1>Team members</h1>
            </div>

            <div className={styles.teamMembers} ref={teamMembersRef}>
               {teamMembers.map((member, index) => (
                  <Link key={index} to={member.link} className={styles.teamMemberItem}>
                     <div>
                        <div className={styles.avatar}>
                           <img src={member.avatar} alt='avatar' />
                        </div>

                        <div className={styles.content}>
                           <p>{member.name}</p>
                           <p>{member.detail}</p>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   )
}

export default memo(TeamMembers)
