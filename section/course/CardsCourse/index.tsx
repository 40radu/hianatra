import React from 'react'
import classNames from 'classnames'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import OneSectionSlideCard from './OneSectionSlide'
import { courseData } from './data'
import './style.scss'

export type CardsCourseProps = {
  filter: "all" | "collections" | "archives"
}

function CardsCourse({ filter }:
  CardsCourseProps
) {
  const seletedCourse = courseData.find((course) => course.type === filter)


  return (
    <div className={classNames("cardCourseContainer")} >
      <OneSectionSlideCard
        cardsArray={seletedCourse?.content!}
      />
    </div>
  )
}

export default CardsCourse
