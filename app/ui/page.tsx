"use client"

import Heading from '@/components/common/Heading'
import React from 'react'
import "./style.scss"
import MorePoints from '@/components/vector/MorePoints'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Input from '@/components/common/Input'
import TextArea from '@/components/common/TextArea'
import Logo from '@/components/common/Logo'
import CardInfo from '@/components/common/card/CardInfo'
import NavBar from '@/components/layout/navBar'
import Selectlang from '@/components/display/SelectLang'
import CourseHeader from '@/components/display/CourseHeader'

function Ui() {
  return (
    <>
      {/* <NavBar /> */}
      <h5>heading</h5>
      <Heading label='Pourquoi nous?' align='start'>
        Normal <br />
        <span className='primary'>Primary</span>
        <br />
        <span className='secondary'>Secondary</span>
        <br />
        <span className='decoration'>Avenir</span>
      </Heading>
      <h5>more points</h5>
      <MorePoints colorType='#FFFFFF' />
      <h5>TextArea</h5>
      <TextArea name='message' placeholder='Message' />
      <h5>Input</h5>
      <Input name='Email' placeholder='Email' type='text' />
      br
      <h5>
        LOgo
      </h5>
      <Logo variant='primary' />
      <Selectlang />
      <CourseHeader />
    </>
  )
}

export default Ui