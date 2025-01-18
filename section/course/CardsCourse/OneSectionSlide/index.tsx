import CardCourse from '@/components/common/card/CardCourse'
import classNames from 'classnames'
import React from 'react'
import './style.scss'
import { CardsCourseProps } from '..'

function OneSectionSlideCard(props: CardsCourseProps) {
    const { filter = 'Tous les cours' } = props
    return (
        <div className={classNames('course')} >
            {
                Array.from({ length: 6 }, (_, id) => {
                    return (
                        <CardCourse
                            key={id}
                            image='/courses/html.png'
                            isFree={true}
                            numberOfLesson={10}
                            numberOfStudent={10}
                            title={filter}
                            topic='HTML'
                            price='20 000 Ar'
                            description='this is the descroptioon of the this specific card and course'
                        />
                    )
                })
            }
        </div>
    )
}

export default OneSectionSlideCard