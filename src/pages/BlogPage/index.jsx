import React from 'react'
import PageHeaderLite from '../../components/PageHeaderLite'
import BlogPost from '../../components/BlogPost'
import styles from './style.module.scss'

function BlogPage() {
   return (
      <div className={styles.BlogPage}>
         <PageHeaderLite title='Blog' />
         <BlogPost />
      </div>
   )
}

export default BlogPage
