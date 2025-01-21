import CardCourse, { CardCourseProps } from '@/components/common/card/CardCourse'
import classNames from 'classnames'
import React from 'react'
import './style.scss'

type CardGroupeProps = {
    section: CardCourseProps[]
}

function OneSectionSlideCard({ section }: CardGroupeProps) {
    return (
        <div className={classNames('course')} >
            {
                section.map((course, id) => {
                    return (
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
                    )
                })
            }
        </div>
    )
}

export default OneSectionSlideCard