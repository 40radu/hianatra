import Container from '@/components/common/Container'
import "./style.scss"
import Heading from '@/components/common/Heading'
import Button from '@/components/navigation/Button'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Course() {
  return (
    <Container className={classNames("h-course")}>
      <div className={classNames("h-course__text")}>
        <Heading label='Nos cours' align='start'>
          <span className={classNames("primary")}>Quel Genre de cours <br />Nous offrons ?</span>
        </Heading>
        <div className={classNames("h-course__text-description")}>
            <p className={classNames("fat")}>Des bases aux compétences avancées, apprenez à créer le web de demain.</p>
            <p className={classNames("slim")}>Chez Hianatra, nous proposons une variété de cours adaptés à tous les niveaux et couvrant les aspects essentiels du développement web.</p>
        </div>
        <Link href="/courses" ><Button label='En savoir plus'/></Link>
      </div>

      <div className={classNames("h-course__image")}>
                <Image src='/contact.svg' alt='' width={764} height={764}/>
      </div>
    </Container>
  )
}

export default Course