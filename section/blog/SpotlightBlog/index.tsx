"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Container from '@/components/common/Container'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import './style.scss'
import { spotlightCourseData } from './data'
import CardBlog from '@/components/common/card/CardBlog'

function SpotlightBlog() {
  return (
    <Container tag='section' className='b-spotlight' >
      <h3>À la une</h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.2}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 6000 }}
        pagination={true}
        breakpoints={
          {
            768: {
              slidesPerView: 2
            },
            1280: {
              slidesPerView: 3,
              loop: false
            }
          }

        }
      >
        {
          spotlightCourseData.map((course, id) => {
            return (
              <SwiperSlide key={`blog-slide-${id}`}>
                <CardBlog
                  key={id}
                  image={course.image}
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
    </Container>
  )
}

export default SpotlightBlog