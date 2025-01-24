"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import CardCourse from '@/components/common/card/CardCourse'
import { newsCourseData } from './data'
import Container from '@/components/common/Container'
import './style.scss'

function NewsCourseCards() {
	return (
		<Container tag='section' className='new-course' >
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
					newsCourseData.map((course, id) => {
						return (
							<SwiperSlide key={`card-slide-${id}`}>
								<CardCourse
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

export default NewsCourseCards