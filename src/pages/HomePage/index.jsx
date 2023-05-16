import React, { memo } from 'react'
import styles from './style.module.scss'
import Slider from '../../components/Slider'

function HomePage() {
   return (
      <div className={styles.HomePage}>
         HomePage
         <Slider />
      </div>
   )
}

export default memo(HomePage)
