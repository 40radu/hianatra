"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Container from '@/components/common/Container'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import './style.scss'
import { spotlightBlogData } from './data'
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
          spotlightBlogData.map((blog, id) => {
            return (
              <SwiperSlide key={`blog-slide-${id}`}>
                <CardBlog
                  key={id}
                  image={blog.image}
                  isFree={blog.isFree}
                  numberOfLesson={blog.numberOfLesson}
                  numberOfStudent={blog.numberOfStudent}
                  title={blog.title}
                  topic={blog.topic.toUpperCase()}
                  price={blog.price}
                  description={blog.description}
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