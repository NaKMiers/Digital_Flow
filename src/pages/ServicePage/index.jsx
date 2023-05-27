import React from 'react'
import styles from './style.module.scss'
import WorkWithProTeam from '../../components/WorkWithProTeam'
import PageHeadingLite from '../../components/PageHeadingLite'
import PageTitle from '../../components/PageTitle'
import ServiceContent from '../../components/ServiceContent'
import Offers from '../../components/Offers'
import LatestProject from '../../components/LatestProject'

function ServicePage() {
   return (
      <div className={styles.ServicePage}>
         <PageHeadingLite title='Services' />
         <PageTitle title='Web development' />
         <ServiceContent />
         <WorkWithProTeam />
         <Offers />
         <LatestProject />
      </div>
   )
}

export default ServicePage
