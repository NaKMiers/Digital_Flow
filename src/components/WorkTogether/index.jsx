import React, { useState } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import DigitalHeading from '../DigitalHeading'

function WorkTogether() {
   const [panel, setPanel] = useState(1)

   return (
      <section className={styles.WorkTogether}>
         <DigitalHeading
            data={{
               title: 'Let’s work together',
               desc: [
                  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus!',
               ],
            }}
            style={{ padding: '120px 0 90px' }}
         />

         <div className={styles.container}>
            <div className={styles.panelWrap}>
               <div className={`${styles.panelItem} ${panel === 1 ? styles.active : ''}`}>
                  <div className={styles.panelTitle} onClick={() => setPanel(1)}>
                     <div>
                        <FontAwesomeIcon icon={faPlus} />
                     </div>
                     <span>OFFICE MANAGER</span>
                  </div>

                  <div className={styles.panelContent}>
                     <div>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur.
                        </p>
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                           error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis!
                        </p>
                     </div>
                     <div>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur.
                        </p>
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                           error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis!
                        </p>
                     </div>
                  </div>
               </div>

               <div className={`${styles.panelItem} ${panel === 2 ? styles.active : ''}`}>
                  <div className={styles.panelTitle} onClick={() => setPanel(2)}>
                     <div>
                        <FontAwesomeIcon icon={faPlus} />
                     </div>
                     <span>CREATIVE DESIGNER</span>
                  </div>

                  <div className={styles.panelContent}>
                     <div>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur.
                        </p>
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                           error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis!
                        </p>
                     </div>
                     <div>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur.
                        </p>
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                           error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis!
                        </p>
                     </div>
                  </div>
               </div>

               <div className={`${styles.panelItem} ${panel === 3 ? styles.active : ''}`}>
                  <div className={styles.panelTitle} onClick={() => setPanel(3)}>
                     <div>
                        <FontAwesomeIcon icon={faPlus} />
                     </div>
                     <span>CREATIVE DEVELOPER</span>
                  </div>

                  <div className={styles.panelContent}>
                     <div>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur.
                        </p>
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                           error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis!
                        </p>
                     </div>
                     <div>
                        <p>
                           Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                           incidi labore et dolore. agna aliqua. Ut enim ad mini veniam, quis nostrud
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                           fugiat nulla pariatur.
                        </p>
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                           error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis!
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default WorkTogether
