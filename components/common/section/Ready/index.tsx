import React from 'react'
import Container from '../../Container'
import "./style.scss"
import classNames from 'classnames'
import Image from 'next/image'
import MorePoints from '@/components/vector/MorePoints'
import Link from 'next/link'

function Ready() {
    return (
        <section className={classNames("ready")} id='ready'>
            <Container className={classNames("ready__content")} tag='div'>
                <div className={classNames("ready__text")}>
                    <h3>Prêt?</h3>
                    <p>
                        Téléchargez notre application <br />
                        mobile pour démarrer <br />
                        facilement votre cours.
                    </p>
                </div>
                <div className={classNames("ready__logos")}>
                    <Link href="" className={classNames("logo")}>
                        <Image src="/home/google-play.png" alt='' width={266} height={117} />
                    </Link>
                    <Link href="" className={classNames("logo")}>
                        <Image src="/home/app-store.png" alt='' width={266} height={117} />
                    </Link>
                </div>
                <span className={classNames("ready__3circles")}>
                    <Image src="/home/3circles.png" alt='' width={619} height={554} className={classNames("logo")} />
                </span>
                <span className={classNames("ready__arrow")}>
                    <Image src="/home/arrow.svg" alt='' width={130} height={86.5}/>
                </span>
                <MorePoints className={classNames('ready__points')} />
            </Container>
        </section>
    )
}

export default Ready