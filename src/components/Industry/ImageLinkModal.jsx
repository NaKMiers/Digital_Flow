import {
   faArrowLeft,
   faArrowRight,
   faPlay,
   faPause,
   faSearch,
   faX,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { imageLinkItems } from '../../data'
import styles from './style.module.scss'

function ImageLinkModal({ index, setImageIndex }) {
   const [autoPlay, setAutoPlay] = useState(false)

   const imageModalRef = useRef(null)
   const imageModalBodyref = useRef(null)
   const playBarRef = useRef(null)
   const prevBtnRef = useRef(null)
   const nextBtnRef = useRef(null)

   // help open modal
   useEffect(() => {
      if (typeof index === 'number' && !Number.isNaN(index)) {
         handleOpenImageModal()
      }
   }, [index])

   // handle open image modal
   const handleOpenImageModal = () => {
      imageModalRef.current.classList.remove(styles.hide)
      imageModalRef.current.style.display = 'block'
      imageModalRef.current.classList.add(styles.show)

      document.body.style.overflow = 'hidden' // stop scroll
   }

   // handle close image modal
   const handleCloseImageModal = () => {
      imageModalRef.current.classList.remove(styles.show)
      imageModalRef.current.classList.add(styles.hide)

      setTimeout(() => {
         imageModalRef.current.style.display = 'none'
         document.body.style.overflow = 'auto' // scroll
         setImageIndex(NaN)
         setAutoPlay(false)
      }, 490) // modal fadeIn 0.5s
   }

   // handle click outside of modal content
   const handleClickOutside = e => {
      if (imageModalBodyref.current && !imageModalBodyref.current.contains(e.target)) {
         handleCloseImageModal()
      }
   }

   // handle zoom in
   const handleZomeIn = () => {
      imageModalBodyref.current.classList.toggle(styles.zoomIn)
   }

   // auto play
   useEffect(() => {
      let interval

      if (autoPlay) {
         playBarRef.current.classList.add(styles.replay)
         interval = setInterval(() => {
            index === imageLinkItems.length - 1 ? setImageIndex(0) : setImageIndex(index + 1)
         }, 3500)
      } else {
         playBarRef.current.classList.remove(styles.replay)
      }

      return () => {
         clearInterval(interval)
      }
   }, [autoPlay, index, setImageIndex])

   return (
      <div className={styles.imageModal} onClick={handleClickOutside} ref={imageModalRef}>
         <div className={styles.playBar} ref={playBarRef}>
            <div />
         </div>
         <div className={styles.number}>
            {index + 1}/{imageLinkItems.length}
         </div>
         <div className={styles.buttonWrap}>
            <button
               onClick={e => {
                  e.stopPropagation()
                  handleZomeIn()
               }}
            >
               <FontAwesomeIcon icon={faSearch} />
            </button>
            <button
               onClick={e => {
                  e.stopPropagation()
                  setAutoPlay(!autoPlay)
               }}
            >
               <FontAwesomeIcon icon={!autoPlay ? faPlay : faPause} />
            </button>
            <button>
               <FontAwesomeIcon icon={faX} onClick={handleCloseImageModal} />
            </button>
         </div>

         <button
            className={`${styles.modalBtn} ${styles.nextBtn}`}
            onClick={e => {
               e.stopPropagation()
               index === 0 ? setImageIndex(imageLinkItems.length - 1) : setImageIndex(index - 1)
            }}
            ref={prevBtnRef}
         >
            <FontAwesomeIcon icon={faArrowLeft} />
         </button>
         <button
            className={`${styles.modalBtn} ${styles.prevBtn}`}
            onClick={e => {
               e.stopPropagation()
               index === imageLinkItems.length - 1 ? setImageIndex(0) : setImageIndex(index + 1)
            }}
            ref={nextBtnRef}
         >
            <FontAwesomeIcon icon={faArrowRight} />
         </button>

         <div className={styles.imageModalBody} ref={imageModalBodyref}>
            <img src={imageLinkItems[index]} alt='img' onClick={handleZomeIn} />
         </div>
      </div>
   )
}

export default ImageLinkModal
