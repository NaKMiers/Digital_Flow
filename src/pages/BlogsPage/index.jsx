import React from 'react'
import Blogs from '../../components/Blogs'
import SubBlogs from '../../components/SubBlogs'
import PageHeaderLite from '../../components/PageHeaderLite'
import Slider from '../../components/Slider'
import SubSlider from '../../components/SubSlider'
import WorkWithProTeam from '../../components/WorkWithProTeam'
import styles from './style.module.scss'
import { blogs } from '../../data'

function BlogsPage() {
   return (
      <div className={styles.BlogsPage}>
         <PageHeaderLite title='Our Blog' />
         <Slider />

         <Blogs data={blogs.slice(0, 6)} />
         <WorkWithProTeam />
         <SubBlogs />
         <Blogs data={blogs.slice(6, blogs.length)} />
      </div>
   )
}

export default BlogsPage
