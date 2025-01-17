import React from 'react'
import Container from '@/components/common/Container'
import './style.scss'
import classNames from 'classnames'

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
              <div className={classNames('cardCourseContainer__course__card')} key={id}>
                {filterTest}
              </div>
            )
          })
        }
      </div>
    </Container>
  )


}

export default CardsCourse