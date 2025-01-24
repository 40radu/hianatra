"use client"

import React from 'react'
import "./style.scss"
import Container from '@/components/common/Container'
import Button from '@/components/navigation/Button'
import HomeHeroImage from '@/components/display/HomeHeroImage'
import Icon from '@/components/Icon'
import Link from 'next/link'
import { scrollTo } from '@/app/utils/scrollTo'

function HeroHome() {
  return (
    <Container className="h-hero">
      <div className="h-hero__text">
        <div className="h-hero__text-head">
          <h1>
            Vos
            <span className="txt-secondary"> premières lignes</span> de code,
            votre <span className="txt-primary">premier succès.</span>
          </h1>
          <p>
            Plongez dans l&apos;univers du développement web grâce à des
            cours simples et interactifs. Progressez à votre rythme
            et transformez vos idées en projets concrets.
          </p>
        </div>
        <div className="h-hero__text-btns--wrapper">
          <Link href=""><Button variant='blue' label='Commencer' /></Link>
          <Button variant='white' label='Télécharger l’application' icon='play' onClick={()=>scrollTo('ready')}/>
        </div>
      </div>
      <div className="h-hero__image">
        <HomeHeroImage />
      </div>
      <div className="h-hero__card">
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

export default HeroHome