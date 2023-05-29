import React from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function NotFoundPage() {
   return (
      <div className={styles.NotFoundPage}>
         <div className={styles.container}>
            <span>404</span>

            <p>PAGE NOT FOUND</p>
            <p>
               We’re sorry, the page you have looked for does not exist in our database! Maybe go to our
               <Link to='/'> home page</Link> or try to use a search?
            </p>

            <div>
               <input type='text' name='search' placeholder='Search...' />
               <div>
                  <FontAwesomeIcon icon={faSearch} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default NotFoundPage
