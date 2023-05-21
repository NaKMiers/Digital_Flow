import React from 'react'
import DigitalAgency from '../../components/DigitalAgency'
import History from '../../components/History'
import OurProcess from '../../components/OurProcess'
import PageHeaderLite from '../../components/PageHeaderLite'
import VideoBackground from '../../components/VideoBackground'
import WorkWithProTeam from '../../components/WorkWithProTeam'
import TeamMembers from '../../components/TeamMembers'
import AwardsAndPrizes from '../../components/AwardsAndPrizes'
import styles from './style.module.scss'

function AgencyPage() {
   return (
      <div className={styles.AgencyPage}>
         <PageHeaderLite />
         <VideoBackground />
         <DigitalAgency />
         <History />
         <WorkWithProTeam />
         <OurProcess />
         <TeamMembers />
         <AwardsAndPrizes />
      </div>
   )
}

export default AgencyPage
