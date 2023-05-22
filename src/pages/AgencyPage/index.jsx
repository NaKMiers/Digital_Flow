import React from 'react'
import DigitalAgency from '../../components/DigitalAgency'
import History from '../../components/History'
import OurProcess from '../../components/OurProcess'
import PageHeaderLite from '../../components/PageHeaderLite'
import VideoBackground from '../../components/VideoBackground'
import WorkWithProTeam from '../../components/WorkWithProTeam'
import TeamMembers from '../../components/TeamMembers'
import WorkTogether from '../../components/WorkTogether'
import AwardsAndPrizes from '../../components/AwardsAndPrizes'
import styles from './style.module.scss'

function AgencyPage() {
   return (
      <div className={styles.AgencyPage}>
         <PageHeaderLite title='Agency' />
         <VideoBackground />
         <DigitalAgency
            data={{
               title: 'About Agency',
               desc: [
                  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus!',
                  'Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
               ],
               social: true,
            }}
         />
         <History />
         <WorkWithProTeam />
         <OurProcess />
         <TeamMembers />
         <AwardsAndPrizes />
         <DigitalAgency
            data={{
               title: 'Let’s work together',
               desc: [
                  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus!',
               ],
            }}
            style={{ padding: '120px 0 90px' }}
         />
         <WorkTogether />
      </div>
   )
}

export default AgencyPage
