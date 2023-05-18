import React, { memo } from 'react'
import AgencyServices from '../../components/AgencyServices'
import PageHeader from '../../components/PageHeader'
import Quote from '../../components/Quote'
import Slider from '../../components/Slider'
import StartWorkingWithUs from '../../components/StartWorkingWithUs'
import VideoBackground from '../../components/VideoBackground'
import styles from './style.module.scss'
import RecentWork from '../../components/RecentWork'
import OurClients from '../../components/OurClients'

function HomePage() {
   return (
      <div className={styles.HomePage}>
         <PageHeader />
         <Slider />
         <RecentWork />
         <Quote />
         <StartWorkingWithUs />
         <AgencyServices />
         <VideoBackground />
         <OurClients />
      </div>
   )
}

export default memo(HomePage)
