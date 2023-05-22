import React from 'react'
import AgencyServices from '../../components/AgencyServices'
import DigitalGallery from '../../components/DigitalGallery'
import PageHeaderLite from '../../components/PageHeaderLite'
import WeStandFor from '../../components/WeStandFor'
import ClientsSayAboutUs from '../../components/ClientsSayAboutUs'
import styles from './style.module.scss'

function ServicesPage() {
   return (
      <div className={styles.ServicesPage}>
         <PageHeaderLite title='Services' />
         <AgencyServices />
         <DigitalGallery />
         <WeStandFor />
         <ClientsSayAboutUs />
      </div>
   )
}

export default ServicesPage
