"use client"

import React from 'react'
import "./style.scss"
import Container from '@/components/common/Container'
import Button from '@/components/navigation/Button'
import HomeHeroImage from '@/components/display/HomeHeroImage'
import Icon from '@/components/Icon'
import Link from 'next/link'
import { scrollTo } from '@/app/utils/scrollTo'
import { useScopedI18n } from '@/locales/client'

// { }

function HeroHome() {
  const heroLangTranslator = useScopedI18n("heroLang")
  return (
    <Container className="h-hero">
      <div className="h-hero__text">
        <div className="h-hero__text-head">
          <h1>
            {heroLangTranslator("title.your")}
            <span className="txt-secondary"> {heroLangTranslator('title.firstLine')}</span> {heroLangTranslator("title.ofCode")} <span className="txt-primary">{heroLangTranslator("title.firstSucces")}.</span>
          </h1>
          <p>
            {heroLangTranslator("description")}
          </p>
        </div>
        <div className="h-hero__text-btns--wrapper">
          <Link href=""><Button variant='blue' label={heroLangTranslator("button.ready")} /></Link>
          <Button variant='white' label={heroLangTranslator("button.downloadApp")} icon='play' onClick={() => scrollTo('ready')} />
        </div>
      </div>
      <div className="h-hero__image">
        <HomeHeroImage />
      </div>
      <div className="h-hero__card">
        <Icon name='accessible' />
        <h3>{heroLangTranslator("accesibility.title")}</h3>
        <p>
          {heroLangTranslator("accesibility.descrition")}
        </p>
      </div>
    </Container>
  )
}

export default HeroHome
