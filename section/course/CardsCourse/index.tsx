import React from 'react'
import Container from '@/components/common/Container'
import './style.scss'
import classNames from 'classnames'
import CardCourse from '@/components/common/card/CardCourse'

export type CardsCourseProps = {
  filter: "Tous les cours" | "Collections" | "Archives"
}

function CardsCourse({ filter }:
  CardsCourseProps
) {
  let filterTest: string

  if (filter == 'Tous les cours') {
    filterTest = "ceci sont tous les cours"
  } else if (filter === 'Collections') {
    filterTest = 'ceci sont vos collections'
  } else {
    filterTest = 'ceci sont vos archive'
  }

  return (
    <Container tag='div' className={classNames("cardCourseContainer")} >
      <div className={classNames('cardCourseContainer__course')} >
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
    </Container>
  )


}

export default CardsCourse