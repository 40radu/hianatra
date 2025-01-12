"use client"

import React from 'react'
import Container from '../../Container'
import "./style.scss"
import Heading from '../../Heading'
import classNames from 'classnames'
import Image from 'next/image'
import Icon from '@/components/Icon'
import { testimonialData } from './data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Star from '@/components/Icon/Star/Star'

function Testimonial() {
    return (
        <Container className={classNames("testimonial")}>
            <Heading label='vos retours' align='center' textAlign='center' >
                <span className='primary'>Que disent les <br />
                    utilisateurs de </span><br />
                <span className='decoration'>Hianatra?</span>
            </Heading>
            <Swiper

                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: false }}
                loop={true}
                // autoplay={{ delay: 9000 }}
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    }
                }}>


                {
                    testimonialData.map((td, index) => {
                        return (
                            <SwiperSlide key={`td_${index}`}>
                                <div className={classNames("testimonial__card")} >
                                    <div className={classNames("testimonial__card-head")}>
                                        <span className={classNames("profile")}><Image src={td.image} alt="" width={96} height={96} /></span>
                                        <Icon name='apostr' variant='blue-secondary' className='apostr' />
                                    </div>
                                    <div className={classNames("testimonial__card-stars")}>
                                        {td.starNumber ? Array(td.starNumber).fill(null).map((_, index) => {
                                            return (
                                                <Star key={`star_${index}`} />
                                            )
                                        }) : ""}
                                    </div>
                                    <p className={classNames("testimonial__card-description")} dangerouslySetInnerHTML={{ __html: td.description }} />
                                    <p className={classNames("testimonial__card-user")}>
                                        {td.userName}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Container >
    )
}

export default Testimonial