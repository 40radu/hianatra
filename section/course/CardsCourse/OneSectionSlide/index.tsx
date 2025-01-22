import CardCourse, { CardCourseProps } from '@/components/common/card/CardCourse'
import classNames from 'classnames'
import React from 'react'
import './style.scss'

type CardGroupeProps = {
    carsdArray: CardCourseProps[]
}

function OneSectionSlideCard({ carsdArray }: CardGroupeProps) {
    return (
        <div className={classNames('course')} >
            {
                carsdArray.map((card, id) => {
                    return (
                        <CardCourse
                            key={id}
                            image='/courses/html.png'
                            isFree={card.isFree}
                            numberOfLesson={card.numberOfLesson}
                            numberOfStudent={card.numberOfStudent}
                            title={card.title}
                            topic={card.topic.toUpperCase()}
                            price={card.price}
                            description={card.description}
                        />
                    )
                })
            }
        </div>
    )
}

export default OneSectionSlideCard