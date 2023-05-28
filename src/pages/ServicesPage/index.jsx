import React, { memo } from 'react'
import AgencyServices from '../../components/AgencyServices'
import DigitalGallery from '../../components/DigitalGallery'
import PageHeadingLite from '../../components/PageHeadingLite'
import WeStandFor from '../../components/WeStandFor'
import ClientsSayAboutUs from '../../components/ClientsSayAboutUs'
import styles from './style.module.scss'

function ServicesPage() {
   return (
      <div className={styles.ServicesPage}>
         <PageHeadingLite title='Services' />
         <AgencyServices />
         <DigitalGallery />
         <WeStandFor />
         <ClientsSayAboutUs />
      </div>
   )
}

export default memo(ServicesPage)
