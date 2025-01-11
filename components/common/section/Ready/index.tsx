import React from 'react'
import Container from '../../Container'
import "./style.scss"
import classNames from 'classnames'
import Image from 'next/image'
import MorePoints from '@/components/vector/MorePoints'

function Ready() {
    return (
        <section className={classNames("ready")}>
            <Container className={classNames("ready__content")}>
                <div className={classNames("ready__text")}>
                    <h3>Prêt?</h3>
                    <p>
                        Téléchargez notre application <br />
                        mobile pour démarrer <br />
                        facilement votre cours.
                    </p>
                </div>
                <div className={classNames("ready__logos")}>
                    <span className={classNames("logo")}>
                        <Image src="/home/google-play.png" alt='' width={266} height={117} />
                    </span>
                    <span className={classNames("logo")}>
                        <Image src="/home/app-store.png" alt='' width={266} height={117} />
                    </span>
                </div>
                <span className={classNames("ready__3circles")}>
                    <Image src="/home/3circles.png" alt='' width={619} height={554} className={classNames("logo")} />
                </span>
                <span className={classNames("ready__arrow")}>
                    <Image src="/home/arrow.png" alt='' width={130} height={86.5} className={classNames("logo")} />
                </span>
                <MorePoints className={classNames('ready__points')} />
            </Container>
        </section>
    )
}

export default Ready