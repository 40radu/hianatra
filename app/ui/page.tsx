import Heading from '@/components/common/Heading'
import classNames from 'classnames'
import React from 'react'
import "./style.scss"

function Ui() {
  return (
    <>
      <h5>heading</h5>
      <Heading label='Pourquoi nous?' align='start'>
        Normal <br />
        <span className='primary'>Primary</span>
        <br />
        <span className='secondary'>Secondary</span>
        <br />
        <span className='decoration'>Avenir</span>
      </Heading>
    </>
  )
}

export default Ui