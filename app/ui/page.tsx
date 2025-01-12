"use client"

import Heading from '@/components/common/Heading'
import classNames from 'classnames'
import React from 'react'
import "./style.scss"
import MorePoints from '@/components/vector/MorePoints'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
      <h5>more points</h5>
      <MorePoints colorType='#FFFFFF' />


      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
  )
}

export default Ui