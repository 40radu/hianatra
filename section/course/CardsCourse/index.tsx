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
import CardCourse, { CardCourseProps } from '@/components/common/card/CardCourse'
import { courseData, CourseDataType } from './data'
export type CardsCourseProps = {
  filter: "all" | "collections" | "archives"
}

function CardsCourse({ filter }:
  CardsCourseProps
) {
  const [innerWidth, setInnerWidth] = useState(0)
  const seletedCourse = courseData.find((course) => course.type === filter)
  const firstThreeCards: CardCourseProps[] = [
    seletedCourse?.content[0]!,
    seletedCourse?.content[1]!,
    seletedCourse?.content[2]!,
  ]
  const course = seletedCourse?.content.slice(3)

  useEffect(() => {
    const updateWindowWidth = () => setInnerWidth(window.innerWidth)
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [])


  return (
    <Container tag='div' className={classNames("cardCourseContainer")} >
      {
        innerWidth < 500 &&
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1.2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 6000 }}
          breakpoints={
            {
              400: {
                slidesPerView: 1.07
              }
            }

          }
        >
          {
            firstThreeCards.map((course, id) => {
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
          }
        </Swiper>
      }
      <OneSectionSlideCard
        cardsArray={innerWidth > 500 ? seletedCourse?.content! : course!}
      />
    </Container>
  )
}

export default CardsCourse
