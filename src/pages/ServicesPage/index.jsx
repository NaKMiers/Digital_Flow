import React from 'react'
import styles from './style.module.scss'
import PageHeaderLite from '../../components/PageHeaderLite'
import AgencyServices from '../../components/AgencyServices'
import DigitalAgency from '../../components/DigitalAgency'
import DigitalGallery from '../../components/DigitalGallery'

function ServicesPage() {
   return (
      <div className={styles.ServicesPage}>
         <PageHeaderLite title='Services' />
         <AgencyServices />
         <DigitalAgency
            data={{
               title: 'We deliver smart and flexible solutions',
               smallTitle: true,
               desc: [
                  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus!',
               ],
            }}
            style={{ padding: '120px 0 90px' }}
         />
         <DigitalGallery />
      </div>
   )
}

export default ServicesPage
