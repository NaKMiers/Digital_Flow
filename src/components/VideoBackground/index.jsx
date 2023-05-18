import React from 'react'
import styles from './style.module.scss'
import videoBg from '../../assets/videos/videoBackground.mp4'

function VideoBackground() {
   return (
      <section className={styles.VideoBackground}>
         <div className={styles.background}>
            <video src={videoBg} loop autoPlay muted />
            <div className={styles.overlay} />
         </div>
      </section>
   )
}

export default VideoBackground
