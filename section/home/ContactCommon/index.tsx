import Container from '@/components/common/Container'
import "./style.scss"
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { contactData } from './data'
import ContactForm from '@/components/display/ContactForm'

function ContactCommon() {
  return (
    <Container className={classNames("contact-common")}>
      <div className={classNames("contact-common__infos")} id='contact'>
        {
          contactData.map((dt, index) => {
            return (
              <div className={classNames("items-container")} key={`contact_${index}`}>
                <div className={classNames("items-container__item")}>
                  <span className={classNames("image")}>
                    <Image src={dt.image} alt='' width={90} height={90} />
                  </span>
                  <div className={classNames("items-container__text")}>
                    <p className={classNames("title")}>{dt.title}</p>
                    <p className={classNames("description")}>{dt.description}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <ContactForm />
      <span className={classNames("contact-common__image")}>
        <Image src="/home/contact.svg" alt='' width={1920} height={1024} />
      </span>
    </Container>
  )
}

export default ContactCommon