"use client"

import React, { useEffect, useMemo, useState } from 'react'
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
import { courseData } from './data'
export type CardsCourseProps = {
  filter: "Tous les cours" | "Collections" | "Archives"
}

function CardsCourse({ filter }:
  CardsCourseProps
) {
  const [innerWidth, setInnerWidth] = useState(0)
  const seletedCourse = courseData.find((course) => course.type === filter)
  const sections = useMemo(() => {
    if (!seletedCourse?.content) return []
    const groupeContent = []
    for (let i = 0; i < seletedCourse.content.length; i += 6) {
      groupeContent.push(seletedCourse.content.slice(i, i + 6))
    }
    return groupeContent
  }, [seletedCourse])

  useEffect(() => {
    const updateWindowWidth = () => setInnerWidth(window.innerWidth)
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [])


  return (
    <Container tag='div' className={classNames("cardCourseContainer")} >
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.15}
        spaceBetween={10}
        pagination={{ clickable: false }}
        loop={true}
        autoplay={false}
        breakpoints={{
          768: { slidesPerView: 2.4 },
          1024: { slidesPerView: 1 }
        }}>
        {
          innerWidth > 1024 ?
            (
              sections.map((section, index) => {
                return (
                  <SwiperSlide key={`card-slide-section-${index}`}>
                    <OneSectionSlideCard section={section} />
                  </SwiperSlide>
                )
              })
            )
            :
            (
              seletedCourse?.content.map((course, id) => {
                return (
                  <SwiperSlide key={`card-slide-${id}`}>
                    <CardCourse
                      key={id}
                      image='/courses/html.png'
                      isFree={course.isFree}
                      numberOfLesson={course.numberOfLesson}
                      numberOfStudent={course.numberOfStudent}
                      title={course.title}
                      topic={course.topic.toUpperCase()}
                      price={course.price}
                      description={course.description}
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