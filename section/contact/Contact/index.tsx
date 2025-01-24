"use client"
import Container from '@/components/common/Container'
import "./style.scss"
import Heading from '@/components/common/Heading'
import Button from '@/components/navigation/Button'
import Image from 'next/image'
import React from 'react'
import { scrollTo } from '@/app/utils/scrollTo'

function ContactUs() {
  const scrollToContact = ()=>{
    scrollTo("contact")
  }
  return (
    <Container className="contact-us">
      <div className="contact-us__text">
        <Heading label='' align='start'>
          <span className='primary'>
            Besoin d’aide ou de plus <br /> d’informations ? Nous <br /> sommes là pour vous.
          </span>
        </Heading>
        <div className="contact-us__text-description">
          <p className="fat">Contactez notre équipe et obtenez des réponses rapidement.</p>
        </div>
        <Button label='Nous contacter' onClick={scrollToContact}/>
      </div>

      <div className="contact-us__image">
        <Image src='/contact.svg' alt='' width={764} height={764} priority />
      </div>
    </Container>
  )
}

export default ContactUs