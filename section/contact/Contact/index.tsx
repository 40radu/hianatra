import Container from '@/components/common/Container'
import "./style.scss"
import Heading from '@/components/common/Heading'
import Button from '@/components/navigation/Button'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ContactUs() {
  return (
    <Container className={classNames("contact-us")}>
      <div className={classNames("contact-us__text")}>
        <Heading label='' align='start'>
          <span className='primary'>
            Besoin d’aide ou de plus <br /> d’informations ? Nous <br /> sommes là pour vous.
          </span>
        </Heading>
        <div className={classNames("contact-us__text-description")}>
          <p className={classNames("fat")}>Contactez notre équipe et obtenez des réponses rapidement.</p>
        </div>
        <Link href="" ><Button label='Nous contacter' /></Link>
      </div>

      <div className={classNames("contact-us__image")}>
        <Image src='/contact.png' alt='' width={764} height={764} />
      </div>
    </Container>
  )
}

export default ContactUs