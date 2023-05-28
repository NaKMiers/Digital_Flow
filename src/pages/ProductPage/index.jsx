import React, { memo } from 'react'
import styles from './style.module.scss'
import PageHeadingLite from '../../components/PageHeadingLite'
import Product from '../../components/Product'

function ProductPage() {
   return (
      <div className={styles.ProductPage}>
         <PageHeadingLite title='Cases' />
         <Product />
      </div>
   )
}

export default memo(ProductPage)
