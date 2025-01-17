import React from 'react'
import Container from '@/components/common/Container'
import './style.scss'

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
    <Container>
      <div>
        {filterTest}
      </div>
    </Container>
  )


}

export default CardsCourse