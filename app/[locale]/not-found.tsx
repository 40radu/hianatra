import classNames from 'classnames'
import React from 'react'
import './notFound.scss'
function NotFound() {

    return (
        <section className={classNames('not-found')} >
            <h1 className={classNames('not-found__title')} >
                Desolé!
            </h1>
            <div className={classNames('not-found__message')} >
                <h2>
                    404
                </h2>
                <span></span>
                <p> cette page n&apos;éxiste pas </p>
            </div>
        </section>
    )
}

export default NotFound 