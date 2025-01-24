"use client"

import React from 'react'
import Container from '../../Container'
import "./style.scss"
import Heading from '../../Heading'
import classNames from 'classnames'
import { cardTestimonialData } from './data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CardTestimonial from '../../card/CardTestimonial'

function Testimonial() {
    return (
        <Container className={classNames("testimonial")}>
            <Heading label='vos retours' align='center' textAlign='center' >
                <span className='primary'>Que disent les utilisateurs<br />
                     de </span>
                <span className='decoration'>Hianatra?</span>
            </Heading>
            <Swiper

                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: false }}
                loop={true}
                autoplay={{ delay: 9000 }}
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    }
                }}>
                {
                    cardTestimonialData.map((td, index) => {
                        return (
                            <SwiperSlide key={`td_${index}`}>
                                <CardTestimonial description={td.description} image={td.image} starNumber={td.starNumber} userName={td.userName} key={`td_${index}`} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Container >
    )
}

export default Testimonial