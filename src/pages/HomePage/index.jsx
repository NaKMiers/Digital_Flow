import React, { memo } from 'react'
import AgencyServices from '../../components/AgencyServices'
import Difference from '../../components/Difference'
import DigitalGrid from '../../components/DigitalGrid'
import LatestNews from '../../components/LatestNews'
import OurClients from '../../components/OurClients'
import PageHeader from '../../components/PageHeader'
import Quote from '../../components/Quote'
import Works from '../../components/Works'
import Slider from '../../components/Slider'
import StartWorkingWithUs from '../../components/StartWorkingWithUs'
import VideoBackground from '../../components/VideoBackground'
import styles from './style.module.scss'

function HomePage() {
   return (
      <div className={styles.HomePage}>
         <PageHeader />
         <Slider />
         <Works />
         <Quote />
         <StartWorkingWithUs />
         <AgencyServices />
         <Difference />
         <DigitalGrid />
         <LatestNews />
         <VideoBackground />
         <OurClients />
      </div>
   )
}

export default memo(HomePage)
