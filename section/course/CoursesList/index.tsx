'use client'

import React, { useState } from 'react'
import Container from '@/components/common/Container'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import './style.scss'
import { courseLinksData, courseListData, listTabCourse } from './data'
import BodyTabsCourse from '@/components/display/BodyTabsCourse'
import { useScopedI18n } from '@/locales/client'

function CoursesList() {
  const translate = useScopedI18n("courseHeader")
  const [tabActive, setTabActive] = useState<listTabCourse>("all")
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
                    label={translate(`${link.label}`)}
                    variant={tabActive === link.href ? "blue" : "white"}
                    className='c-list-course__navbar__navigation__button'
                    onClick={() => setTabActive(link.href)}
                  />
                )
              })
            }
          </div>
        </div>
        <BodyTabsCourse cardsList={dataCourseActive!.content} />
      </Container>
    </>
  )
}

export default CoursesList