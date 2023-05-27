import React from 'react'
import styles from './style.module.scss'
import PageHeaderLite from '../../components/PageHeaderLite'
import CategoryShowCase from '../../components/CategoryShowCase'

function CategoryPage() {
   return (
      <div className={styles.CategoryPage}>
         <PageHeaderLite title='Interface' />
         <CategoryShowCase />
      </div>
   )
}

export default CategoryPage
