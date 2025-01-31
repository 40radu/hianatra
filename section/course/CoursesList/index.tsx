'use client'

import React, { useState } from 'react'
import Container from '@/components/common/Container'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import './style.scss'
import { allCourseData, archiveData, collectionData, courseLinksData, listTabCourse } from './data'
import { useScopedI18n } from '@/locales/client'
import CardCourse from '@/components/common/card/CardCourse'

function CoursesList() {
  const translate = useScopedI18n("courseList")
  const [tabActive, setTabActive] = useState<listTabCourse>("all")
  const t = useScopedI18n ("courseList.data")

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
                    label={translate(`tabs.${link.label}`)}
                    variant={tabActive === link.href ? "blue" : "white"}
                    className='c-list-course__navbar__navigation__button'
                    onClick={() => setTabActive(link.href)}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='c-list-course__body'>
          {
            tabActive === "all" ?
              allCourseData.map((card, id) => {
                return (
                  <CardCourse {...card} key={id} keyDescription={t(`${card.keyDescription}.description`)} />
                )
              })
              : ""
          }
          {
            tabActive === "collection" ?
              collectionData.map((card, id) => {
                return (
                  <CardCourse {...card} key={id} keyDescription={t(`${card.keyDescription}.description`)} />
                )
              })
              : ""
          }
          {
            tabActive === "archive" ?
              archiveData.map((card, id) => {
                return (
                  <CardCourse {...card} key={id} keyDescription={t(`${card.keyDescription}.description`)} />
                )
              })
              : ""
          }
        </div>
      </Container>
    </>
  )
}

export default CoursesList