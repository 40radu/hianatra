import Container from '@/components/common/Container'
import "./style.scss"
import Image from 'next/image'
import React from 'react'
import { contactData } from './data'
import ContactForm from '@/components/display/ContactForm'

function ContactCommon() {
  return (
    <Container className="contact-common">
      <div className="contact-common__infos" id='contact'>
        {
          contactData.map((dt, index) => {
            return (
              <div className="items-container" key={`contact_${index}`}>
                <div className="items-container__item">
                  <span className="image">
                    <Image src={dt.image} alt='' width={90} height={90} />
                  </span>
                  <div className="items-container__text">
                    <p className="title">{dt.title}</p>
                    <p className="description">{dt.description}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <ContactForm />
      <span className="contact-common__image">
        <Image src="/home/contact.svg" alt='' width={1920} height={1024} />
      </span>
    </Container>
  )
}

export default ContactCommon