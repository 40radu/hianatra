"use client"

import React, { useEffect, useState } from 'react'
import Container from '@/components/common/Container'
import './style.scss'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import OneSectionSlideCard from './OneSectionSlide'
import CardCourse from '@/components/common/card/CardCourse'
export type CardsCourseProps = {
  filter: "Tous les cours" | "Collections" | "Archives"
}

function CardsCourse({ filter }:
  CardsCourseProps
) {
  const [windwWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth)
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [])


  return (
    <Container tag='div' className={classNames("cardCourseContainer")} >
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: false }}
        loop={true}
        autoplay={false}
        breakpoints={{
          375: { slidesPerView: 1.2 },
          400: { slidesPerView: 1.3 },
          500: { slidesPerView: 1.6 },
          600: { slidesPerView: 2 },
          730: { slidesPerView: 2.4 },
          800: { slidesPerView: 1 }
        }}>
        {
          windwWidth > 800 ?
            (
              Array.from({ length: 3 }, (_, index) => {
                return (
                  <SwiperSlide key={`card-slide-section-${index}`}>
                    <OneSectionSlideCard filter={filter} />
                  </SwiperSlide>
                )
              })
            )
            :
            (
              Array.from({ length: 6 }, (_, id) => {
                return (
                  <SwiperSlide key={`card-slide-${id}`}>
                    <CardCourse
                      key={id}
                      image='/courses/html.png'
                      isFree={true}
                      numberOfLesson={10}
                      numberOfStudent={10}
                      title={filter}
                      topic='HTML'
                      price='20 000 Ar'
                      description='this is the descroptioon of the this specific card and course'
                    />
                  </SwiperSlide>
                )
              })
            )
        }
      </Swiper>
    </Container>
  )


}

export default CardsCourse