import React from 'react'
import SubBlogItem from './SubBlogItem'
import styles from './style.module.scss'
import { subBlogs } from '../../data'

function SubBlogs() {
   return (
      <section className={styles.SubBlogs}>
         {subBlogs.map((subBlog, index) => (
            <SubBlogItem data={subBlog} key={index} />
         ))}
      </section>
   )
}

export default SubBlogs
