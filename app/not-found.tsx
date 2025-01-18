import classNames from 'classnames'
import { redirect } from 'next/navigation'
import React from 'react'

function ErrorPage() {
    // alert('page not found')
    redirect('/')
    // return (
    //     <div className={classNames('not-found')} >
    //         page not found
    //     </div>
    // )
}

export default ErrorPage