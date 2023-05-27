import React from 'react'
import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'
import PageHeadingLite from '../../components/PageHeadingLite'
import Parallax from '../../components/Parallax'
import VisitUs from '../../components/VisitUs'
import styles from './style.module.scss'

function ContactPage() {
   return (
      <section className={styles.ContactPage}>
         <PageHeadingLite title='Contact' />
         <ContactInfo />
         <Parallax />
         <VisitUs />
         <ContactForm />
      </section>
   )
}

export default ContactPage
