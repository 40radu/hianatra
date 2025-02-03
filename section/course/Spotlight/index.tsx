"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import CardCourse from '@/components/common/card/CardCourse'
import Container from '@/components/common/Container'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import './style.scss'
import { spotlightCourseData } from './data'
import { useScopedI18n } from '@/locales/client'

function Spotlight() {
	const translate = useScopedI18n("courseSpotlight")
	return (
		<Container tag='section' className='c-spotlight' >
			<h3>{translate("title")}</h3>
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
									keyDescription={translate(`data.${course.keyDescription}.description`)}
								/>
							</SwiperSlide>
						)
					})
				}

			</Swiper>
		</Container>
	)
}

export default Spotlight