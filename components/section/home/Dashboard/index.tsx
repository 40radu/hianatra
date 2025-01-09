import classNames from 'classnames'
import React from 'react'
import "./style.scss"
import Container from '@/components/common/Container'
import Button from '@/components/navigation/Button'
import HomeHeroImage from '@/components/display/HomeHeroImage'
import Image from 'next/image'
import Icon from '@/components/Icon'

function Dashboard() {
  return (
    <Container className={classNames("h-dashboard")}>
      <div className={classNames("h-dashboard__text")}>
        <div className={classNames("h-dashboard__text-head")}>
          <h1>
            Vos
            <span className={classNames("txt-secondary")}> premières lignes</span> de code,
            votre <span className={classNames("txt-primary")}>premier succès.</span>
          </h1>
          <p>
            Plongez dans l'univers du développement web grâce à des
            cours simples et interactifs. Progressez à votre rythme
            et transformez vos idées en projets concrets.
          </p>
        </div>
        <div className={classNames("h-dashboard__text-btns--wrapper")}>
          <Button variant='blue' label='Commencer' />
          <Button variant='white' label='Télécharger l’application' icon='play' />
        </div>
      </div>
      <div className={classNames("h-dashboard__image")}>
        <HomeHeroImage />
      </div>
      <div className={classNames("h-dashboard__wave")}>
        <Image src="/home/wave.png" width={1920} height={1024} alt='hero' />
      </div>
      <div className={classNames("h-dashboard__card")}>
        <Icon name='accessible' />
        <h3>Accessibilité</h3>
        <p>
          Apprentissage adapté à tous, quel que soit le niveau ou les
          connaissances préalables.
        </p>
      </div>
    </Container>
  )
}

export default Dashboard