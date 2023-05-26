import React from 'react'
import styles from './style.module.scss'
import PageHeaderLite from '../../components/PageHeaderLite'
import Product from '../../components/Product'

function ProductPage() {
   return (
      <div className={styles.ProductPage}>
         <PageHeaderLite title='Cases' />
         <Product />
      </div>
   )
}

export default ProductPage
