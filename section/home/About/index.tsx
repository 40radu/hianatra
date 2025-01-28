import React from 'react'
import Container from '@/components/common/Container'
import Image from 'next/image'
import Heading from '@/components/common/Heading'
import Button from '@/components/navigation/Button'
import Link from 'next/link'
import { aboutData } from './data'
import "./style.scss"
import { getI18n, getScopedI18n } from '@/locales/server'


async function About() {
    const translate = await getScopedI18n("homeAbout")
    const tAboutUs = await getI18n()
    return (
        <Container className="h-about">
            <span className="h-about__image">
                <Image src="/home/illustration-about.svg" alt='about-img' width={548} height={548} />
            </span>
            <div className="h-about__text">
                <Heading label={translate("heading.title")} align='start'>
                    <span className='primary'>{translate('heading.mission')}</span> {translate("heading.descri")}
                </Heading>
                <p className="h-about__text__description">
                    {translate("description")}
                </p>
                <div className="h-about__text__wrapper-card">
                    {
                        aboutData.map((dt, index) => {
                            return (
                                <div className="card" key={`about_${index}`}>
                                    <h4>{translate(dt.title)}</h4>
                                    <p>{translate(dt.description)}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Link href="/about"><Button label={tAboutUs('moreAboutUs')} /></Link>
            </div>
        </Container>
    )
}

export default About