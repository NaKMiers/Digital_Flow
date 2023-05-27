import React from 'react'
import Blogs from '../../components/Blogs'
import SubBlogs from '../../components/SubBlogs'
import PageHeadingLite from '../../components/PageHeadingLite'
import Slider from '../../components/Slider'
import SubSlider from '../../components/SubSlider'
import WorkWithProTeam from '../../components/WorkWithProTeam'
import styles from './style.module.scss'
import { blogs } from '../../data'

function BlogsPage() {
   return (
      <div className={styles.BlogsPage}>
         <PageHeadingLite title='Our Blog' />
         <Slider />

         <Blogs data={blogs.slice(0, 6)} />
         <WorkWithProTeam />
         <SubBlogs />
         <Blogs data={blogs.slice(6, blogs.length)} />
         <SubSlider style={{ marginBottom: 110 }} />
      </div>
   )
}

export default BlogsPage
