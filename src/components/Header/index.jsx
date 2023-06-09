import { faChevronDown, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import facebook from '../../assets/imgs/facebook.png'
import instagram from '../../assets/imgs/instagram.png'
import logo from '../../assets/imgs/logo.png'
import pinterest from '../../assets/imgs/pinterest.png'
import twitter from '../../assets/imgs/twitter.png'
import vimeo from '../../assets/imgs/vimeo.png'
import youtube from '../../assets/imgs/youtube.png'
import styles from './style.module.scss'

function Header({ fixed }) {
   const headerRef = useRef(null)
   const langBodyRef = useRef(null)
   const menuModalRef = useRef(null)
   const menuBody = useRef(null)
   const closeBtnRef = useRef(null)

   const [openMenu, setOpenMenu] = useState(false)

   // handle show/hide header on scroll up/down
   useEffect(() => {
      let lastScrollTop = 0

      const handleScroll = () => {
         let scrollTop = window.pageYOffset

         if (scrollTop > 85 && !openMenu) {
            if (scrollTop > lastScrollTop) {
               headerRef.current.classList.remove(styles.show)
            } else {
               headerRef.current.classList.add(styles.show)
            }
            lastScrollTop = scrollTop
         } else {
            headerRef.current.classList.remove(styles.show)
         }
      }

      if (fixed) {
         window.addEventListener('scroll', handleScroll)
      }

      return () => {
         if (fixed) {
            window.removeEventListener('scroll', handleScroll)
         }
      }
   }, [fixed, openMenu])

   // show language
   const handleShowLanguage = useCallback(() => {
      langBodyRef.current.classList.remove(styles.hide)
      langBodyRef.current.style.display = 'flex'
      langBodyRef.current.classList.add(styles.show)
   }, [])

   // hide language
   const handleHideLanguage = useCallback(() => {
      langBodyRef.current.classList.remove(styles.show)
      langBodyRef.current.classList.add(styles.hide)

      setTimeout(() => {
         langBodyRef.current.style.display = 'none'
      }, 590) // duration: 0.6s
   }, [])

   const handleShowMenu = useCallback(() => {
      setOpenMenu(true)
      menuModalRef.current.classList.remove(styles.hide)
      menuModalRef.current.style.display = 'flex'
      menuModalRef.current.classList.add(styles.show)

      menuBody.current.classList.remove(styles.hide)
      menuBody.current.classList.add(styles.show)

      closeBtnRef.current.classList.remove(styles.hide)
      closeBtnRef.current.classList.add(styles.show)
   }, [])

   const handleHideMenu = useCallback(() => {
      // animation: overlay and body
      menuModalRef.current.classList.remove(styles.show)
      menuModalRef.current.classList.add(styles.hide)
      setTimeout(() => {
         menuModalRef.current.style.display = 'none'
      }, 299) // duration: 0.3s

      menuBody.current.classList.remove(styles.show)
      menuBody.current.classList.add(styles.hide)

      closeBtnRef.current.classList.remove(styles.show)
      closeBtnRef.current.classList.add(styles.hide)

      setOpenMenu(false)
   }, [])

   return (
      <header className={`${styles.Header} ${fixed ? styles.fixed : ''}`} ref={headerRef}>
         {/* LOGO */}
         <Link to='/' className={styles.logo}>
            <img src={logo} alt='logo' />
         </Link>

         {/* SOCIALS */}
         <div className={styles.socialWrap}>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
               <img src={twitter} alt='twitter' />
            </a>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
               <img src={facebook} alt='facebook' />
            </a>
            <a href='https://vimeo.com' target='_blank' rel='noreferrer'>
               <img src={vimeo} alt='vimeo' />
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
               <img src={instagram} alt='instagram' />
            </a>
            <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
               <img src={youtube} alt='youtube' />
            </a>
            <a href='https://www.pinterest.com' target='_blank' rel='noreferrer'>
               <img src={pinterest} alt='pinterest' />
            </a>
         </div>

         {/* LANGUAGES */}
         <div className={styles.languages} onMouseOver={handleShowLanguage}>
            <span>ENG</span>
            <div className={styles.dropIcon}>
               <FontAwesomeIcon icon={faChevronDown} />
            </div>

            <div className={styles.languageBody} ref={langBodyRef} onMouseLeave={handleHideLanguage}>
               <button>ENG</button>
               <button>GER</button>
               <button>FRA</button>
               <button>SPA</button>
               <button>ITA</button>
            </div>
         </div>

         {/* NAV ICONS */}
         <div className={`${styles.navIcon} ${styles.searchIcon}`}>
            <FontAwesomeIcon icon={faSearch} />
         </div>
         <a href='tel:+84899320427' className={`${styles.navIcon} ${styles.phoneIcon}`}>
            <FontAwesomeIcon icon={faPhone} />
         </a>
         <button className={`${styles.navIcon} ${styles.menuBtn}`} onClick={handleShowMenu}>
            <div />
            <div />
            <div />
         </button>

         {/* MENU MODAL */}
         <div className={styles.menuModal} ref={menuModalRef}>
            <div className={styles.closeBtnWrap}>
               <button className={styles.closeBtn} onClick={handleHideMenu} ref={closeBtnRef}>
                  <div />
                  <div />
                  <div />
               </button>
            </div>
            <ul className={styles.menuBody} ref={menuBody}>
               <li>
                  <NavLink
                     className={({ isActive }) => (isActive ? styles.active : '')}
                     to='/'
                     onClick={handleHideMenu}
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({ isActive }) => (isActive ? styles.active : '')}
                     to='/agency'
                     onClick={handleHideMenu}
                  >
                     Agency
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({ isActive }) => (isActive ? styles.active : '')}
                     to='/services'
                     onClick={handleHideMenu}
                  >
                     Services
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({ isActive }) => (isActive ? styles.active : '')}
                     to='/cases'
                     onClick={handleHideMenu}
                  >
                     Cases
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({ isActive }) => (isActive ? styles.active : '')}
                     to='/blogs'
                     onClick={handleHideMenu}
                  >
                     Blogs
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({ isActive }) => (isActive ? styles.active : '')}
                     to='/Contact'
                     onClick={handleHideMenu}
                  >
                     Contact
                  </NavLink>
               </li>
            </ul>
         </div>
      </header>
   )
}

export default memo(Header)
