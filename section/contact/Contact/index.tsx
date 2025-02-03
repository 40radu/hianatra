"use client"
import Container from '@/components/common/Container'
import "./style.scss"
import Heading from '@/components/common/Heading'
import Button from '@/components/navigation/Button'
import Image from 'next/image'
import React from 'react'
import { scrollTo } from '@/app/utils/scrollTo'
import { useScopedI18n } from '@/locales/client'

function ContactUs() {
  const translate = useScopedI18n("contactUs")
  const scrollToContact = () => {
    scrollTo("contact")
  }
  return (
    <Container className="contact-us">
      <div className="contact-us__text">
        <Heading label='' align='start'>
          <span className='primary'>
            {translate("title")}
          </span>
        </Heading>
        <div className="contact-us__text-description">
          <p className="fat">{translate("descri")}</p>
        </div>
        <Button label={translate("button")} onClick={scrollToContact} />
      </div>

      <div className="contact-us__image">
        <Image src='/contact.svg' alt='' width={764} height={764} priority />
      </div>
    </Container>
  )
}

export default ContactUs