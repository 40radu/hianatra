import React from 'react'
import Container from '@/components/common/Container'
import Image from 'next/image'
import Heading from '@/components/common/Heading'
import Button from '@/components/navigation/Button'
import Link from 'next/link'
import { aboutData } from './data'
import "./style.scss"


function About() {
    return (
        <Container className="h-about">
            <span className="h-about__image">
                <Image src="/home/illustration-about.svg" alt='about-img' width={548} height={548} />
            </span>
            <div className="h-about__text">
                <Heading label='à propos de nous' align='start'>
                    <span className='primary'>Notre mission :</span> vous propulser dans l’univers du développement web.
                </Heading>
                <p className="h-about__text__description">
                    Hianatra est une plateforme en ligne dédiée à l’apprentissage du développement web.
                    Nous croyons que chacun a le potentiel de créer et d’innover, peu importe son niveau de départ.
                </p>
                <div className="h-about__text__wrapper-card">
                    {
                        aboutData.map((dt, index) => {
                            return (
                                <div className="card" key={`about_${index}`}>
                                    <h4>{dt.title}</h4>
                                    <p>{dt.desription}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Link href="/about"><Button label='Nous connaître' /></Link>
            </div>
        </Container>
    )
}

export default About