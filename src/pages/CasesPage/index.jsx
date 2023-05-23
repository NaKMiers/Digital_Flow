import React from 'react'
import styles from './style.module.scss'
import PageHeaderLite from '../../components/PageHeaderLite'
import Quote from '../../components/Quote'
import ProductShowCase from '../../components/ProductShowCase'

function CasesPage() {
   return (
      <div className={styles.CasesPage}>
         <PageHeaderLite title='Cases' />
         <ProductShowCase />
         <Quote />
      </div>
   )
}

export default CasesPage
