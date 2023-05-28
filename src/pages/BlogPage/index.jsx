import React, { memo } from 'react'
import PageHeadingLite from '../../components/PageHeadingLite'
import BlogPost from '../../components/BlogPost'
import styles from './style.module.scss'

function BlogPage() {
   return (
      <div className={styles.BlogPage}>
         <PageHeadingLite title='Blog' />
         <BlogPost />
      </div>
   )
}

export default memo(BlogPage)
