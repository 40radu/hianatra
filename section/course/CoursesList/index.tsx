'use client'

import React, { useState } from 'react'
import Container from '@/components/common/Container'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import './style.scss'
import { courseLinksData, courseListData, listTab } from './data'
import BodyTabs from '@/components/display/BodyTabs'

function CoursesList() {
  const [tabActive, setTabActive] = useState<listTab>("all")
  const dataCourseActive = courseListData.find((course) => course.type === tabActive)

  return (
    <>
      <Container className="c-list-course" >
        <div className="c-list-course__navbar" >
          <div className='c-list-course__navbar__navigation'>
            {
              courseLinksData.map((link, id) => {
                return (
                  <ButtonSquare
                    key={`course--${id}`}
                    label={link.label}
                    variant={tabActive === link.href ? "blue" : "white"}
                    className='c-list-course__navbar__navigation__button'
                    onClick={() => setTabActive(link.href)}
                  />
                )
              })
            }
          </div>
        </div>
        <BodyTabs cardsList={dataCourseActive!.content} />
      </Container>
    </>
  )
}

export default CoursesList