import React, { memo } from 'react'
import styles from './style.module.scss'
import Slider from '../../components/Slider'
import PageHeader from '../../components/PageHeader'
import StartWorkingWithUs from '../../components/StartWorkingWithUs'
import AgencyServices from '../../components/AgencyServices'

function HomePage() {
   return (
      <div className={styles.HomePage}>
         <PageHeader />
         <Slider />
         <StartWorkingWithUs />
         <AgencyServices />
      </div>
   )
}

export default memo(HomePage)
