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
                    <span></span>
                    <p> cette page n'éxiste pas </p>
                </h2>
            </div>
        </section>
    )
}

export default NotFound 