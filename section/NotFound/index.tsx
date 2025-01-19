import Container from '@/components/common/Container'
import classNames from 'classnames'
import React from 'react'
import Link from 'next/link'
import './style.scss'

function NotFound() {

    return (
        <Container tag='section' className={classNames('not-found')} >
            <h1 className={classNames('not-found__title')} >
                Desolé!
            </h1>
            <div className={classNames('not-found__message')} >
                <h2>
                    404
                    <span></span>
                    <p> cette page n'éxiste pas </p>
                </h2>
                <p className={classNames('not-found__message__link-to-home')} >
                    Revenez au page
                    <Link href={'/'} >d'aceuille</Link>
                </p>
            </div>
        </Container>
    )
}

export default NotFound 