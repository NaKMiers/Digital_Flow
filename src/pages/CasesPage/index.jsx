import React, { memo } from 'react'
import styles from './style.module.scss'
import PageHeadingLite from '../../components/PageHeadingLite'
import Quote from '../../components/Quote'
import ProductShowCase from '../../components/ProductShowCase'

function CasesPage() {
   return (
      <div className={styles.CasesPage}>
         <PageHeadingLite title='Cases' />
         <ProductShowCase />
         <Quote />
      </div>
   )
}

export default memo(CasesPage)
