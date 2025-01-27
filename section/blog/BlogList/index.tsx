'use client'

import React, { useState } from 'react'
import Container from '@/components/common/Container'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import './style.scss'
import { blogLinksData, blogListData, listTab } from './data'
import BodyTabsBlog from '@/components/display/BodyTabsBlog'

function BlogList() {
  const [tabActive, setTabActive] = useState<listTab>("all")
  const dataCourseActive = blogListData.find((blog) => blog.type === tabActive)

  return (
    <>
      <Container className="b-list-course" >
        <div className="b-list-course__navbar" >
          <div className='b-list-course__navbar__navigation'>
            {
              blogLinksData.map((link, id) => {
                return (
                  <ButtonSquare
                    key={`course--${id}`}
                    label={link.label}
                    variant={tabActive === link.href ? "blue" : "white"}
                    className='b-list-course__navbar__navigation__button'
                    onClick={() => setTabActive(link.href)}
                  />
                )
              })
            }
          </div>
        </div>
        <BodyTabsBlog cardsList={dataCourseActive!.content} />
      </Container>
    </>
  )
}

export default BlogList