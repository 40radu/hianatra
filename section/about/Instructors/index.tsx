
"use client"
import CardInstructor from '@/components/common/card/CardInstructor'
import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import classNames from 'classnames'
import React from 'react'
import "./style.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { instructorData } from './data'

function Instructors() {
	return (
		<Container className={classNames("instructors")}>
			<Heading label='Team’s Hianatra'>
				Instructor Qualifié <span className='decoration'>Hianatra</span>
			</Heading>
			<Swiper

				modules={[Pagination, Autoplay]}
				slidesPerView={2}
				spaceBetween={10}
				pagination={{ clickable: false }}
				loop={true}
				autoplay={{ delay: 10000 }}
				breakpoints={{
					768: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 3
					},
					1280: {
						slidesPerView: 4,
						loop : false
					}
				}}
				className={classNames("instructors__content")}>
				{instructorData.map((id, index) => (
					<SwiperSlide key={`instructor_${index}`}>
						<CardInstructor imgSrc={id.imgSrc} job={id.job} name={id.name} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	)
}

export default Instructors