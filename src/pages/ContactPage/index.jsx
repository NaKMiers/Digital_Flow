import React from 'react'
import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'
import PageHeaderLite from '../../components/PageHeaderLite'
import Parallax from '../../components/Parallax'
import VisitUs from '../../components/VisitUs'
import styles from './style.module.scss'

function ContactPage() {
   return (
      <section className={styles.ContactPage}>
         <PageHeaderLite title='Contact' />
         <ContactInfo />
         <Parallax />
         <VisitUs />
         <ContactForm />
      </section>
   )
}

export default ContactPage
