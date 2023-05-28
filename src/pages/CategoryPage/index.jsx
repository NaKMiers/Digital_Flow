import React, { memo } from 'react'
import styles from './style.module.scss'
import PageHeadingLite from '../../components/PageHeadingLite'
import CategoryShowCase from '../../components/CategoryShowCase'

function CategoryPage() {
   return (
      <div className={styles.CategoryPage}>
         <PageHeadingLite title='Interface' />
         <CategoryShowCase />
      </div>
   )
}

export default memo(CategoryPage)
